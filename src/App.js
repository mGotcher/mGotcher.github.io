import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile'; 
import Footer from './components/Footer';
import Blog from './components/Blog.js';
import Education from './components/Education.js';

import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
class App extends Component { 
  render() {
	
      

    return ( 
	<Router>

      <div className="App">
        <TopBar />
		<Route exact path="/" component={Profile} />
        <Route path="/blog" component={Blog} />

        <Footer />
      </div> 
	  </Router>
    );
	
  }  
}

export default App; 
 