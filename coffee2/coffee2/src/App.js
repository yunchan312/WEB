/*eslint-disable*/ 

import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './components/sidebar';
import 'semantic-ui-css/semantic.min.css';

function App() {
  let [text1, setText1] = useState(['First', 'Second', 'Third']);
  let [text2, setText2] = useState(['First', 'Second', 'Third']);

  return (
    <div className="App">

      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />

      <SideBar />

      <div className="top">
        <img src={logo} />
      </div>



      <div className="drops-container">
        <div className="drop1">
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Dropdown1
            </Dropdown.Toggle>
  
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">{text1[0]}</Dropdown.Item>
              <Dropdown.Item href="#/action-2">{text1[1]}</Dropdown.Item>
              <Dropdown.Item href="#/action-3">{text1[2]}</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
  
        <div className="drop2">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown2
              </Dropdown.Toggle>
    
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">{text2[0]}</Dropdown.Item>
                <Dropdown.Item href="#/action-2">{text2[1]}</Dropdown.Item>
                <Dropdown.Item href="#/action-3">{text2[2]}</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
        </div>
      </div><hr />



    </div>
  );
}

export default App;
