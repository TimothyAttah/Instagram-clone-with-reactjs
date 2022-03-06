export const GLOBAL_TYPES = {
  AUTH: 'AUTH',
  ALERT: 'ALERT',
  THEME: 'THEME',
  STATUS: 'STATUS',
  MODAL: 'MODAL',
};

export const POST_TYPES = {
  CREATE_POST: 'CREATE_POST',
  LOADING_POST: 'LOADING_POST',
  GET_POSTS: 'GET_POSTS',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  GET_POST: 'GET_POST',
};

export const EditData = (data, id, post) => {
  const newData = data.map((item) => (item._id === id ? post : item));

  return newData;
};

export const DeleteData = (data, id) => {
  const newData = data.filter((item) => item._id !== id);

  return newData;
};
