import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MainPageComponent from './Components/MainPageComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import AddComponent from './Components/AddComponent';

import ShowmoreComponent from './Components/ShowmoreComponent';



function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
          <div className = "container">
            <Switch>
              <Route path = "/" exact component = {MainPageComponent}/>
              <Route path = "/brands" component = {MainPageComponent}/>
              <Route path = "/add-brand/:id" component = {AddComponent}/>
             {/* <Route path = "/update-brand/:id" component = {UpdateComponent}/> */}
              <Route path = "/showmoreinfo-brand/:id" component = {ShowmoreComponent}/>
            </Switch>
          </div>
          <FooterComponent></FooterComponent>
          
      </Router>
     
    </div>
  );
}

export default App;
