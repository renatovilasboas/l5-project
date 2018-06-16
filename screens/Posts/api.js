import requestUrl from '../../utils/request';

export const requestPosts = async () => {
  const posts = await requestUrl('https://jsonplaceholder.typicode.com/posts');
  return posts;
};

export const requestUsers = async () => {
  const users = await requestUrl('https://jsonplaceholder.typicode.com/users');
  return users;
};
