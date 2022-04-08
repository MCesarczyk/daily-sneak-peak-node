const apiUrl = process.env.NODE_ENV === 'production' ? 'https://teachers-assistant.cesarczyk.dev' : '';

export const TITLE_URL = `${apiUrl}/api/title`;

export const CHILDREN_URL = `${apiUrl}/children`;

export const FILE_DOWNLOAD_URL = `${apiUrl}/api/get/fileUrl`;