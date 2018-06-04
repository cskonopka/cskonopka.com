import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Image }      from 'semantic-ui-react' 
import euglossine           from '../src/img/csk-euglossine_1.jpg';
import pickasound           from '../src/img/csk-pickasound-500x280.png';
import periscope            from '../src/img/csk-periscope-500x280.png';
import react                from '../src/img/csk-react-500x280.png'
import lv426                from '../src/img/csk-lv426-500x280.png'
import stenos01             from '../src/img/csk-stenos01-500x280.png';

export default class WebDev extends Component {
  render() {

    return (
      <div >
  

    
<Grid doubling columns={4}>
    <Grid.Column>
        <Image src={stenos01} href="/stenos"/>
            <h5>Stenos</h5>
    </Grid.Column>
    <Grid.Column>
        <Image src={periscope} href="/scoping"/>
            <h5>scopingVoices</h5>
    </Grid.Column>
</Grid>
      </div>
    );
  }
}

