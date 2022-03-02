import React from 'react';
import ProfileModal from '../modal/ProfileModal';
import Menu from './Menu';
import Search from './Search';
import { StyledHeader } from './styles/header';

const Header = () => {
  return (
    <StyledHeader>
      <h1>Instagram Clone</h1>

      <Search />
      <Menu />
      <ProfileModal />
    </StyledHeader>
  );
};

export default Header;
