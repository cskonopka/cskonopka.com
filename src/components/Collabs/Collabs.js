import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 
import lumps                from '../../img/csk-lumps-500x280.jpg';
import starjelly            from '../../img/csk-starjelly-500x280.jpg';

export default class Collabs extends Component {
  render() {
    return (
      <div >

        <Grid stackable={true} columns={4}>
<Grid.Column>
        <Card image={lumps}
            header='Porthead'
            meta='w/ Lumps'
            href='https://vimeo.com/216779712'/>

</Grid.Column>
<Grid.Column>
    <Card image={starjelly}
        header='Starjelly'
        meta='w/ Sally Schofield'
        href='https://vimeo.com/227492124' />
</Grid.Column>
        </Grid>
      </div>
    );
  }
}


