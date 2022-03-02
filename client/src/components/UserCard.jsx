import React from 'react';
import { Link } from 'react-router-dom';
import Icons from './icons/Icons';
import { StyledAvatar } from './styles/avatar';
import { StyledUserCard } from './styles/userCard';

const UserCard = ({ user, handleClose }) => {
  const handleCloseAll = () => {
    if (handleClose) handleClose();
  };
  return (
    <StyledUserCard>
      <>
        <Link to={`/profile/${user._id}`} onClick={handleCloseAll}>
          {user.avatar ? (
            <StyledAvatar small>
              <img src={user.avatar} alt='' />
            </StyledAvatar>
          ) : (
            <StyledAvatar small>
              <Icons.UserMenu />
            </StyledAvatar>
          )}
          <div>
            <span>{user.name}</span>
            <small>{user.fullName}</small>
          </div>
        </Link>
      </>
    </StyledUserCard>
  );
};

export default UserCard;
