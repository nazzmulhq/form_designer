import { REFRESH_TOKEN_ENDPOINT } from './../../configs/ServerUrl';
import { postRequest } from './../../helpers/ServiceHelper';

const UserTokenKey = 'iom_user_token';
const UserInfoKey = 'iom_user_info';

export function setUserToken(token: string) {
  localStorage.setItem(UserTokenKey, token);
}

export function getUserToken() {
  return localStorage.getItem(UserTokenKey);
}

export function removeUserToken() {
  localStorage.removeItem(UserTokenKey);
  localStorage.removeItem(UserInfoKey);
}

export function setUserInfo(userInfo: string) {
  localStorage.setItem(UserInfoKey, userInfo);
}

export function getUserInfo() {
  return localStorage.getItem(UserInfoKey);
}

export const requestRefreshToken = async () => {
  const token = getUserToken();
  if (token) {
    try {
      const response = await postRequest(REFRESH_TOKEN_ENDPOINT, { token: token });
      setUserToken(response.token);
    } catch (e) {
      removeUserToken();
    }
  }
};
