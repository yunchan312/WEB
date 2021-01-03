/*eslint-disable*/

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


function App() {
  let [글제목,글제목변경] =  useState(['남자코트 추천', '강남 우동맛집', '파이썬씨발']);
  let [text, changeText] = useState('');
  let [content, contentChange] = useState([]);
  let [따봉, 따봉변경] = useState(0);

  /*function 남여변환(){
    var newArray = [...글제목];
    newArray[0] = '여자코트 추천';
    글제목변경( newArray );
  }*/
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
        <button type='submit' onClick={handleOnSubmit}>
          등록
        </button>
        {content.map((e, idx) => (
          <div key={idx}>
          <span>{e}</span>
          &nbsp;
          <button onClick={() => handleRemove(idx)}>제거</button> 
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
      
      <Modal />

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
