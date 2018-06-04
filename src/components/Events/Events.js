import React, { Component } from 'react';
import '../App/App.css';
import EventMenu        from  '../EventMenu/EventMenu'
import LogoTop        from  '../LogoTop/LogoTop'
import { Grid, Image, Header }      from 'semantic-ui-react' 
import logo from '../../img/csk-logo-transparent.png'

export default class Events extends Component {

  render() {
    return (
      <div>
      	<LogoTop/>
        <EventMenu/>
      </div>
    );
  }
}
