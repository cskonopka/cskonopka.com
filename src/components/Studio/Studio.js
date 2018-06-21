import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card, Tab }      from 'semantic-ui-react' 

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
import vimeo                   from '../../img/csk-vimeo-500x280.png';


export default class Studio extends Component {
  render() {
    return (

    <div>
        <Grid stackable={true} columns={4}>
            <Grid.Row>
            <Grid.Column>
                <Card 
                image={vimeo} 
                fluid={true} 
                header='StudioPortfolio' 
                href='https://vimeo.com/cskonopka'
                />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={vid1} 
                fluid={true}
                href='https://vimeo.com/268922766'
                />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={vid2} 
                fluid={true}
                href='https://vimeo.com/267369183'
                />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={vid3} 
                fluid={true}
                href='https://vimeo.com/275938612'
                />
            </Grid.Column>

            <Grid.Column>
                <Card 
                image={vid5} 
                fluid={true}
                href='https://vimeo.com/271586709'
                />
            </Grid.Column>
            <Grid.Column>
                <Card 
                image={vid4} 
                fluid={true}
                href='https://vimeo.com/269407126'
                />
            </Grid.Column>



            </Grid.Row>
</Grid>

      </div>
    );
  }
}

