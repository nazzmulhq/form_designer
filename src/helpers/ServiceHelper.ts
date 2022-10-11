import { getUserToken } from './../features/User/UserService';

//Fetch Authentic data from server
export async function fetchAuthorizedData(url: string, postData?: any) {
  try {
    const token = getUserToken();
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `jwt ${token}`,
      },
      body: JSON.stringify(postData),
    }).then((data) => data.json());
  } catch (error) {
    console.log(error);
  }
}

//Simple POST request
export async function postRequest(url: string, postData?: any) {
  try {
    return fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    }).then((data) => data.json());
  } catch (error) {
    console.log(error);
  }
}

//Get demo data from JSON file
export async function getDemoData(path: string) {
  try {
    return fetch('/demodata/' + path, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => data.json());
  } catch (error) {
    console.log(error);
  }
}
