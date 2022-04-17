const apiUrl = process.env.NODE_ENV === 'production' ? 'https://teachers-assistant.cesarczyk.dev/api' : '';

export const TITLE_URL = `${apiUrl}/title`;

export const CHILDREN_URL = `${apiUrl}/children`;

export const GROUPS_URL = `${apiUrl}/groups`;

export const AVATAR_URL = `${apiUrl}/images/getUrl`;
export const AVATAR_UPLOAD_URL = `${apiUrl}/images/upload`;