import React, { Component } from 'react';
import '../App/App.css';
import { Grid, List, Container } from 'semantic-ui-react'

export default class PublicationList extends Component {

  render() {
    return (
<div>
    <Grid>
        <Container textAlign='center'>
            <br/>
            <List relaxed size={ 'large'}>
    <List.Item href="https://creators.vice.com/en_us/article/nzgavb/premiere-safetalk-raw-analog-signals-music-video"><h4>April 7, 2017: Vice Creators - [Premiere] Zone Out to Raw Analog Signals in this Glitchy Music Video </h4></List.Item>
    <List.Item ><h4>February 22 - 28, 2017: Featured Artist of the Week - NTS Radio Instagram Stories</h4></List.Item>
    <List.Item href="https://bostonhassle.com/went-there-charles-allin-jeremyharris-live-at-moon-villain/" ><h4>January 20, 2017: Went There - Charles Allin (Jeremy Harris) Live @ Moon Villain </h4></List.Item>
    <List.Item ><h4>November 17, 2016: Property Materials - Property Zine [Winter 2016 | Vol. 1, Nbr. 2]</h4></List.Item>
    <List.Item href="http://cdm.link/2015/02/add-physical-knob-max-patch-arduino-video-tutorials/"><h4>February 23, 2015: Create Digital Music - Arduivis is a new way to get your Arduino talking to Max. [cycling74 Facebook]</h4></List.Item>
    <List.Item href="https://www.facebook.com/cycling74/posts/10155185120755398"><h4>February 18, 2015: cycling74 Facebook - Arduivis is a new way to get your Arduino talking to Max</h4></List.Item>
    <List.Item href="https://cycling74.com/projects/_-wiiairdrum-_" ><h4>November 13, 2012: cycling74 Featured Project - wiiAirDrum</h4></List.Item>
        <br/>
            </List>
        </Container>
    </Grid>
</div>
    );
  }
}
