import Screen from "./Components/Screen.jsx";
import Home from "./Components/Home.jsx";
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { initializeApp } from "firebase/app";

function App() {
  const firebaseConfig = {
    storageBucket: '',
    projectId: "gakugeki-web"
  };
  const app = initializeApp(firebaseConfig);
  const allURL = [{url:'gs://gakugeki-web.appspot.com/sample.png', path:"/sample2", title:"サンプル１"},{url:'gs://gakugeki-web.appspot.com/sample2.png', path:"/sample1", title:"サンプル2"}]
  const sample1_others=[{url:'gs://gakugeki-web.appspot.com/sample.png', path:"/sample2", title:"サンプル１"},{url:'gs://gakugeki-web.appspot.com/sample.png', path:"/sample2", title:"サンプル１"}]
  const sample2_others=[{url:'gs://gakugeki-web.appspot.com/sample2.png', path:"/sample1", title:"サンプル2"},{url:'gs://gakugeki-web.appspot.com/sample2.png', path:"/sample1", title:"サンプル2"}]
  return (
    < div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home app={app} url={allURL}/>} />
          <Route exact path="/sample1" element={<Screen url='gs://gakugeki-web.appspot.com/sample.mp4' app={app} otherURL={sample1_others}/>} />
          <Route exact path="/sample2" element={<Screen url='gs://gakugeki-web.appspot.com/sample.mp4' app={app} otherURL={sample2_others}/>} />
        </Routes>
      </Router>
    </ div>
  )
}

export default App;