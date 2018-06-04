import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 
import PressMenu from '../Press/PressMenu'
import LogoTop        from  '../LogoTop/LogoTop'


export default class Press extends Component {
  render() {
    return (
      <div >  
      <LogoTop/>
        <PressMenu />
        
      </div>
    );
  }
}

