import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
  return (
    <div className='youtube-wrapper'>
      <div className='img-thumb'>
        <img alt='' src='https://i.ytimg.com/vi/e3Zni2e_Q30/maxresdefault.jpg'/>
        <p className='time'>{props.time}</p>
      </div>
      <p className='title'>Title Here</p>
      <p className='desc'>desc here</p>
    </div>
  )
}
YoutubeComp.defaultProps = {
  time:'00.00'
}
export default YoutubeComp;
