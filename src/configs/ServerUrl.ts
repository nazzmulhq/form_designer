console.log(`server url:  ${process.env.REACT_APP_SERVER_URL}`);

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;
export const SERVER = `${SERVER_URL}__username__`;
// export const USER_ENDPOINT = `${API_SERVER}user`;
export const LOGIN_ENDPOINT = `${SERVER}/accounts/login/`;
export const ADD_FORM = `${SERVER}/uiformbuilder/add-form-json/`;
export const LIST_FORM = `${SERVER}/uiformbuilder/list-form-json/`;
export const UPDATE_FORM = `${SERVER}/uiformbuilder/update-form-json/`;
export const PUBLISH_FORM = `${SERVER}/uiformbuilder/publish-form-json/`;
export const REFRESH_TOKEN_ENDPOINT = "";
export const USER_MENUS_ENDPOINT = "";