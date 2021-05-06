import { request } from '../utils/request';

export const getAllAuthor = () =>
  request({
    url: '/Authors',
    method: 'GET',
    params: {},
    data: {},
  });
export const getAuthorById = ({ id }) =>
  request({
    url: `/Authors/${id}`,
    method: 'GET',
    params: {},
    data: {},
  });
