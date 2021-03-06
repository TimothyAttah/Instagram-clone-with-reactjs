import Icons from '../icons/Icons';
import { images } from '../images';

export const navMenu = [
  {
    label: 'Home',
    path: '/',
    icon: <Icons.Home />,
  },
  {
    label: 'Send',
    path: '/message',
    icon: <Icons.Send />,
  },
  {
    label: 'Discover',
    path: '/discover',
    icon: <Icons.Discover />,
  },
  {
    label: 'Favorite',
    path: '/notify',
    icon: <Icons.FavoriteBold />,
  },
];

export const dummyUser = [
  {
    id: 1,
    name: 'user01',
    avatar: '',
    fullName: 'Jane doe',
  },
  {
    id: 2,
    name: 'user02',
    avatar: images.Alex,
    fullName: 'John doe',
  },
  {
    id: 3,
    name: 'user03',
    avatar: '',
    fullName: 'Faith Ken',
  },
];

export const auth = {
  user: {
    _id: '1',
    username: 'user01',
    followers: [],
    following: [],
  },
};
