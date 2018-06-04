import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 
// import pickasound           from '../../img/csk-pickasound-500x280.png';
// import react                from '../../img/csk-react-500x280.png'
// import lv426                from '../../img/csk-lv426-500x280.png'
import qubit                from '../../img/csk-qubit-500x280.png'
import muse                 from    '../../img/csk-muse-500x280.png';
import m4l                 from    '../../img/csk-m4l-500x280.png';
import blabs                 from    '../../img/csk-blabs-500x280.png';
import csound                 from    '../../img/csk-csound-500x280.png';
import arduivis                 from    '../../img/csk-arduivis-500x280.png';
import c74  from '../../img/csk-c74-500x280.png'
import golang                 from '../../img/csk-golang-500x280.png' 

export default class FrontEnd extends Component {
  render() {
    return (
      <div >
        <Grid stackable={true} columns={4}>
            <Grid.Column>
                <Card 
                image={golang} 
                fluid={true} 
                header='dataSonics' 
                meta='Go/Csound' 
                description='Data sonification projects for creating audio abstractions from data scraped from the internet using Go + Csound' />
            </Grid.Column>
    <Grid.Column>
        <Card
          image={arduivis}
          fluid={true}
          header='Arduivis'
          meta='Arduino/MaxMSP/Pure Data/Serial'
            description='Created a  bi-directional communication paradigm for programming languages & microcontrollers'

            extra={
                <div>
                    <a href='https://github.com/cskonopka/arduivis'>Github</a> — 
                    <a href='https://www.youtube.com/watch?v=LrZKLl2PnqM&list=PLGJVzjsDmY4YdJrNJBVhI4UVf5RXk94FF'> Videos </a>
                </div>
            }
        />
    </Grid.Column>

            <Grid.Column>
                <Card
                    image={muse}
                    fluid={true}
                    header='Muse'
                    meta='Pure Data/Csound/OpenFrameworks/OSC'
                    description='Project Manager/Software Architect/Integration Specialist'
                    extra={
                        <div>
                            <a href='http://vimeo.com/cskonopka'>Website</a> — 
                            <a href='https://www.youtube.com/watch?v=fTWn2vLTMIk'> Promo </a>
                        </div>
                    }
                />
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={blabs} 
                fluid={true} 
                header='csSpectral' 
                meta='iOS/Csound' 
                description='Developed instrument prototypes/Integration Specialist [Csound to Objective-C]' 
                extra={
                    <div>
                        <a href='http://boulangerlabs.com/product/csspectral/'>Website</a> — 
                        <a href='https://www.youtube.com/watch?v=ZVpItFW8qUw'>Demo</a> — 
                        <a href='https://www.youtube.com/watch?v=6P_PfcRTeH8'>Tutorial</a>
                    </div>
                }
                />
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={qubit} 
                fluid={true} 
                header='Nebulae Instruments' 
                meta='Csound/DSP' 
                description='Created software instruments using Csound for the QuBit Electronix module "Neubulae" ' 
                extra={
                     <div>
                        <a href='https://github.com/cskonopka/csoundNebulae'>Github</a> — 
                         <a href='https://www.youtube.com/watch?v=ZnE7loVhHG0'>Demo1</a> — 
                         <a href='https://www.youtube.com/watch?v=n-v9e-HH9lE'> Demo2 </a> — 
                         <a href='https://www.youtube.com/watch?v=BmCjPFPqkhs'> Demo3 </a> 
                     </div>
                }
                />
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={m4l} 
                fluid={true} 
                header='Generative Breakpoint Envelope' 
                meta='Max-For-Live' 
                description='Ableton plugin for creating generative parameter envelopes with precise control'
                extra={
                     <div>
                         <a href='https://github.com/cskonopka/generativeBreakpointEnvelope'>Github</a> — 
                         <a href='https://www.youtube.com/watch?v=7SjVqSB3FCI'> Demo1 </a> — 
                         <a href='https://www.youtube.com/watch?v=xzbmW9_wAkA'> Demo2 </a>
                     </div>
                } />

            </Grid.Column>

            <Grid.Column>
                <Card 
                image={m4l} 
                fluid={true} 
                header='KingdomKollage' 
                meta='MaxMSP' 
                description='4 channel audio sampler with algorithmic playback'
                extra={
                     <div>

                     </div>
                } />

            </Grid.Column>

            <Grid.Column>
                <Card 
                image={csound} 
                fluid={true} 
                header='csoundUtensils' 
                meta='Csound/Audio DSP' 
                href='https://github.com/cskonopka/csoundUtensils'
                description='A collection of Csound UDO templates for connecting to MaxMSP and Pure Data' />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={c74} 
                fluid={true} 
                header='maxmspjitter' 
                meta='Max/MSP/Jitter' 
                
                href='https://github.com/cskonopka/maxmspjitter'
                description='A collection of random Max/MSP/Jitter ideas' />
            </Grid.Column>


        </Grid>

      </div>
    );
  }
}


