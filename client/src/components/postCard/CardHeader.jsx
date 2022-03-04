import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { StyledAvatar } from '../styles/avatar';
import Icons from '../icons/Icons';
import { auth } from '../helper/Helper';
import {
  StyledCardHeader,
  StyledCardHeaderWrapper,
  StyledCardName,
  StyledNavItem,
  StyledDropDownMenu,
  StyledDropDownItem,
} from './style/cardHeader';

const CardHeader = ({ post }) => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <StyledCardHeader>
      <StyledCardHeaderWrapper>
        <Link to={`/profile/${post.user._id}`}>
          <StyledAvatar small>
            <img src={post.user.avatar} alt='' />
          </StyledAvatar>
        </Link>
        <StyledCardName>
          <h6>
            <Link to={`/profile/${post.user._id}`}>{post.user.username}</Link>
          </h6>
          <small>{moment(post.createdAt).fromNow()}</small>
        </StyledCardName>
      </StyledCardHeaderWrapper>

      <StyledNavItem>
        <span onClick={() => setOpenMenu(!openMenu)}>
          <Icons.MoreHoriz />
        </span>

        {openMenu && (
          <StyledDropDownMenu>
            {auth.user._id === post.user._id && (
              <>
                <StyledDropDownItem>
                  <span>
                    <Icons.Edit />
                  </span>
                  Edit Post
                </StyledDropDownItem>
                <StyledDropDownItem>
                  <span>
                    <Icons.Delete />
                  </span>
                  Remove Post
                </StyledDropDownItem>
              </>
            )}
            <StyledDropDownItem>
              <span>
                <Icons.Copy />
              </span>
              Copy Link
            </StyledDropDownItem>
          </StyledDropDownMenu>
        )}
      </StyledNavItem>
    </StyledCardHeader>
  );
};

export default CardHeader;
