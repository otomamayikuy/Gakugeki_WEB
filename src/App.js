import React from 'react';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';

function App() {
  return (
    <div className="App">
        Gakugeki
        <VideoPlayer 
        VideoURL = 'https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm'/>
    </div>
  );
}

export default App;