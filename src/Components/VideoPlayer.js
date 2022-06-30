import React from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'

const VideoPlayer = (props) => {

  return (
    <div>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording }) => (
          <div>
            <p>{status}</p>            
            <video src={props.VideoURL} controls/>
          </div>
        )}
      />
      
    </div>
  );
}

export default VideoPlayer;