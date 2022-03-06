import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GLOBAL_TYPES } from '../../redux/types';
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
  const dispatch = useDispatch();
  const { theme } = useSelector((state) => state);

  const handleClose = () => {
    setOpenMenu(false);
  };

  const handleLightDarkMode = () => {
    dispatch({
      type: GLOBAL_TYPES.THEME,
      payload: !theme,
    });
    // setOpenMenu(false);
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
          <li onClick={handleLightDarkMode}>
            <label htmlFor='theme'>{theme ? 'Light mode' : 'Dark mode'}</label>
          </li>

          <li onClick={handleClose}>Logout</li>
        </StyledProfileMenu>
      )}
    </StyledProfileContainer>
  );
};

export default ProfileModal;
<Icons.UserMenu />;
