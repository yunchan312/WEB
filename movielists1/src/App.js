/*eslint-disable*/

import './App.css';
import React, {useState} from 'react';
import {Link} from 'react-router-dom';



function App() {
  let [글제목,글제목변경] =  useState(['남자코트 추천', '강남 우동맛집', '파이썬']);
  let [text, changeText] = useState('');
  let [content, contentChange] = useState([]);
  let [따봉, 따봉변경] = useState(0);
  var today = new Date();

  function handleOnKeyPress(e){
    if(e.key === 'Enter'){
      handleOnSubmit();
    }
  }

  function handleOnSubmit(){
    contentChange([text, ...content]);
    changeText('');
  }

  function handleOnChange(e){
    changeText(e.target.value);
  }

  function handleRemove(idx){
    contentChange(
      [...content.slice(0,idx),...content.slice(idx+1)]
    );
  }

  function appendContent(e){
    <div className="list">
        <h3> {e} <span onClick={()=>{ 따봉변경( 따봉 + 1)}}>👍</span> {따봉} </h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div style={{ fontSize : '20px' }}>개발 Blog</div>
      </div>
      
      <input className="texting"
        value={text}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress} />
        <button className="submittings" type='submit' onClick={handleOnSubmit}>
          등록
        </button>
        {content.map((e, idx) => (
          <div key={idx} className="inputContent">
            <h3 className="list">{e}
            <button className="remove" onClick={() => handleRemove(idx)}>제거</button></h3>
            <div className="date">{today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일 발행</div>
            <hr/>
          </div>
        ))}

              <div className="list">
                <h3> {글제목[0]} <span onClick={()=>{ 따봉변경( 따봉 + 1)}}>👍</span> {따봉} </h3>
                <p>2월 17일 발행</p>
                <hr/>
              </div>
            <div className="list">
              <h3> {글제목[1]} </h3>
              <p>2월 18일 발행</p>
              <hr/>
            </div>
            <div className="list">
              <h3> {글제목[2]} </h3>
              <p>2월 19일 발행</p>
              <hr/>
            </div>
    </div>
  );
}


export default App;
