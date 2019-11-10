import React, { Component } from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Profile from './components/Profile'; 
import Footer from './components/Footer';
import Blog from './components/Blog.js';
import {BrowserRouter as Router} from 'react-router-dom';
class App2 extends Component { 
  render() {
	<Router>
      <div>
        <Route path="/profile" component={Profile} />
      </div>
    </Router>

    return ( 
	
      <div className="App">
        <TopBar />
		<Blog />
        <Footer />
      </div> 
    );
  }  
}

export default App2; 
 