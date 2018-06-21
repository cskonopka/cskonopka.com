import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card, Tab, Header }      from 'semantic-ui-react' 

import vice                 from '../../img/csk-vice-500x280.jpg';
import nts                  from '../../img/csk-nts-500x280.jpg';
import hf9                  from '../../img/csk-hasslefest9-500x280.png';
import moogfest                  from '../../img/csk-moogfest-500x280.jpg';
import massmoca                  from '../../img/csk-massmoca-500x280.jpg';
import liveeye                  from '../../img/csk-liveeye-500x280.png';
import hassle                  from '../../img/studio.jpg';
import vid1                  from '../../img/csk-vid1-500x280.png';
import vid2                  from '../../img/csk-vid2-500x280.png';
import vid3                  from '../../img/csk-vid3-500x280.png';
import vid4                  from '../../img/csk-vid4-500x280.png';
import vid5                  from '../../img/csk-vid5-500x280.png';
import vid6                  from '../../img/csk-vid6-500x280.png';
import vid7                  from '../../img/csk-vid7-500x280.png';
import vid8                  from '../../img/csk-vid8-500x280.png';
import vid9                  from '../../img/csk-vid9-500x280.png';
import vid10                  from '../../img/csk-vid10-500x280.png';
import vid11                  from '../../img/csk-vid11-500x280.png';
import vid12                  from '../../img/csk-vid12-500x280.png';

import vimeo                   from '../../img/csk-vimeo-500x280.png';
import FontAwesome from 'react-fontawesome'

export default class Studio extends Component {
  render() {
    return (

    <div>
        <Grid stackable={true}>
            <Grid.Column width={12}>
        <Header as='h3' textAlign="left" block="true"  >Christopher Konopka specializes in generating one-of-a-kind
visual textures with raw video signals. Using an analog video
synthesizer, video signals can be layered, keyed and fed back
into themselves as a way to paint with a television in real-
time. Evolving organically, each design is an encapsulated
moment of experience which is used to terraform new planes of
understanding. Humans store the experience of time in their own unique format
by generating a memory and compiling all of the internal and
external senses. During the archival process of creating new
memories, there is a significant amount of nuance that is
discarded. These free-floating threads of minutia hold the
potential choice of mindfully engaging unaltered emotional
abstractions through creating personal coincidental
attachment.
        </Header>  

    </Grid.Column>
    <Grid.Column width={4}>
                <Card 
                image={vimeo} 
                fluid={true} 
                header='Portfolio' 
                href="https://vimeo.com/cskonopka"
                />




    </Grid.Column>

      </Grid>

      <Grid verticalAlign="middle">

            <Grid.Column width={4}>
                            <a href="https://www.vimeo.com/cskonopka">
                                <FontAwesome size="2x" name='vimeo' />
                            </a>
                            </Grid.Column>

            <Grid.Column width={4}>
                            <a href="https://www.instagram.com/cskonopka">
                                <FontAwesome size="2x" name='instagram' />
                            </a>
                            </Grid.Column>

            <Grid.Column width={4}>
                            <a href="https://www.youtube.com/watch?v=WngGZz6f5o4&list=PLGJVzjsDmY4bO8W9SZSKwks2YpTOwpanr">
                                <FontAwesome size="2x" name='youtube' />
                            </a>
                            </Grid.Column>
            <Grid.Column width={4}>
                            <a href="https://www.ello.co/cskonopka">
                                <FontAwesome size="2x" name='smile-o' />
                            </a>
                            </Grid.Column>


      </Grid>
      <br/>
    <Card.Group itemsPerRow={4}>
    <Card raised image={vid1} href='https://vimeo.com/268922766'/>
    <Card raised image={vid2} href='https://vimeo.com/267369183'/>
    <Card raised image={vid3} href='https://vimeo.com/275938612'/>
    <Card raised image={vid5} href='https://vimeo.com/271586709'/>
    <Card raised image={vid4} href='https://vimeo.com/269407126'/>
    <Card raised image={vid6} href='https://vimeo.com/264368982'/>
    <Card raised image={vid7} href='https://vimeo.com/255232135'/>
    <Card raised image={vid8} href='https://vimeo.com/248949799'/>
    <Card raised image={vid9} href='https://vimeo.com/247767177'/>
    <Card raised image={vid10} href='https://vimeo.com/244894356'/>
    <Card raised image={vid11} href='https://vimeo.com/244123064'/>
    <Card raised image={vid12} href='https://vimeo.com/235302447'/>
  </Card.Group>


      </div>
    );
  }
}

