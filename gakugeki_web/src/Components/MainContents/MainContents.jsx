import React, { useState } from 'react'
import { doc, setDoc } from "firebase/firestore";

const MainContents = (props) => {
    console.log("レンダリングされました")
    const [reports, setReports] = useState([]);
    if(reports!==props.reports) {
        setReports(props.reports)
        console.log("a")
    }
    const lookList=[]
    for(let i = 0; i < reports.length; i++) {
        lookList.push(false)
    }
    const [look, setLook] = useState(lookList)
    const commentList=[]
    for(let i = 0; i < reports.length; i++) {
        commentList.push(false)
    }
    const [thought, setThought] = useState(commentList)
    const [newComment, setNewComment] = useState("")
    const writeList=[]
    for(let i = 0; i < reports.length; i++) {
        writeList.push(false)
    }
    const [inputComments, setWriteComment] = useState(writeList)
    const styleBasic = {
        textAlign: "left",
    }

    const styleUnderTitle = {
        width: "100%",
        textAlign: "left",
    }
    const style = {
        textAlign: "right"
    }
    const [title, setTitle] = useState("");
    const [comment, setComments] = useState("");
    let comment_number = reports.length;
    const DocumentRef = doc(props.db, 'comments', 'comment'+String(comment_number+1));
    async function submit() {
        await setDoc(DocumentRef,{title:title, body:comment, comment:[]});
        setComments("");
        setTitle("");
        props.function()
    }
    function titleClicked(index) {
        look[index]=!look[index]
        setLook([...look])
    }
    function commentClicked(index) {
        thought[index]=!thought[index]
        setThought([...thought])
    }
    async function sendComment(index,items,newComment) {
        const DocumentRefComment = doc(props.db, 'comments', 'comment'+String(index+1));
        await setDoc(DocumentRefComment,{...items, comment:[...items.comment, newComment]})
        setNewComment("")
        props.function()
    }
    function writeComment(index){
        inputComments[index]=!inputComments[index]
        setWriteComment([...inputComments])
    }
    return (
        <div className='MainContents' style={styleBasic}>
            <div>
            <h2>動画のタイトル</h2>
            </div>
            <div className='underTitle' style={styleUnderTitle}>
                <h3>概要</h3>
                <p>概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要</p>
                <h3>ゲスト：名前</h3>
                <p>ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明ゲストの説明</p>
            </div>
            <h2 className="report">思考レポート<p className="reportExplain">　タイトル：50字以下　本文：300字以上1000字以下</p></h2>
            <div className="commentArea">
                <input className="commentTitle" value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <textarea className="comment" value={comment} onChange={(e) => setComments(e.target.value)}></textarea>
                <div><span><p>{comment.length}文字</p>
                <button value="送信" disabled={comment.length<300 || comment.length>1000 || title.length===0 || title.length>50} onClick={()=> submit()}>送信</button></span></div>
            </div>
            <h2>レポート一覧<p className="reportExplain">　タイトルをクリックして内容を見ることができます</p></h2>
            <div className="otherComment">
                {reports.map((items,index) => (
                    <div key={"body"+index} className="reportsArea">
                    <h3 key={"title"+index} onClick={() => titleClicked(index)}>{items.title}</h3>
                    {look[index] && <><p key={"text"+index}>{items.body}</p>
                    {thought[index] && <h3>コメント</h3>}
                    {thought[index] && items.comment.map((item,index) => (<p className="reportComment" key={"comment"+index}>{item}</p>))}
                    {items.comment.length!==0 && <p onClick={() => commentClicked(index)} style={style}>{items.comment.length}件のコメントを見る</p>}
                    {inputComments[index] && <span><textarea value={newComment} onChange={(e) => setNewComment(e.target.value)}></textarea>
                    <button onClick={() => sendComment(index,items,newComment)} disabled={newComment.length===0}>送信</button></span>}
                    <p onClick={() => writeComment(index)} style={style}>コメントを書く</p>
                    </>
                    }
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MainContents;