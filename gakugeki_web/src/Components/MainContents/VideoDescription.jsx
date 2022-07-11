const VideoDescription = (props) => {
    const style = {
        marginLeft: "5%",
        marginRight: "5%",
        textAlign: "left",
    }
    return (
        <div style = {style}>
            <p>
            {props.text}
            </p>
        </div>
    );
};

export default VideoDescription;