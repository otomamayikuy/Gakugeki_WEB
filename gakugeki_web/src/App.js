import Screen from "./Components/Screen.jsx";
import Home from "./Components/Home.jsx";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDF8NPfovfGf9YH1q0Jp0J1LEns21Bsp7U",
    authDomain: "gakugeki-rooms.firebaseapp.com",
    projectId: "gakugeki-rooms",
    storageBucket: "gakugeki-rooms.appspot.com",
    messagingSenderId: "798166539037",
    appId: "1:798166539037:web:1f61ea87c4ac62fcb05ff4",
    measurementId: "G-M2D2H702S8"
  };
  const app = initializeApp(firebaseConfig);
  //すべての動画
  const allURL = [
    {url:'gs://gakugeki-web.appspot.com/sample.png', path:"/sample2", title:"サンプル１"},
    {url:'gs://gakugeki-web.appspot.com/sample2.png', path:"/sample1", title:"サンプル2"}
  ]
  //サンプル１の関連動画
  const sample1_others=[
    {url:'gs://gakugeki-rooms.appspot.com/sample.png', path:"/sample2", title:"サンプル１"},
    {url:'gs://gakugeki-rooms.appspot.com/sample.png', path:"/sample2", title:"サンプル１"}
  ]
  //サンプル２の関連動画
  const sample2_others=[
    {url:'gs://gakugeki-rooms.appspot.com/sample2.png', path:"/sample1", title:"サンプル2"},
    {url:'gs://gakugeki-rooms.appspot.com/sample2.png', path:"/sample1", title:"サンプル2"}
  ]
  //サンプル１の動画の情報[タイトル、概要、[出演者、出演者の説明]、関連論文リスト、関連論文のタイトルリスト]
  const sample1_videoInfo=["サンプル１", "これはサンプル１です", ["出演者！", "出演者です！"], ["https://scholar.google.co.jp/", "https://scholar.google.co.jp/"], ["グーグルスカラーのトップページ", "グーグルスカラーのトップページ"]]
  //サンプル２の動画の情報
  const sample2_videoInfo=["サンプル２", "これはサンプル２です", ["出演者？", "出演者です？"], ["https://scholar.google.co.jp/"], ["グーグルスカラーのトップページ"]]
  //環境問題タグに含まれる動画のタイトル
  const environment = ["サンプル１"]
  //社会問題タグに含まれる動画のタイトル
  const society = ["サンプル2"]
  const tag={environment:environment, society:society}
  return (
    < div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home app={app} url={allURL} tag={tag}/>} />
          <Route exact path="/sample1" element={<Screen url='gs://gakugeki-rooms.appspot.com/sample.mp4' app={app} otherURL={sample1_others} title={"sample1"} videoInfo={sample1_videoInfo}/>} />
          <Route exact path="/sample2" element={<Screen url='gs://gakugeki-rooms.appspot.com/sample.mp4' app={app} otherURL={sample2_others} title={"sample2"} videoInfo={sample2_videoInfo}/>} />
        </Routes>
      </Router>
    </ div>
  )
}

export default App;