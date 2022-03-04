import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icons from '../icons/Icons';
import LikeButton from '../LikeButton';
import { StyledCardIconMenu, StyledCardInfo } from './style/cardFooter';

const CardFooter = ({ post }) => {
  const [isLike, setIsLike] = useState(false);
  const [loadLike, setLoadLike] = useState(false);

  const handleLike = async () => {
    if (loadLike) return;
    setIsLike(true);
    setLoadLike(true);
    // await dispatch(likePost({ post, auth }));
    setLoadLike(false);
  };
  const handleUnLike = async () => {
    if (loadLike) return;
    setIsLike(false);
    setLoadLike(true);
    // await dispatch(unlikePost({ post, auth }));
    setLoadLike(false);
  };
  return (
    <div>
      <StyledCardIconMenu>
        <div>
          <LikeButton
            isLike={isLike}
            handleLike={handleLike}
            handleUnLike={handleUnLike}
          />
          <Link to={`/post/${post._id}`}>
            <Icons.Comment />
          </Link>
          <Icons.SendSharp />
        </div>
        <Icons.Bookmark />
      </StyledCardIconMenu>
      <StyledCardInfo>
        <h6>{post.likes.length} likes</h6>
        <h6>{post.comments.length} comments</h6>
      </StyledCardInfo>
    </div>
  );
};

export default CardFooter;
