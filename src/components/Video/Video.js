import React, {useState} from 'react'
import './Video.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {faThumbsUp,faThumbsDown, faCommentAlt,faShare} from '@fortawesome/free-solid-svg-icons';
import userIcon from '../../assets/images.jpeg'
import emoji from '../../assets/emoji.jpeg'

const Video = (props) => {
  library.add(faThumbsUp,faThumbsDown,faCommentAlt,faShare)

  const [like, setLike] = useState(false)
  const [dislike, setDislike] = useState(false)

  const playPause = (e) => {
    if(e.target.paused) {
      e.target.play();
    }
    else {
        e.target.pause();
    }
  }

  const toggleLike = () => {
    console.log("dfghjk")
    if(like){
      setLike(false)
    }else{
      setLike(true)
      setDislike(false)
    }
  }

  const toggleDislike = () => {
    if(dislike){
      setDislike(false)
    }else{
      setDislike(true)
      setLike(false)
    }
  }


  return (
        <div className='video-comp'>
        <div className='video-container'>
            <video className='video' controls onTouchStart={(e) => {playPause(e)}} >
                <source src={props.video} type="video/mp4"/>
            </video>
            <div className='user-section'>
              <img src={emoji} className='user-icon-small' />
              <p className='user-name'>@misbahJS</p>
              <p className='subscribe'>subscribe</p>
            </div>
            <p className='video-title'>Rain Remains me of my beautiful childhood memories.....<br/>#trending</p>
        </div>
        <div className='video-options-mobile'>
          <div className='circle-dark' onClick={toggleLike}>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className='like' onClick={toggleLike} style={{color: like ? "#0099ff" : ""}} />
          </div>
          <div className='circle-dark' onClick={toggleDislike}>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className='like' onClick={toggleDislike} style={{color: dislike ? "#0099ff" : ""}} />
          </div>
          <div className='circle-dark'>
            <FontAwesomeIcon icon="fa-solid fa-comment-alt" className='like' />
          </div>
          <div className='circle-dark' >
            <FontAwesomeIcon icon="fa-solid fa-share" className='like' />
          </div>
        </div>
        <div className='video-options'>
          <div className='circle' onClick={toggleLike}>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-up" className='like' onClick={toggleLike} style={{color: like ? "#0099ff" : ""}} />
          </div>
          <div className='circle' onClick={toggleDislike}>
            <FontAwesomeIcon icon="fa-solid fa-thumbs-down" className='like' onClick={toggleDislike} style={{color: dislike ? "#0099ff" : ""}} />
          </div>
          <div className='circle'>
            <FontAwesomeIcon icon="fa-solid fa-comment-alt" className='like' />
          </div>
          <div className='circle'>
            <FontAwesomeIcon icon="fa-solid fa-share" className='like' />
          </div>
          <div className='square'>
            <img src={userIcon} className='user-icon' />
          </div>
        </div>
        </div>
  )
}

export default Video