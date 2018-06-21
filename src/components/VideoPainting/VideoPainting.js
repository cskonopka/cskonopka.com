import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card, Image, Header }      from 'semantic-ui-react' 
import studio03             from    '../../img/csk-studio03-500x280.jpg';
import knobcon              from    '../../img/csk-knobcon-500x280.jpg';
import mocapromo            from    '../../img/csk-mocapromo-500x280.jpg';
import gulu01               from    '../../img/csk-gulu01-500x280.jpg';
import lode2                from    '../../img/csk-ml2_1.jpg';
import lode1                from    '../../img/csk-ml1_1.jpg';
import washst               from    '../../img/csk-washst_1.jpg';
import s550                 from    '../../img/csk-s550_1.jpg';
import flux2                from    '../../img/csk-flux2_1.jpg';
import flux1                from    '../../img/csk-flux1_1.jpg';
import dreams               from    '../../img/csk-dreams_1.jpg';
import bit                  from    '../../img/csk-bit_1.jpg';
import pool5                from    '../../img/csk-pool5_1.jpg';
import pool4                from    '../../img/csk-pool4_1.jpg';
import pool3                from    '../../img/csk-pool3_1.jpg';
import pool2                from    '../../img/csk-pool2_1.jpg';
import pool1                from    '../../img/csk-pool1_1.jpg';
import scanner              from    '../../img/csk-scanner_1.jpg';
import pranksters           from    '../../img/csk-pranksters-500x280.jpg';
import vid1           from    '../../img/csk-videopainting-500x280.png';
// import placeholder          from    '../src/img/csk-videocatalog2-500x280.jpg';
// import sq6 from '../src/src/img/csk-sq6_1.jpg';
// import mlsquelcher from '../src/src/img/csk-mlsquelcher_1.jpg';

export default class VideoPainting extends Component {
  render() {

    return (
      <div >
    <Grid>
    <Grid.Column width={6}>
                <Card 
                image={vid1} 
                fluid={true} 
                href="https://www.youtube.com/watch?v=WngGZz6f5o4&list=PLGJVzjsDmY4bO8W9SZSKwks2YpTOwpanr"
                />
    </Grid.Column>
    <Grid.Column width={10}>
        <Header as='h3' textAlign="left" block="true" >"videoPainting" is a series exploring the patching possibilities
        of a modular analog video synthesizer system. Each video explores a
        technique I create on the fly to better understand the fluidity of
        such a system and build compositional chops for studio and performance
        situations. Dually, this provides insight about my own creative
        process by loosely providing a commentary during the walkthrough.
        </Header>   
        <Header as='h3'>
            <a href="https://www.youtube.com/watch?v=WngGZz6f5o4&list=PLGJVzjsDmY4bO8W9SZSKwks2YpTOwpanr">videoPainting</a>
        </Header> 
    </Grid.Column>
  </Grid>
      </div>
    );
  }
}
