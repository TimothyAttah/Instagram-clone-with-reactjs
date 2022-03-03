import React from 'react';
import { useState } from 'react';
import Icons from '../icons/Icons';
import { images } from '../images';
import { StyledAvatar } from '../styles/avatar';
import {
  StyledProfileMenuHandle,
  StyledProfileContainer,
  StyledProfileMenu,
} from './styles/profileModal';

const ProfileModal = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleLightDarkMode = () => {
    // setOpenMenu(false);
    setTheme(!theme);
  };
  return (
    <StyledProfileContainer>
      <StyledProfileMenuHandle onClick={() => setOpenMenu(!openMenu)}>
        <StyledAvatar small>
          <img src={images.Alex} alt='' />
        </StyledAvatar>
        <span>
          <Icons.ArrowDown />
        </span>
      </StyledProfileMenuHandle>

      {openMenu && (
        <StyledProfileMenu>
          <li onClick={handleClose}>Profile</li>
          <li>
            <label htmlFor='theme' onClick={handleLightDarkMode}>
              {theme ? 'Light mode' : 'Dark mode'}
            </label>
          </li>

          <li onClick={handleClose}>Logout</li>
        </StyledProfileMenu>
      )}
    </StyledProfileContainer>
  );
};

export default ProfileModal;
<Icons.UserMenu />;
