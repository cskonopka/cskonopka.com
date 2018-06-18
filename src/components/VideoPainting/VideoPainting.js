import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 
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
// import placeholder          from    '../src/img/csk-videocatalog2-500x280.jpg';
// import sq6 from '../src/src/img/csk-sq6_1.jpg';
// import mlsquelcher from '../src/src/img/csk-mlsquelcher_1.jpg';

export default class VideoPainting extends Component {
  render() {

    return (
      <div >
  
        <Grid stackable={true} columns={4}>


    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/238176676" 
        image={pranksters}
        header='The Keystone Harvest'
        meta='10282017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/238914000" 
        image={studio03}
        header='Studio550'
        meta='10212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/232266223" 
        image={knobcon}
        header='Knobcon'
        meta='09082017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/229931614" 
        image={mocapromo}
        header='MassMoCA - "The Sound of Dreaming"'
        meta='08192017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/229168014" 
        image={gulu01}
        header='Gulu Gulu Cafe'
        meta='08112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/220426373" 
        image={lode2}
        header='MOTHERLODE'
        meta='06122017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/220426373" 
        image={lode1}
        header='MOTHERLODE'
        meta='06112017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/218751121" 
        image={washst}
        header='Washington St Art Center'
        meta='05262017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214461443" 
        image={s550}
        header='Studio550'
        meta='04292017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214451065" 
        image={flux2}
        header='Flux Factory 02'
        meta='04252017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/214450953" 
        image={flux1}
        header='Flux Factory 01'
        meta='04252017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/213632540" 
        image={dreams}
        header='Dreamscape10'
        meta='04212017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/202824727" 
        image={bit}
        header='BitBar'
        meta='02242017'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/175148469" 
        image={pool5}
        header='Pool'
        meta='07192016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/172231863" 
        image={pool4}
        header='Pool'
        meta='07022016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/171333400" 
        image={pool3}
        header='Pool'
        meta='06292016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/170130877" 
        image={pool2}
        header='Pool'
        meta='06112016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/169713077" 
        image={pool1}
        header='Pool'
        meta='06082016'
        fluid={true}/>
    </Grid.Column>
    <Grid.Column>
        <Card 
        href="https://player.vimeo.com/video/146996680" 
        image={scanner}
        header='Pool'
        meta='11282015'
        fluid={true}/>
    </Grid.Column>
</Grid>
      </div>
    );
  }
}
