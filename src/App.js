import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
        <div>
          <Router>
            <NavBar/>
             <Routes>
              <Route path="/" element={<News key="general" pageSize={5} category={'general'}/>} />
              <Route path="/business" element={<News key="business" pageSize={5} category={'business'}/>} />
              <Route path="/sports" element={<News key="sports" pageSize={5} category={'sports'}/>} />
              <Route path="/science" element={<News key="science" pageSize={5} category={'science'}/>} />
              <Route path="/health" element={<News key="health" pageSize={5} category={'health'}/>} />
              <Route path="/technology" element={<News key="technology" pageSize={5} category={'technology'}/>} />
              <Route path="/general" element={<News key="general" pageSize={5} category={'general'}/>} />
              <Route path="/entertainment" element={<News key="entertainment" pageSize={5} category={'entertainment'}/>} />
             </Routes>
          </Router>
        </div>
    )
  }
}
