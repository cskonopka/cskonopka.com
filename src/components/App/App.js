import React, { Component } from 'react';

// import One from "./One"
import MainNav from  "../MainNav/MainNav"
// import Footer from  "../Footer/Footer"
// import SubMenu  from  "../SubMenu/SubMenu"
// import Home     from  "../Home/Home"
// import VideoBackground from "../VideoBackground/VideoBackground"
import CV     from  "../CV/CV"
import About     from  "../About/About"
import Contact     from  "../Contact/Contact"
import Home     from  "../Home/Home"
import Portfolio     from  "../Portfolio/Portfolio"
import Events     from  "../Events/Events"
import VideoPortfolio from "../VideoPortfolio/VideoPortfolio"
import TechPortfolio from "../TechPortfolio/TechPortfolio"
import SoundPortfolio from "../SoundPortfolio/SoundPortfolio"
import Press from "../Press/Press"


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import '../App/App.css';


class App extends Component {
        constructor(props) {
            super(props);
            this.state = { name: 0 };
        }



              state = { activeItem: 'bio' }


  handleItemClick = (e, { name }) => 
  this.setState({ activeItem: name })

  render() {
   // const { activeItem } = this.state


    return (
      <Router>
      <div className="App">

        <MainNav/>
          <Route path="/cv" component={CV}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/home" component={Portfolio}/>
          <Route path="/events" component={Events}/>
          <Route exact path="/" component={Portfolio}/>
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/video" component={VideoPortfolio} />
          <Route path="/tech" component={TechPortfolio} />
          <Route path="/sound" component={SoundPortfolio} />
          <Route path="/press" component={Press} />


      </div>

      </Router>
    );
  }
}

export default App;

 //  <MainMenu/>
 //      <br/>
 //      <SubMenu/>
 //      <br/>