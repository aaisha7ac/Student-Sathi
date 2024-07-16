import React from 'react';
import './posts.css';

const Posts = ({ posts, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div class="projcard-container">
            {posts.map(post => (    
  <div class="projcard projcard-blue">
    <div class="projcard-innerbox">
      <img class="projcard-img" src="https://m.economictimes.com/thumb/msid-93875468,width-1200,height-900,resizemode-4,imgsize-139660/iit.jpg" />
      <div class="projcard-textbox">
        <div class="projcard-title">{post.rank}.{post.name}</div>
        <div class="projcard-subtitle">About</div>
        <div class="projcard-bar"></div>
        <div class="projcard-description">{post.desc}</div>
        <div class="projcard-tagbox">
          <span class="projcard-tag">Avg Placement:{post.averageplacement}</span>
          <span class="projcard-tag">Fees:{post.fees}</span>
        </div>
      </div>
    </div>
  </div>
      ))}
      </div>
    
  );
};

export default Posts;