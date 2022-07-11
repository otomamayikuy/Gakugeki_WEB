import React from 'react'
import VideoDescription from './VideoDescription';
import GuessIntroduction from './GuessIntroduction';
import VideoTitle from "./VideoTitle"
import GetWindowSize from '../Common/GetWindowSize';

const MainContents = (props) => {
    const {height, width} = GetWindowSize()

    const styleBasic = {
        width: "960px",
        textAlign: "left",
        background: "#eeeeff",
    }

    const styleUnderTitle = {
        width: "100%",
        textAlign: "left",
    }
    //画面サイズにより並び方を転換
    
    return (
        <div className='MainContents' style={styleBasic}>
            <div>
            <VideoTitle
            text="タイトルタイトルタイトルタイトルタイトルタイトル"/>
            </div>
            <div className='UnderTitle' style={styleUnderTitle}>
                <VideoDescription
                text="概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要"/>
                <GuessIntroduction
                name="ゲストの名前"
                text="ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明"/>
            </div>
        </div>
    );
};

export default MainContents;