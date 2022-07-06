const GuessIntroduction = (props) => {
    const style = {
        marginLeft: "5%",
        marginRight: "5%",
        textAlign: "left",
        display:"inline-block"
    }
    return (
        <div style = {style}>
            <p>
            <h2>{props.name}</h2>
            <body>{props.text}</body>
            </p>
        </div>
    );
};

export default GuessIntroduction;