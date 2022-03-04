import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostCard from '../../components/PostCard';
import { getPosts } from '../../redux/actions/postAction';

const Posts = () => {
  const [post, setPost] = useState([]);
  const { posts } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    setPost(posts);
  }, [dispatch, posts]);

  return (
    <div>
      {post.length === 0 && <p>Loading...</p>}
      {post.map((item) => (
        <PostCard key={item._id} post={item} />
      ))}
    </div>
  );
};

export default Posts;
