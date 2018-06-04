import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Image, Card, Icon, Feed }      from    'semantic-ui-react' 
import arduivis             from    '../../img/csk-arduivis-500x280.png';
import oream                from    '../../img/csk-oream-500x280.png';
import nasa                 from    '../../img/csk-nasa-500x280.png';
import minddraw             from    '../../img/csk-minddraw-500x280.png';
import ib                   from    '../../img/csk-imaginingblue-500x280.png';
import muse                 from    '../../img/csk-muse-500x280.png';
import wii                  from    '../../img/csk-wiiairdrum-500x280.png';
import eurobrain            from    '../../img/csk-eurobrain-500x280.png';
import ave5                 from    '../../img/csk-ave01-500x280.png';
import stria                from    '../../img/csk-stria-500x280.png';
import nonamit              from    '../../img/csk-nonamit-500x280.png';
import os                   from    '../../img/csk-opticalsonance-500x280.png';
import c74                  from    '../../img/csk-c74-500x280.png'
import berklee              from    '../../img/csk-berklee-500x280.png'
import firstnight           from    '../../img/csk-firstnight-500x280.png'


const extra = (
  <a href='http://vimeo.com/cskonopka'> sdsd </a> )
// import max                  from    '../src/img/csk-max-500x280.png';
// import trapped              from    '../src/img/csk-trapped-500x280.png';

export default class PhysicalComputing extends Component {
  render() {
    return (
      <div>


  <Grid stackable={true}  columns={4}>
    <Grid.Column>
        <Card
          image={oream}
          fluid={true}
          header='Oream'
          meta='Software Architect/Hardware Designer'
          extra={
            <div>
              <a href="http://oream.org">Website</a> — 
              <a href="http://oream.org/static/media/oreamwhitepaper.0ab596af.pdf"> White Paper</a>
            </div>
          }
          
        />
        
    </Grid.Column>
    <Grid.Column>
        <Card
          image={nasa}
          fluid={true}
          header='Next Generation Planetarium Dome Shows and Interactives'
          meta='VR/Jitter/Unreal'
          description='Created VR software utilizing models created by Dr. Seth Horowitz for NASA Rhode Island Space Grant (Brown University)' 
        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={nasa}
          fluid={true}
          header='Prosthetic Software'
          meta='Arduivis/Arduino/3D Printing'
        />
    </Grid.Column>

    <Grid.Column>
        <Card
          image={arduivis}
          fluid={true}
          header='Arduivis'
          meta='Rapid-Prototying Software/Serial'
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
          image={minddraw}
          fluid={true}
          header='MindDraw'
          meta='Max/Neurosky MindWave'
            extra={
                <div>
                    <a href='https://cycling74.com/projects/minddraw'>Article</a>
                </div>
            }

        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={ib}
          fluid={true}
          header='ImaginingBlue'
          meta='Max/Arduivis/Neurorak MindWave'
        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={c74}
          fluid={true}
          header='Visualizing Texas Death Row Last Statements'
          meta='MaxMSP/REST API/Analog Video Synthesis'
          extra={
              <div>
                  <a href='https://www.youtube.com/watch?v=EwRZejN3iX4'>Demo</a>
              </div>
          }
        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={nonamit}
          fluid={true}
          header='Mini-Interactive Tutu'
          meta='Mod/Wireless Glove/FFT Analysis'
          description="The project consisted of an adapted RC car with a custom frame and an Arduino controller with wireless control. Along with that, two more Arduino controllers were used, one with electret microphone using FFT processing and one controlling smooth changing RGB LEDs on MIT-1. MIT-1 was featured during the song “Never Alone”."
            extra={
                <div>
                    <a href='https://vimeo.com/224236424'>Video</a>
                </div>
            }
        />
    </Grid.Column>


    <Grid.Column>
        <Card
          image={ave5}
          fluid={true}
          header='Glitched AVE5'
          meta='Mod/Video Synthesis'
        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={c74}
          fluid={true}
          header='Palm Data'
          meta='Arduino/Data Logger/Pressure Sensor'
          description="A custom prototype for the course “An Innovative Approach to Treating Neuro Clients” by John Konopka at the Montana Occupational Therapy Association"
        />
    </Grid.Column>



    <Grid.Column>
        <Card
          image={wii}
          fluid={true}
          header='wiiAirDrum'
          meta='Max/Therapy Device'
          description="This project originated as part of a Music Therapy Development Group at Berklee College of Music during the 2012 Spring Semester, led by Dr. Richard Boulanger and Professor Chi Kim."
            extra={
                <div>
                    <a href='https://github.com/cskonopka/wiiAirDrum'>Github</a> — 
                    <a href='https://www.youtube.com/watch?v=ZNjOoPiGfpA'>Videos</a> — 
                    <a href='https://cycling74.com/projects/_-wiiairdrum-_'>Article</a>
                </div>
            }
        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={stria}
          fluid={true}
          header='Drawing Machines'
          meta='Arduino/Sensor Systems/Drawing Algorithms'
        />
    </Grid.Column>





    <Grid.Column>
        <Card
          image={os}
          fluid={true}
          header='Optical Sonance'
          meta='Data Sonification/Arduino/Max'
          description="The idea behind this project was to try to find a way to utilize weather related data as a medium to create new audiovisual experiences. This process started by using an ambient light sensor connected to an Arduino. The intensity data from the sensor was then sent to Max/MSP and then parsed in various ways to affect the timbre of seven different instruments in real-time. Parallel to this process, the intensity data is also being filtered to the servo motor to generate various twisting speeds. Furthermore, the spatial positioning of the stepper motors are also based on this parsed data. These several styles of parsing create various types of auditory and visual representations of a light source’s intensity."
          extra={
            <div>
              <a href="https://www.youtube.com/watch?v=AuArRzAGHow">v1 Demo</a> — 
              <a href="https://www.youtube.com/watch?v=A9k4SP2e7rU"> v2 Demo</a>
            </div>
          }
        />
    </Grid.Column>

    <Grid.Column>
        <Card
          image={berklee}
          fluid={true}
          header='Music & Science: Practice & Convergence'
          meta='Arduino/MaxMSP/Music Therapy'
          description="Live drawings of performance created by custom iCubeX BioSensor drawing machine using MaxMSP paired with Arduinos. These drawings were created during the composition “Shadows” by Dr. Richard Boulanger."
        />
    </Grid.Column>
    <Grid.Column>
        <Card
          image={berklee}
          fluid={true}
          header='2012 President’s Advisory Council Meeting hosted by Roger Brown'
          meta='MaxMSP/Music Therapy'
          description="Featured thesis/presenter of Music Therapy Development group led by Dr. Richard Boulanger and Dr. Suzanne Hanser. Live-Demo of thesis named “Drawbot”, a light sonification/drawing machine built for individuals with limited mobility. The purpose for this presentation showcase the cutting edge research, development and programming by students for advisors to see the future development in therapy applications."
        />
    </Grid.Column>

    <Grid.Column>
        <Card
          image={berklee}
          fluid={true}
          header='The Future of Music Therapy: Training in New Music Therapy Techniques'
          meta='MaxMSP/Bio Sensors/Drawing Machines'
          description="Presented original Wiimote software called the “Wii Air Drum”. Created and programmed in Max/MSP for Berklee professor Chi Kim and Dr. Richard Boulanger. The software was created for the Berklee for the Assistive Music Technology Lab for Blind and Visually Impaired Musicians. This software allows any individual to trigger various drum samples by striking in a downward motion while holding a Wiimote."
        />
    </Grid.Column>

    <Grid.Column>
        <Card
          image={firstnight}
          fluid={true}
          header='First Night Boston 2014 - First Light'
          meta='Arduino/AI Drawing Machine'
          description="The purpose of this design was to find a way to map the relation of distance between the user versus the machine and also provide an auditory representation of the event. The vertical positioning (X-axis) was plotted based on the distance between the observer and the machine itself. At the same time, while the machine was observing the observer using an Ultrasonic Range Finder, two microphones were used to listen to the room and provide an FFT analysis of the event. A dot would be plotted on the canvas when an auditory event was captured by the microphones and then it was to be analyzed. Once captured and analyzed, a line was drawn to represent the captured experience as a whole in relation to its original captured point. Together, these two algorithmic processes were blended together, providing an organic representation of the amount of individuals observing this machine and what they were hearing. While the machine was being observed by an individual(s), the machine itself was observing the individual and created a representation of it’s own experience while the individual was experiencing the same event. It is my own way of trying to create an analog data mapped event by using a digital medium which de-evolves back into an analog process, providing an insight into how general situations provide complex Artificial Intelligence questions."
        />
    </Grid.Column>


  </Grid>
      </div>
    );
  }
}


    // <Grid.Column>
    //     <Image src={pickasound} href="/pickasound"/>
    //         <h5>Pickasound</h5>
    // </Grid.Column>
    // <Grid.Column>
    //     <Image src={lv426} href="/lv426"/>
    //         <h5>LV-426</h5>
    // </Grid.Column>




