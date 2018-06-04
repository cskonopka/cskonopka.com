import React, { Component } from 'react';
import { Grid, Image, Card }      from 'semantic-ui-react' 
import logo from '../../img/csk-logo-transparent.png'
import '../App/App.css';
import vice                 from '../../img/csk-vice-500x280.jpg';
import nts                  from '../../img/csk-nts-500x280.jpg';
import hf9                  from '../../img/csk-hasslefest9-500x280.png';
import moogfest             from '../../img/csk-moogfest-500x280.jpg';
import massmoca             from '../../img/csk-massmoca-500x280.jpg';
// import liveeye              from '../../img/csk-liveeye-500x280.png';
import hassle               from '../../img/csk-hassle-500x280.png';
import pem                  from '../../img/csk-pem-500x280.png';
import pomona               from '../../img/csk-pomona-500x280.png';
import nationalsawdust      from '../../img/csk-nationalsawdust-500x280.jpg';
import longhouse            from '../../img/csk-longhouse-500x280.jpg';
import brown            	from '../../img/csk-brown-500x280.png';
import nasa            		from '../../img/csk-nasa-500x280.png';
import berklee            	from '../../img/csk-berklee-500x280.png';
import umass				from '../../img/csk-umass-500x280.png';
import fluxfactory			from '../../img/csk-fluxfactory-500x280.png';
import industrylab			from '../../img/csk-industrylab-500x280.png';
import sprinklerfactory		from '../../img/csk-sprinklerfactory-500x280.png';
import moonvillain			from '../../img/csk-moonvillain-500x280.png';
import targ					from '../../img/csk-targ-500x280.png';
import studio550			from '../../img/csk-studio550-500x280.png';
import derose				from '../../img/csk-derose-500x280.png';
import signalculture		from '../../img/csk-signalculture-500x280.png';
import whitewallstudio		from '../../img/csk-whitewallstudio-500x280.png';
import motherlode			from '../../img/csk-motherlode-500x280.png';
import solstudio			from '../../img/csk-solstudio-500x280.png';
import lilypad				from '../../img/csk-lilypad-500x280.png';
import deepthoughts			from '../../img/csk-deepthoughts-500x280.png';
import oftb					from '../../img/csk-oftb-500x280.png';
// import obriens				from '../../img/csk-obriens-500x280.png';
import knobcon				from '../../img/csk-knobcon-500x280.jpg';


import FontAwesome from 'react-fontawesome'

export default class AboutVideo extends Component {

  render() {
    return (
<div>
    <br/>
    <Grid stackable={true} columns={3} width={1} fluid='true'>
        <Grid.Column textAlign={ 'center'}>
            <Image src={logo} />
        </Grid.Column>
        <Grid.Column textAlign={ 'left'}>
            <h4><u>Bio</u></h4>
            <h5>
                A graduate of Berklee College of Music and NASA contractor, Christopher Konopka specializes in generating one-of-a-kind visual textures with raw video signals. Using an analog video synthesizer, video signals can be layered, keyed and fed back into themselves as a way to paint with a television in real-time. Evolving organically, each design is an encapsulated moment of experience which is used to terraform new planes of understanding. His video work has been featured on Vice and NTS as well as at venues such as Massachusetts Museum of Contemporary Art (North Adams, MA), Moogfest 2017 (Durham, NC), The White Wall Studio (Montreal, QC), LongHouse Reserve (East Hampton, NY), National Sawdust (Brooklyn, NY), Harlem Stage (NYC), DeRose Gallery Tribeca (NYC) and Trumbullplex (Detroit, MI).
            </h5>
        </Grid.Column>
        <Grid.Column textAlign={ 'left'}>
            <h4><u>Artist Statement</u></h4>
            <h5>
                Humans store the experience of time in their own unique format by generating a memory and compiling all of the internal and external senses. During the archival process of creating new memories, there is a significant amount of nuance that is discarded. These free-floating threads of minutia hold the potential choice of mindfully engaging unaltered emotional abstractions through creating personal coincidental attachment.
            </h5>
            <h4>cskonopka@schwwaaa.net</h4>
            <Grid columns={6}>
                <Grid.Column textAlign={ 'center'}>
                    <a href="mailto:cskonopka@schwwaaa.net">
                        <FontAwesome name='envelope' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.vimeo.com/cskonopka">
                        <FontAwesome name='vimeo' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.instagram.com/cskonopka">
                        <FontAwesome name='instagram' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://schwwaaa.bandcamp.com/">
                        <FontAwesome name='bandcamp' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.linkedin.com/in/christopherkonopka">
                        <FontAwesome name='linkedin' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.facebook.com/in/cskonopka">
                        <FontAwesome name='facebook' />
                    </a>
                </Grid.Column>
            </Grid>
        </Grid.Column>
    </Grid>

      <Grid stackable={true} doubling columns={6}>
        <Grid.Column>
            <Card image={nasa} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={vice} fluid={true} href='https://creators.vice.com/en_us/article/nzgavb/premiere-safetalk-raw-analog-signals-music-video' />
        </Grid.Column>
        <Grid.Column>
            <Card image={massmoca} fluid={true} href='http://massmoca.org/event/nona-hendryx-nick-cave/' />
        </Grid.Column>
        <Grid.Column>
            <Card image={pem} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={moogfest} fluid={true} href='https://vimeo.com/236838560' />
        </Grid.Column>
        <Grid.Column>
            <Card image={knobcon} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={nts} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={fluxfactory} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={nationalsawdust} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={longhouse} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={derose} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={solstudio} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={berklee} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={brown} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={pomona} fluid={true} href='https://www.pomona.edu/planetarium/shows' />
        </Grid.Column>
        <Grid.Column>
            <Card image={umass} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={hf9} fluid={true} href='https://vimeo.com/album/4860217' />
        </Grid.Column>
        <Grid.Column>
            <Card image={hassle} fluid={true} href='https://bostonhassle.com/went-there-charles-allin-jeremyharris-live-at-moon-villain/' />
        </Grid.Column>
        <Grid.Column>
            <Card image={industrylab} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={sprinklerfactory} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={studio550} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={moonvillain} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={targ} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={whitewallstudio} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={motherlode} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={solstudio} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={lilypad} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={deepthoughts} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={oftb} fluid={true} />
        </Grid.Column>
        <Grid.Column>
            <Card image={signalculture} fluid={true} />
        </Grid.Column>
    </Grid>
</div>
    );
  }
}




 //  <Grid.Column width={12}>
 //  	A graduate of Berklee College of Music and NASA contractor, Christopher Konopka develops and researches bleeding edge paradigms as a way to bridge the gap between humans and the consistently evolving technological environment. His creative work has been shown internationally at venues such as The Sydney Museum (Sydney, Australia), The White Wall Studio (Montreal, QC), Massachusetts Museum of Contemporary Art (North Adams, MA), Trumbullplex (Detroit, MI), LongHouse Reserve (East Hampton, NY), National Sawdust (Brooklyn, NY), Harlem Stage (NYC), DeRose Gallery Tribeca (NYC).

 //  </Grid.Column>
