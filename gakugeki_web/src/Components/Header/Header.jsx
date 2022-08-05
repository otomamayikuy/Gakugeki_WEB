import React from "react"
import logo from "../../gakugeki_logo.jpg"
import { Link } from "react-router-dom";

const Header = (props) => {
    const style = {
        position: "fixed",
        width:"100%",
        height:"70px",
        textAlign: "left",
        display:"inline-block",
        backgroundColor: "#222",
    }
    const style2 = {
        height:"70px",
        width:"100%"

    }
    return (
        <header>
        <div style = {style} id="header">
            <img src={logo} alt="ロゴ" className="logo"/>
            <div className="hamburger_position">
                <div className="hamburger_btn">
                <Link to="/"><p>ホーム</p></Link>
                </div>
            </div>
        </div>
        <div style = {style2}></div>
        </header>
    );
};

export default Header;