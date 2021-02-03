import React from 'react';
import NavBar from './components/navbar/NavBar';
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/pages/home/HomePage';
import Footer from './components/pages/footer/Footer';
// import Footer from './components/pages/footer/Footer';




function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact component={HomePage} />        
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
