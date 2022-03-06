import React from 'react';
import { useSelector } from 'react-redux';
import Icons from './icons/Icons';

const LikeButton = ({ isLike, handleLike, handleUnLike }) => {
  const { theme } = useSelector((state) => state);

  return (
    <>
      {isLike ? (
        <Icons.FavoriteBold
          onClick={handleUnLike}
          style={{ filter: theme ? 'invert(1)' : 'invert(0)', color: 'red' }}
        />
      ) : (
        <Icons.Favorite onClick={handleLike} />
      )}
    </>
  );
};

export default LikeButton;
