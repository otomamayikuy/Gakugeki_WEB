import { getStorage, ref } from "firebase/storage";

//root 

const VideoUpload = (props) => {
    const style = {
        width:"100%",
        textAlign: "left",
        display:"inline-block",
        backgroundColor: "#86b5eb"
    }
    return (
        <header>
        <div style = {style}>
            <h1 class="Header">
                <a> ヘッダー</a>
            </h1>
        </div>
        </header>
    )
}

export default VideoUpload;