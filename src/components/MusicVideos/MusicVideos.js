import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 
import smallcolin           from '../../img/csk-smallcolin_1.jpg';
import svz                  from '../../img/csk-svz_1.jpg';
import loon                 from '../../img/csk-loon_1.jpg';
import frum                 from '../../img/csk-frum_1.jpg';
import eleni                from '../../img/csk-eleni_1.jpg';
import astro                from '../../img/csk-astro_1.jpg';
import zipper               from '../../img/csk-zipper_1.jpg';
import sleepership          from '../../img/csk-sleepership_1.jpg';
import proud                from '../../img/csk-proud_1.jpg';
import gy                   from '../../img/csk-gy_1.jpg';
import sk                   from '../../img/csk-sk_1.jpg';
import disco                from '../../img/csk-disco_1.jpg';
import zg1                  from '../../img/csk-zg1-500x280.jpg';
import zg2                  from '../../img/csk-zg2-500x280.jpg';
import zg3                  from '../../img/csk-zg3-500x280.jpg';
import zg4                  from '../../img/csk-zg4-500x280.jpg';
import zg5                  from '../../img/csk-zg5-500x280.jpg';
import zg6                  from '../../img/csk-zg6-500x280.jpg';
import s1                   from '../../img/csk-s1-500x280.jpg';
import s2                   from '../../img/csk-s2-500x280.jpg';
import s3                   from '../../img/csk-s3-500x280.jpg';
import s4                   from '../../img/csk-s4-500x280.jpg';
import s5                   from '../../img/csk-s5-500x280.jpg';
import s6                   from '../../img/csk-s6-500x280.jpg';
import s7                   from '../../img/csk-s7-500x280.jpg';
import s8                   from '../../img/csk-s8-500x280.jpg';
import s9                   from '../../img/csk-s9-500x280.jpg';
import goto80               from '../../img/csk-goto80-500x280.jpg';
import acp                  from '../../img/csk-acp-500x280.jpg';
import gardenlevel          from '../../img/csk-gardenlevel-500x280.jpg';
import safetalk             from '../../img/csk-safetalk-500x280.jpg';
import junebloom            from '../../img/csk-junebloom-500x280.png';
import enter                from '../../img/csk-enter-500x280.png';

// import sq6 from '../src/src/img/csk-sq6_1.jpg';
// import mlsquelcher from '../src/src/img/csk-mlsquelcher_1.jpg';

export default class MusicVideos extends Component {
  render() {

    return (
<div>
    <Grid stackable={true} columns={4}>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/250197920" image={enter} header='Substrates' meta='Enter' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/247943177" image={junebloom} header='June Bloom' meta='Cave Dweller' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/239573980" image={gardenlevel} header='Bastian Void' meta='Garden Level' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/239550605" image={goto80} header='Goto80' meta='Stocko' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/239559938" image={acp} header='A Campbell Payne' meta='Americans' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/229163377" image={smallcolin} header='Small Colin' meta='The Pumper' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/221969945" image={svz} header='Squelcher' meta='Vertical Zoo' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://www.youtube.com/watch?v=udB51Q9VLy4" image={safetalk} header='Safetalk' meta='Universal' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/215715080" image={loon} header='Loonball' meta='El Sid' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://www.youtube.com/embed/1WuZAHo8cxI" image={frum} header='John Frum' meta='Memory Palace' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/207899904" image={eleni} header='Eleni Arapoglou' meta='Μια Εικόνα (An Image)' fluid={true}/> /
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/203213427" image={astro} header='cskonopka' meta='thinkingaboutstrandedastronauts' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/202853421" image={zipper} header='Oldowan Vibrations' meta='Zippers Under Zippers' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/200297514" image={sleepership} header='Sleepership' meta='s2ep1' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/167779895" image={proud} header='Proud Father' meta='Jikan dake no itami de' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/171492101" image={gy} header='Gyrowyre' meta='Thneyres' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/161212323" image={sk} header='Radio Skotvoid' meta='Skweeeky Wheel' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/142019766" image={disco} header='Disco Nihilist' meta='Melancholy' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/179240769" image={zg1} header='zubra/guraffe' meta='earscontinuetolistenAsWaterFillsYouUp' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/177952872" image={zg2} header='zubra/guraffe' meta='(were' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/177963341" image={zg3} header='zubra/guraffe' meta='_this' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/177970944" image={zg4} header='zubra/guraffe' meta='the' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/179240772" image={zg5} header='zubra/guraffe' meta='glass' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/179240771" image={zg6} header='zubra/guraffe' meta='submerged' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/157260880" image={s1} header='geegbbeeb' meta='bone$and¢hlorine' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/157256311" image={s2} header='geegbbeeb' meta='buildingCommunications' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/157878470" image={s3} header='geegbbeeb' meta='samDoe' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/157998439" image={s4} header='cskonopka' meta='westpeabodySpeedway' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/165728514" image={s5} header='geegbbeeb' meta='weylandCowboy' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/167048782" image={s6} header='geegbbeeb' meta='hatchingSpaceAnxiety' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/167044030" image={s7} header='zubra/guraffe' meta='drawingfreqsSummonTheDemon' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/167046781" image={s8} header='zubra/guraffe' meta='blindlyVoidJumping' fluid={true}/>
        </Grid.Column>
        <Grid.Column>
            <Card href="https://player.vimeo.com/video/177843310" image={s9} header='zubra/guraffe' meta='theGem' fluid={true}/>
        </Grid.Column>
    </Grid>
</div>
    );
  }
}

