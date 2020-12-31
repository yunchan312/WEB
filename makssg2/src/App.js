import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Dropdown1 from './components/dropdown1';
import Dropdown2 from './components/dropdown2';

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



      </Router>

    </>
  );
}

export default App;
