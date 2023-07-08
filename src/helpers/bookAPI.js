import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export async function requestPosts() {
  const { data } = await instance.get('/posts');
  return data;
}

export async function requestPostById(id) {
  const { data } = await instance.get(`/posts/${id}`);
  return data;
}

export async function requestPostComments(id) {
  const { data } = await instance.get(`/comments`, {
    params: { postId: id },
  });
  return data;
}
