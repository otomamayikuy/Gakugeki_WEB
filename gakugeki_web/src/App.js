import React,{ useEffect, useState } from 'react';
import VideoPlayer from './Components/VideoPlayer';
import './App.css';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer';
import MainContents from './Components/MainContents/MainContents';
import OtherVideos from './Components/otherVideos/otherVideos'
import { initializeApp } from "firebase/app";
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { getFirestore, collection,getDocs } from "firebase/firestore";


function App() {
  const firebaseConfig = {
    storageBucket: '',
    projectId: "gakugeki-web"
  };
  const app = initializeApp(firebaseConfig);
  const [url, setURL] = useState('')
  const storage = getStorage(app);
  const db = getFirestore(app);
  getDownloadURL(ref(storage, 'gs://gakugeki-web.appspot.com/sample.mp4'))
    .then((url) => {
      setURL(url)
    })
  const [reports,setReport]=useState([])
  async function getReport() {
    const querySnapshot = await getDocs(collection(db, "comments"));
    const newData=[]
    querySnapshot.forEach((doc) => {
      alert(doc.data())
      if(doc.data()) {
        newData.push(doc.data())
      }
    });
    setReport([...newData])
  }
  useEffect(() => {getReport()},[])
  console.log(url)

  return (
    <div className="screen">
    <Header/>
    {url!=="" && (
    <VideoPlayer VideoURL = {url}/>
    )}
    {url==="" && <div className="blackScreen"></div>}
    <div className="main">
      <div className="contents">
        <MainContents reports={reports} db={db} function={getReport}/>
      </div>
      <div className="side">
        <OtherVideos/>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default App;