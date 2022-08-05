import React,{ useEffect, useState } from 'react';
import VideoPlayer from './VideoPlayer';
import MiniVideoPlayer from './MiniVideoPlayer';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import MainContents from './MainContents/MainContents';
import OtherVideos from './otherVideos/otherVideos'
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { getFirestore, collection,getDocs } from "firebase/firestore";


function Screen(props) {
  const [url, setURL] = useState('')
  const storage = getStorage(props.app);
  const db = getFirestore(props.app);
  const [videoURL,setVideoURL] = useState(props.url)
  if(props.url!==videoURL){
    getURL()
    setVideoURL(props.url)
  }
  function getURL(){
    getDownloadURL(ref(storage, props.url))
    .then((url) => {
      setURL(url)
    })
  }
  const [reports,setReport]=useState([])
  async function getReport() {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const newData=[]
    querySnapshot.forEach((doc) => {
      if(doc.data()) {
        newData.push(doc.data())
      }
    });
    setReport([...newData])
  }
  useEffect(() => {
    getReport()
    getURL()
},[])
  const [scrollPosition, setScrollPosition] = useState(0)
  useEffect(() => {
    const PositionUp = () => {
      setScrollPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", PositionUp);
    PositionUp();
    return () => window.removeEventListener("scroll", PositionUp);
  }, [props.otherURL]);
  console.log(scrollPosition)
  return (
    <div className="screen">
    <Header/>
    {url!=="" && (
    <VideoPlayer VideoURL = {url}/>
    )}
    {scrollPosition>=300 && (url!=="" && (
    <MiniVideoPlayer VideoURL = {url} id="screen2"/>
    ))}
    {url==="" && <div className="blackScreen"></div>}
    <div className="main">
      <div className="contents">
        <MainContents reports={reports} db={db} function={getReport}/>
      </div>
      <div className="side">
        <OtherVideos app={props.app} url={props.otherURL}/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Screen;