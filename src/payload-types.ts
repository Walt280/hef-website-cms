/* tslint:disable */
/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User;
    media: Media;
    guilds: Guild;
    'submission-media': SubmissionMedia;
    projects: Project;
    submissions: Submission;
    flags: Flag;
    events: Event;
    'event-media': EventMedia;
  };
  globals: {
    'featured-projects': FeaturedProject;
    notice: Notice;
  };
}
export interface User {
  id: string;
  name: string;
  roles: ('superadmin' | 'project-owner' | 'content-moderator' | 'developer' | 'translator')[];
  updatedAt: string;
  createdAt: string;
  enableAPIKey?: boolean;
  apiKey?: string;
  apiKeyIndex?: string;
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  _verified?: boolean;
  _verificationToken?: string;
  loginAttempts?: number;
  lockUntil?: string;
  password?: string;
}
export interface Media {
  id: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Guild {
  id: string;
  name: string;
  description: string;
  debutDate: string;
  invite: string;
  icon: string | Media;
  color?: string;
  staff?: string[] | User[];
  updatedAt: string;
  createdAt: string;
}
export interface SubmissionMedia {
  id: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: {
    [k: string]: unknown;
  }[];
  organizer: string | Guild;
  status: 'draft' | 'ongoing' | 'past';
  links: {
    name: string;
    url: string;
    id?: string;
  }[];
  media: {
    type: 'image' | 'video';
    media?: string | Media;
    url?: string;
    id?: string;
  }[];
  date: string;
  image: string | Media;
  ogImage?: string | Media;
  'submission-url'?: string;
  collaborators?: string[] | User[];
  flags?: string[] | Flag[];
  devprops?: {
    key: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Flag {
  id: string;
  code: string;
  name: string;
  updatedAt: string;
  createdAt: string;
}
export interface Submission {
  id: string;
  project: string | Project;
  author: string;
  srcIcon?: string | SubmissionMedia;
  message?: string;
  media: {
    type: 'image' | 'video';
    subtype?: 'artwork' | 'picture' | 'other';
    image?: string | SubmissionMedia;
    url?: string;
    id?: string;
  }[];
  filterableAttributes: {
    name: string;
    values: {
      value: string;
      id?: string;
    }[];
    id?: string;
  }[];
  devprops: {
    key: string;
    value: string;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface Event {
  id: string;
  title: string;
  project: string | Project;
  date: string;
  images: {
    image?: string | EventMedia;
    id?: string;
  }[];
  backgroundImage?: string | EventMedia;
  content: {
    [k: string]: unknown;
  }[];
  devprops: {
    key: string;
    value:
      | {
          [k: string]: unknown;
        }
      | unknown[]
      | string
      | number
      | boolean
      | null;
    id?: string;
  }[];
  updatedAt: string;
  createdAt: string;
}
export interface EventMedia {
  id: string;
  alt?: string;
  prefix?: string;
  updatedAt: string;
  createdAt: string;
  url?: string;
  filename?: string;
  mimeType?: string;
  filesize?: number;
  width?: number;
  height?: number;
}
export interface FeaturedProject {
  id: string;
  projects?: string[] | Project[];
}
export interface Notice {
  id: string;
  enabled?: boolean;
  description?: string;
  message?: {
    [k: string]: unknown;
  }[];
}
