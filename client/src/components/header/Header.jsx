import React from 'react';
import { Link } from 'react-router-dom';
import ProfileModal from '../modal/ProfileModal';
import Menu from './Menu';
import Search from './Search';
import { StyledHeader } from './styles/header';

const Header = () => {
  return (
    <StyledHeader>
      <Link to='/' onClick={() => window.scrollTo({ top: 0 })}>
        <h1>Instagram Clone</h1>
      </Link>

      <Search />
      <Menu />
      <ProfileModal />
    </StyledHeader>
  );
};

export default Header;
