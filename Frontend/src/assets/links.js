const apiUrl = process.env.NODE_ENV === 'production' ? 'https://teachers-assistant.cesarczyk.dev/api' : '';

export const TITLE_URL = `${apiUrl}/title`;

export const CHILDREN_URL = `${apiUrl}/children`;

export const AVATAR_URL = `${apiUrl}/avatar/getUrl`;
export const AVATAR_UPLOAD_URL = `${apiUrl}/avatar/upload`;