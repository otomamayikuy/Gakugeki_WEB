import React from 'react';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';

function App() {
  const style = {
    width: "50%",
    margin: "0 auto",
    marginTop: 150,
  };
  return (
    <div className="App">
      <div style={style}>
        <VideoPlayer 
        VideoURL = 'https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm'/>
      </div>
    </div>
  );
}

export default App;