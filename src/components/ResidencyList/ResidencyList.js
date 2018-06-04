import React, { Component } from 'react';
import '../App/App.css';
import { Grid, List, Container } from 'semantic-ui-react'

export default class ResidencyList extends Component {

  render() {
    return (
<div>
    <Grid>
        <Container textAlign='center'>
            <br/>
            <List relaxed size={ 'large'}>
    <List.Item ><h4>April 14 - 20, 2016: Artist Residency @ Signal Culture (Owego, NY)</h4></List.Item>
    <List.Item ><h4>July 9 - 16, 2015: Toolmaker Residency @ Signal Culture (Owego, NY)</h4></List.Item>
    <br/>
            </List>
        </Container>
    </Grid>
</div>
    );
  }
}
