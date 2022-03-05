import React from 'react';
import Comments from './comments/Comments';
import CardBody from './postCard/CardBody';
import CardFooter from './postCard/CardFooter';
import CardHeader from './postCard/CardHeader';
import { StyledPostsCard } from './styles/postCard';

const PostCard = ({ post }) => {
  console.log(post);
  return (
    <StyledPostsCard>
      <CardHeader post={post} />
      <CardBody post={post} />
      <CardFooter post={post} />

      <Comments post={post} />
    </StyledPostsCard>
  );
};

export default PostCard;
