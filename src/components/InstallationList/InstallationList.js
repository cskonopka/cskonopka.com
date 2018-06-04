import React, { Component } from 'react';
import '../App/App.css';
import { Grid, List, Container } from 'semantic-ui-react'

export default class InstallationList extends Component {

  render() {
    return (
<div>
    <Grid>
        <Container textAlign='center'>
            <br/>
            <List relaxed size={ 'large'}>
                <List.Item href="https://spaceus.co/MAY-26-28-ELECTRIC-PETTING-ZOO"><h4>May 26 - 28, 2018: Electric Petting Zoo [Spaceus] (Boston, MA)</h4></List.Item>
                <List.Item><h4>January 25, 2018: Converge [The Star Store] (New Bedford, MA)</h4></List.Item>
                <List.Item href="http://bostonhasslefest.com"><h4>November 10 - 11, 2017: Hasslefest 9 [ONCE Somerville] (Somerville, MA)</h4></List.Item>
                <List.Item href="https://pcad.edu/gallery-exhibit/china-blue/"><h4>March 17 - April 28, 2017: Creativity of Consciousness @ Pennslyvania College of Art & Design</h4></List.Item>
    			<List.Item ><h4>October 6th, 2015: MoMA event @ The Sol Studio (Harlem, NY)</h4></List.Item>
    			<List.Item ><h4>September 16th, 2015: Transformation by Nona Hendryx Opening @ The Sol Studio (Harlem, NY)</h4></List.Item>
    			<List.Item ><h4>June 27th, 2015: DeRose Method (Tribeca, NY)</h4></List.Item>
    			<List.Item ><h4>September 23 - 24, 2014: Pixel-Pi @ Advanced Audio & Applications Exchange (Boston, MA)</h4></List.Item>
    			<List.Item href="https://sydneylivingmuseums.com.au/exhibitions/suburban-noir"><h4>October - November 2013: Suburban Noir @ The Museum of Sydney (Sydney, Australia)</h4></List.Item>
    			<List.Item ><h4>October 25-27, 2013: 2nd International Csound Conference @ Berklee College of Music (Boston, MA)</h4></List.Item>
                <br/>
            </List>
        </Container>
    </Grid>
</div>
    );
  }
}
