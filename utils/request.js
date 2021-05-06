import axios from 'axios';
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export const BE_API_VERSION = '/api';

export const request = async ({
  host = '',
  prefix,
  url = '',
  method = 'get',
  params,
  data,
  headers = {},
  ...props
}) => {
  try {
    const result = await axios({
      url: `${host || `${API_BASE_URL}${BE_API_VERSION}`}${url}`,
      method,
      data,
      params,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...headers,
      },
      ...props,
    });
    return result;
  } catch (error) {
    console.error(error);
    if (error.response && error.response.status === 401) {
    }
    throw error;
  }
};
