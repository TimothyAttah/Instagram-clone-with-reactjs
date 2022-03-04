import { DeleteData, EditData, POST_TYPES } from '../types';
import { images } from '../../components/images';

const initialState = {
  loading: false,
  posts: [
    {
      content: `Andrew is the best when it comes to teaching programming skills, and this is the third of his courses I've taken. You can be a total noob but you'll understand what's going on because everything is explained in detail. This course in particular is a masterpiece remastered.`,
      images: [images.PostOne],
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
      images: [images.PostTwo],
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
      images: [images.PostThree],
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

    case POST_TYPES.UPDATE_POST:
      return {
        ...state,
        posts: EditData(state.posts, action.payload._id, action.payload),
      };

    case POST_TYPES.DELETE_POST:
      return {
        ...state,
        posts: DeleteData(state.posts, action.payload),
      };

    default:
      return state;
  }
};
