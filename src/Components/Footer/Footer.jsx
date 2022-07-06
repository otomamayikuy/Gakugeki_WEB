const Footer = (props) => {
    const style = {
        position: "relative",
        width: "100%",
        bottom: "0",
        display:"inline-block",
        background:"#86b5eb"
    }
    return (
        <footer>
        <div style = {style}>
            <h1 class="Footer">
                <a> フッター</a>
            </h1>
        </div>
        </footer>
    );
};

export default Footer;