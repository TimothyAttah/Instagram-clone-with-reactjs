import React, { useState } from 'react';
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
    </div>
  );
};

export default CardBody;
