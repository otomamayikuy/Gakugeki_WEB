const Header = (props) => {
    const style = {
        width:"100%",
        textAlign: "left",
        display:"inline-block",
        backgroundColor: "#86b5eb"
    }
    return (
        <header>
        <div style = {style}>
            <h1 className="Header">
                <p> ヘッダー</p>
            </h1>
        </div>
        </header>
    );
};

export default Header;