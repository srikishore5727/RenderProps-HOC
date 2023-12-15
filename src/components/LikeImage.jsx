import React, { useState } from 'react'
import HOC from './HOC'

function LikeImage(props) {

  const {likeImageCounter,handleLikeImageCounter}= props

  // const [likeImageCounter, setLikeImageCounter] = useState(0);

  // const handleLikeImageCount = ()=>{
  //   setLikeImageCounter(likeImageCounter+1);
  // }

  return (
    <div>
      <button onClick={handleLikeImageCounter}>Like Image {likeImageCounter}</button>
    </div>
  )
}

export default HOC(LikeImage)
