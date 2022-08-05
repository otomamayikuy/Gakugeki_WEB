import {React,useEffect,useState} from 'react'
import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { Link } from "react-router-dom";
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Home(props){
    const storage = getStorage(props.app);
    const [urls, setURL] = useState([])
    function URLsetting(n,URLlist) {
        if(n>=props.url.length){
            setURL(URLlist)
            return
        }
        if(n<props.url.length){
            getDownloadURL(ref(storage,props.url[n].url))
                .then((urls) => {
                    URLlist.push({url:urls, path:props.url[n].path, title:props.url[n].title})
                    console.log(n)
                    URLsetting(n+1,URLlist)
                })
        }
    }
    useEffect(() => {URLsetting(0,[])},[])
    return(
        <>
        <Header/>
        <div id="home">
            <h1>動画一覧</h1>
            {urls.map((url,index) => (
                <Link to={url.path} key={index}><div className="allVideo"><input className="thumbnail" type="image" src={url.url} alt="動画一覧"/><p>{url.title}</p></div></Link>
            ))}
        </div>
        <Footer/>
        </>
    )
}
export default Home;
