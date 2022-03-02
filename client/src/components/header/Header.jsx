import React from 'react';
import ProfileModal from '../modal/ProfileModal';
import Menu from './Menu';
import Search from './Search';

const Header = () => {
  return (
    <div>
      <div>
        <h1>Instagram Clone</h1>
      </div>
      <Search />
      <Menu />
      <ProfileModal />
    </div>
  );
};

export default Header;
