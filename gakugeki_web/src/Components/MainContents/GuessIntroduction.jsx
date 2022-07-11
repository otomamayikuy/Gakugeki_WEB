const GuessIntroduction = (props) => {
    const style = {
        marginLeft: "5%",
        marginRight: "5%",
        textAlign: "left",
    }
    return (
        <div style = {style}>
            <h2>{props.name}</h2>
            <p>{props.text}</p>
        </div>
    );
};

export default GuessIntroduction;