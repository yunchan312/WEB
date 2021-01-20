/*eslint-disable*/ 

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import menuBar from './hoc/menu/menuBar';


function App() {
  let [text, changeText] = useState('');
  let [content, contentChange] = useState([]);
  let [따봉, 따봉변경] = useState(0);
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

  function ddabong(){
    return 따봉변경(따봉 + 1);
  }

  return (
    <div className="App">

      
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <div className="top">
        <menuBar />
        Amazing Something
      </div>
      <div className="dropdown">
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <p><Dropdown.Item href="#/action-1">Action</Dropdown.Item></p>
          <p><Dropdown.Item href="#/action-2">Another action</Dropdown.Item></p>
          <p><Dropdown.Item href="#/action-3">Something else</Dropdown.Item></p>
        </DropdownButton>
      </div>
      <div className="img">
        <p><img src={logo} /></p>
        Let Me Study REACT!!
      </div>

      <input className="texting"
        value={text}
        onChange={handleOnChange}
        onKeyPress={handleOnKeyPress} />
        <button type='submit' onClick={handleOnSubmit}>
          등록
        </button>
        <hr/>
        {content.map((e, idx) => (
          <div key={idx}>
          <span className="title">{e}</span>
          <span onClick={()=>{ ddabong() }}>👍</span> {따봉}
          &nbsp;
          <button onClick={() => handleRemove(idx)}>제거</button><hr/>
        </div>
        ))}

      

    </div>
  );
}

export default App;