//      <Grid doubling columns={4}>
//          <Grid.Column>
//              <Image src={oream} href="/oream" />
//              <h5>Oream</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={nasa} href="/NASApros" />
//              <h5>Prosthetic Software</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={nasa} href="/NASAglove" />
//              <h5>Glove Sonification</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={muse} href="/muse" />
//              <h5>Muse</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={arduivis} href='https://github.com/cskonopka/arduivis' />
//              <h5>arduivis</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={minddraw} href="/minddraw" />
//              <h5>MindDraw</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={ib} href="/imaginingblue" />
//              <h5>ImaginingBlue</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={eurobrain} href="/imaginingblue" />
//              <h5>Brainwave Eurorack</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={nonamit} href="/nonamit" />
//              <h5>Mini Interactive Tutu </h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={os} href="/opticalsonance" />
//              <h5>Optical Sonance</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={ave5} href="/ave5" />
//              <h5>Glitched AVE5</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={wii} href="/wiiairdrum" />
//              <h5>wiiAirDrum</h5>
//          </Grid.Column>
//          <Grid.Column>
//              <Image src={stria} href="/csoundconference" />
//              <h5>Csound Conference </h5>
//          </Grid.Column>
//      </Grid>

//   <Grid.Column>
//       <Card
//         image={eurobrain}
//         fluid={true}
//         header='Elliot Baker'
//         meta='Friend'
//         description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'

//       />
//   </Grid.Column>
