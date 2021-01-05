/*아랫줄 dropdown*/ 
import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './dropdownDN.css';

function Dropdown2() {
    return (
        <div className="dropdown-container">
            <div className="drop1">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown1
              </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            
            <div className="drop2">
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown2
              </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}

export default Dropdown2