import { POST_TYPES } from '../types';
import { images } from '../../components/images';

const initialState = {
  loading: false,
  posts: [
    {
      content: 'This is post one',
      images: images.PostOne,
      likes: [1, 2, 3],
      comments: [],
      user: {
        avatar: images.Alex,
        _id: '1',
        username: 'user01',
      },
      createdAt: new Date(),
      _id: 1,
    },
    {
      content: 'This is post two',
      images: images.PostTwo,
      likes: [1, 2],
      comments: [],
      user: {
        avatar: images.Jane,
        _id: '2',
        username: 'user02',
      },
      createdAt: new Date(),
      _id: 2,
    },
    {
      content: 'This is post three',
      images: images.PostThree,
      likes: [],
      comments: [],
      user: {
        avatar: images.Alex,
        _id: '1',
        username: 'user01',
      },
      createdAt: new Date(),
      _id: 3,
    },
  ],
  result: 0,
  page: 2,
};

export const posts = (state = initialState, action) => {
  console.log('ACTION_TYPES>>>>>>', action);
  switch (action.type) {
    case POST_TYPES.LOADING_POST:
      return {
        ...state,
        loading: action.payload,
      };

    case POST_TYPES.GET_POSTS:
      return {
        ...state,
        // posts: action.payload.posts,
        // result: action.payload.result,
        // page: action.payload.page,
      };

    default:
      return state;
  }
};
