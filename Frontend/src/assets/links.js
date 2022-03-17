const apiUrl = process.env.NODE_ENV === 'production' ? 'http://164.92.135.59:5000' : '';

export const TITLE_URL = `${apiUrl}/api/title`;
export const CHILDREN_LIST_URL = `${apiUrl}/api/get/children`;
export const CHILD_POST_URL = `${apiUrl}/api/post/childtodb`;
export const CHILD_UPDATE_URL = `${apiUrl}/api/put/children`;
export const CHILD_DELETE_URL = `${apiUrl}/api/delete/children`;