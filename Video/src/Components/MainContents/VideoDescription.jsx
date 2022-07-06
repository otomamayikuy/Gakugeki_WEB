const VideoDescription = (props) => {
    const style = {
        marginLeft: "5%",
        textAlign: "left",
        display:"inline-block"
    }
    return (
        <div style = {style}>
            <p>
            <body>{props.text}</body>
            </p>
        </div>
    );
};

export default VideoDescription;