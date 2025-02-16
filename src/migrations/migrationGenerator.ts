import 'dotenv/config';
import payload from 'payload';
import { PaginatedDocs } from 'payload/dist/mongoose/types';
import { Options } from 'payload/dist/collections/operations/local/findByID';
import path from 'path';

// eslint-disable-next-line max-len
export default async function runMigrationFunction<O = any, R = O>(collectionSlug: string, migrationFn: (doc: O) => Promise<Partial<R>>, dry = false, overrideFindOptions: Partial<Options<string>> = {}) {
	process.env.PAYLOAD_CONFIG_PATH = path.resolve(__dirname, '../payload.config.ts');

	await payload.init({
		secret: process.env.PAYLOAD_SECRET,
		mongoURL: process.env.MONGODB_URI,
		local: true,
	});

	const results: PaginatedDocs<O> = await payload.find({
		collection: collectionSlug,
		depth: 0,
		limit: 20000,
		...overrideFindOptions,
	});

	try {
		await Promise.all(results.docs.map(async (result) => {
			// @ts-ignore
			const { id } = result;

			if (collectionSlug) {
				try {
					const dataChange = await migrationFn(result);
					if (dry) {
						console.log(`Running dry, would be updating '${id}' with:`, dataChange);
					} else {
						await payload.update({
							collection: collectionSlug,
							id,
							data: dataChange,
						});
					}

					console.log(`Document in '${collectionSlug}' with id '${id}' updated successfully`);
				} catch { /* For whatever reason throws errors while actually successful */ }
			} else {
				console.log(`No document found in '${collectionSlug}' with id '${id}'`);
			}
		}));
	} catch (e) {
		payload.logger.error('Something went wrong.');
		payload.logger.error(e);
	}

	console.log('Complete');
}
