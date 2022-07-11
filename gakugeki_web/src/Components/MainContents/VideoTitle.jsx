const VideoTitle = (props) => {
    const style = {
        width: "100%",
        marginLeft: "5%",
        marginRight: "5%",
        textAlign: "left",
    }
    return (
        <div style = {style}>
            <h2>{props.text}</h2>
        </div>
    );
};

export default VideoTitle;