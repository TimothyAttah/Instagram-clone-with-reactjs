import React, { useState } from 'react';
import Carousel from '../Carousel';
import { StyledCardBodyContent, StyledReadMore } from './style/cardBody';

const CardBody = ({ post }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <StyledCardBodyContent>
        <span>
          {post.content.length < 60
            ? post.content
            : readMore
            ? post.content + ' '
            : post.content.slice(0, 60) + '....'}
        </span>
        {post.content.length > 60 && (
          <StyledReadMore onClick={() => setReadMore(!readMore)}>
            {readMore ? 'Hide content' : 'Read more'}
          </StyledReadMore>
        )}
      </StyledCardBodyContent>
      {post.images.length > 0 && (
        <Carousel images={post.images} id={post._id} />
      )}
    </div>
  );
};

export default CardBody;
