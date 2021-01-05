import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Dropdown1 from './components/dropdown1';
import Dropdown2 from './components/dropdown2';
import { SiFacebook } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import { AiFillTwitterCircle } from 'react-icons/ai';

function App() {
  return (
    <>
      <Router> 

        <Navbar />

        <Router>
          <Dropdown1 />
        </Router>
        <Router>
          <Dropdown2 />
          <hr/>
        </Router>

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/reports' component={Reports} />
          <Route path='/products' component={Products} />
        </Switch>

        <div className="footer">
            <div className="socials">
              <a href="https://www.facebook.com" style={{color: '#deb887'}} className="icons">
                <SiFacebook size={28}/>
              </a>
              <a href="https://www.instagram.com" style={{color: '#deb887'}} className="icons">
                <RiInstagramFill size={30}/>
              </a>
              <a href="https://www.twitter.com" style={{color: '#deb887'}} className="icons">
                <AiFillTwitterCircle size={30}/>
              </a>
            </div>

          <div className="footer-terms">
            홈페이지 이용약관 | 영상정보처리기기 운영방침 | 멤버스카드 이용약관 | 위치기반 서비스 이용약관
          </div>

          <div className="footer-info">
            판매자 정보s
          </div>
        </div>
      </Router>

    </>
  );
}

export default App;
