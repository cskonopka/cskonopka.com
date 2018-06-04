import React, { Component } from 'react';
import '../App/App.css';
import { Grid, List, Container } from 'semantic-ui-react'

export default class LectureList extends Component {

  render() {
    return (
<div>
    <Grid>
        <Container textAlign='center'>
            <br/>
            <List relaxed size={ 'large'}>
    <List.Item href="https://pcad.edu/gallery-exhibit/china-blue/"><h4>March 18, 2017: Creativity of Consciousness @ Pennslyvania College of Art & Design</h4></List.Item>
    <List.Item ><h4>April 8, 2016: NASA Space Grant Poster Session VR Demo (Providence, RI)</h4></List.Item>
    <List.Item ><h4>October 17, 2015: MindDraw @ Mini Maker Faire (Rhode Island)</h4></List.Item>
    <List.Item ><h4>April 7, 2015: LZX Presentation for Tom Zicarelli @ Berklee College of Music (Boston, MA)</h4></List.Item>
    <List.Item ><h4>September 23 - 24, 2014: Pixel-Pi @ Advanced Audio & Applications Exchange (Boston, MA)</h4></List.Item>
    <List.Item ><h4>November 20, 2014: NASA glove presentation @ Brown University (Providence, RI)</h4></List.Item>
    <List.Item ><h4>November 7, 2014: Symphonic Muse at MIT (Cambridge, MA)</h4></List.Item>
    <List.Item ><h4>September 23 - 24, 2014: Advanced Audio & Applications Exchange featured software <em>Muse</em> by Boulanger Labs & BT (Boston, MA)</h4></List.Item>
    <List.Item ><h4>May 30, 2014: Lecture on EEG Data Mapping @ Berklee College of Music (Boston, MA)</h4></List.Item>
    <List.Item ><h4>May 18, 2014: Lecture/Presentation on interconnectivity hacking @ Diablo Glass Studio (Jamaica Plain, MA)</h4></List.Item>
    <List.Item ><h4>April 28, 2014: Lecture/Demo/Seminar of custom Eurorack Modules for Richard Devine @ Berklee College of Music (Boston, MA)</h4></List.Item>
    <List.Item ><h4>April 2013: Palm Data presented by John Konopka @ Montana Occupational Therapy Association (Montana)</h4></List.Item>
    <List.Item ><h4>November 2012: Interactive Therapy Solutions for the President’s Advisory Council Meeting hosted by Roger Brown @ Berklee College of Music (Boston, MA)</h4></List.Item>
    <List.Item ><h4>April 2012: The Future of Music Therapy: Training in New Music Therapy Techniques @ Berklee College of Music (Boston, MA)</h4></List.Item>
    <br/>
            </List>
        </Container>
    </Grid>
</div>
    );
  }
}
