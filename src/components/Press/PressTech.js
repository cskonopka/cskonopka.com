import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 
// import liveeye                  from '../../img/csk-liveeye-500x280.png;
import muse                  from '../../img/csk-muse-500x280.png';

import c74  from '../../img/csk-c74-500x280.png'
import cdm  from '../../img/csk-cdm-500x280.png'



export default class PressTech extends Component {
  render() {
    return (
      <div >  
        <Grid stackable={true} columns={4}>

            <br/>

<Grid.Column>
    <Card 
    image={cdm} 
    header='create digital music'
    meta='Add a Physical Knob to Your Max Patch with Arduino: Video Tutorials'
    href='http://cdm.link/2015/02/add-physical-knob-max-patch-arduino-video-tutorials/'
    fluid={true}
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={c74} 
    header='c74 Featured Project'
    meta='MindDraw'
    href='https://cycling74.com/projects/minddraw'
    fluid={true}
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={muse} 
    header='Leap Motion'
    meta='Fingerpainting Soundscapes: Muse for Leap Motion and the Berklee Symphony Orchestra'
    href='http://blog.leapmotion.com/fingerpainting-soundscapes-muse-leap-motion-berklee-symphony-orchestra/'
    fluid={true}
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={c74} 
    header='c74 Featured Project'
    meta='wiiAirDrum'
    href='https://cycling74.com/projects/_-wiiairdrum-_'
    fluid={true}
    />
</Grid.Column>

        </Grid>
      </div>
    );
  }
}

