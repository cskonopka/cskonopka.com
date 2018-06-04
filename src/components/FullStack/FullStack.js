import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Image, Card, Icon }      from 'semantic-ui-react' 
import periscope            from '../../img/csk-periscope-500x280.png';
import stenos01             from '../../img/csk-stenos01-500x280.png';
import pickasound             from '../../img/csk-pickasound-500x280.png';
import yack                 from '../../img/csk-yack.jpg' 
import react                 from '../../img/csk-react-500x280.png'
import lv426                 from '../../img/csk-lv426-500x280.png' 
import p5js                 from '../../img/csk-p5js-500x280.png' 
import golang                 from '../../img/csk-golang-500x280.png' 
import website                 from '../../img/csk-website-500x280.png' 




const extra = (
  <a>
    <Icon name='user' />
    16 Friends
  </a>
)

export default class FullStack extends Component {
  render() {
    return (
    <div>
        <Grid stackable={true} columns={4}>
            <Grid.Column>
                <Card 
                image={react} 
                fluid={true} 
                header='randomvideobutton' 
                meta='React.js/gh-pages' 
                description='Randomly find videos within my video collection' 
                extra={
                    <div>
                        <a href='https://cskonopka.github.io/randomvideobutton/'>Website</a> — 
                        <a href='https://github.com/cskonopka/randomvideobutton'> Github</a> 
                    </div>
                }
                />
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={react} 
                fluid={true} 
                header='videotitlesearch' 
                meta='React.js/Autosuggest.js/gh-pages' 
                description='Autosuggesting titles from my analog video synthesis catalog in React'
                extra={
                    <div>
                        <a href='https://cskonopka.github.io/videotitlesearch/'>Website</a> — 
                        <a href='https://github.com/cskonopka/videotitlesearch'> Github</a> 
                    </div>
                }/>
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={golang} 
                fluid={true} 
                header='scopingVoices [v3]' 
                meta='Go' 
                description='Concurrent extraction application for artistic purposes' />
            </Grid.Column>

            <Grid.Column>

                <Card 
                image={golang} 
                fluid={true} 
                header='ytdlGoX' 
                meta='Go/youtube-dl' 
                description='Go examples of using ytdl & go-sh'
                extra={
                    <div>
                        <a href='https://github.com/cskonopka/ytdlGoX'>Github</a>
                    </div>
                }/>
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={yack} 
                fluid={true} 
                header='Yakcom.com' 
                meta='MERN Stack/AWS/Twilio' 
                description='Web application for streamlining emergency communication between responders and callers' />
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={stenos01} 
                fluid={true} 
                header='Stenos' 
                meta='Node.js/Javascript/Express.js/AWS/IBM' 
                description='Web application that allows a user to transcribe audio/video sources and automatically create new pages with a searchable transcription interface.' 
                extra={
                    <div>
                        <a href='https://www.youtube.com/watch?v=4g4WIx-XFes'>Demo 1</a> — 
                        <a href='https://www.youtube.com/watch?v=EQibR7PeXIc'> Demo 2</a> — 
                        <a href='https://www.youtube.com/watch?v=LQiBSZEN7Rw'> Demo 3</a> — 
                        <a href='https://www.youtube.com/watch?v=1o9s9Iw7HtQ'> Demo 4</a>
                    </div>
                }
                />


            </Grid.Column>
            <Grid.Column>
                <Card 
                image={website} 
                fluid={true} 
                header='cskonopka.com' 
                meta='React/Node.js/AWS' 
                description='Created this website from scratch!' />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={periscope} 
                fluid={true} 
                header='scopingVoices [v2]' 
                meta='Javascript/React' 
                description='Application for finding Periscope streams and exporting their audio/video content for artistic purposes.' />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={pickasound} 
                fluid={true} 
                header='React + Web Audio' 
                meta='Javascript/React/WebAudio/DSP' 
                description='FM synthesis example using React + Web Audio' 
                extra={
                    <div>
                        <a href='https://web.archive.org/web/20161006072731/http://pickasound.co/'>Website</a> —  
                        <a href='https://venturefizz.com/blog/blend-your-beats-remixing-platform-pickasound'> Press</a>
                    </div>
                }
                />
            </Grid.Column>


            <Grid.Column>
                <Card 
                image={lv426} 
                fluid={true} 
                header='LV-426' 
                meta='Javascript/React/WebAudio/DSP' 
                description='Web-based sonification experiment'
                extra={
                    <div>
                        <a href='https://github.com/cskonopka/LV-426'>Github</a> —  
                        <a href='https://www.youtube.com/watch?v=fwKRmUBYugA'> Demo</a>
                    </div>
                }
                 />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={react} 
                fluid={true} 
                header='Video Instruments' 
                meta='Javascript/React' 
                description='Webpage about video instruments' 
                extra={
                    <div>
                        <a href='https://github.com/cskonopka/react-videoinstruments'>Github</a>
                    </div>
                }
                />
            </Grid.Column>


            <Grid.Column>
                <Card 
                image={p5js} 
                fluid={true} 
                header='p5js projects' 
                meta='Javascript/p5js' 
                textAlign='left'
                href='https://github.com/cskonopka/p5js'
                description='Basic audio/visual projects using the p5js library' />
            </Grid.Column>


        </Grid>
    </div>
    );
  }
}
