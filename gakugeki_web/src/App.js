import React,{useState} from 'react';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import MainContents from './Components/MainContents/MainContents';
import OtherVideos from './Components/otherVideos/otherVideos'
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";


function App() {
  const style = {
    textAlign: "left",
    minHeight: "100%",
    height: "100%",
    backgroundColor: "#eeeeff", 
    width:"100%"
  }
  const firebaseConfig = {
    storageBucket: ''
  };
  const app = initializeApp(firebaseConfig);
  const [url, setURL] = useState('')
  const storage = getStorage(app);
  getDownloadURL(ref(storage, 'gs://gakugeki-web.appspot.com/sample.mp4'))
    .then((url) => {
      setURL(url)
    })
  console.log(url)
  return (
    <div className="App" style = {style}>
      <Header/>
      <OtherVideos/>
      {url!=="" && (
      <VideoPlayer VideoURL = {url}/>
      )}
      {url==="" && <div className="blackScreen"></div>}
      <MainContents/>
      <Footer/>
    </div>
  )
}

export default App;