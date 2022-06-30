import React from 'react'
import { ReactMediaRecorder } from 'react-media-recorder'

const VideoPlayer = (props) => {

  return (
    <div style>
      <ReactMediaRecorder
        video
        render={({ status, startRecording, stopRecording }) => (
          <div>
            <p>{status}</p>            
            <video src={props.VideoURL}/>
          </div>
        )}
      />
      
    </div>
  );
}

export default VideoPlayer;