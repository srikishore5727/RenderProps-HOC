import React, { useState } from 'react'
import HOC from './HOC'

function LikePost(props) {

  const {likeImageCounter,handleLikeImageCounter}= props
  // const [likePostCounter, setPostCounter] = useState(0);

  // const handlePostCount = ()=>{
  //   setPostCounter(likePostCounter+1);
  // }

  return (
    <div>
      <button onClick={handleLikeImageCounter}>Like Post {likeImageCounter}</button>
    </div>
  )
}

export default HOC(LikePost)
