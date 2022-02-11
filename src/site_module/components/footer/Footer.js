/** @format */

import React from "react";
import "./footer.css";
import ReactAudioPlayer from "react-audio-player";
import audiofile from '../../assests/binamarsAudio.mp3'
function Footer() {
  return (
    <div className="footer">
      <p>BINAMARS RAP IS NOW OFFICIALLY LIVE!</p>
      <ReactAudioPlayer
       src={audiofile}
        autoPlay = 'false' 
        className='audiofile'
        muted
        controls />
    </div>
  );
}

export default Footer;
