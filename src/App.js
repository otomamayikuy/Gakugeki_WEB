import React from 'react';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import MainContents from './Components/MainContents/MainContents';


function App() {
  const style = {
    textAlign: "left",
    minHeight: "100%",
    height: "100%",
    backgroundColor: "#eeeeff", 
    width:"100%"
  }
  return (
    <div className="App" style = {style}>
      <Header/>
      <VideoPlayer 
        VideoURL = 'https://mazwai.com/videvo_files/video/free/2018-01/small_watermarked/171124_H1_006_preview.webm'/>
      <MainContents/>
      <Footer/>
    </div>
  );
}

export default App;