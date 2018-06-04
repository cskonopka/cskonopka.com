import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card }      from 'semantic-ui-react' 

import vice                 from '../../img/csk-vice-500x280.jpg';
import nts                  from '../../img/csk-nts-500x280.jpg';
import hf9                  from '../../img/csk-hasslefest9-500x280.png';
import moogfest                  from '../../img/csk-moogfest-500x280.jpg';
import massmoca                  from '../../img/csk-massmoca-500x280.jpg';
import liveeye                  from '../../img/csk-liveeye-500x280.png';
import hassle                  from '../../img/csk-hassle-500x280.png';



export default class Press extends Component {
  render() {
    return (
      <div >  
<Grid stackable={true} columns={4}>

            <br/>

<Grid.Column>
    <Card 
    image={hassle} 
    header='Boston Hassle'
    meta='Went There: 1/19 Dreamscape 13 @Hope Central Church'
    href='https://bostonhassle.com/went-there-1-19-dreamscape-13-hope-central-church/'
    fluid={true}

    />
</Grid.Column>

<Grid.Column>
    <Card 
    image={vice} 
    header='Vice'
    meta='Artist Interview'
    fluid={true}
    extra={
        <div>
            <a href='https://creators.vice.com/en_us/article/nzgavb/premiere-safetalk-raw-analog-signals-music-video'>Article</a> — 
            <a href='https://www.youtube.com/watch?v=udB51Q9VLy4'> Video</a> 
        </div>
    }
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={massmoca} 
    header='Mass MoCA'
    meta='Performer'
    href='http://massmoca.org/event/nona-hendryx-nick-cave/'
    fluid={true}
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={moogfest} 
    header='Moogfest 2017'
    meta='Performer'
    fluid={true}
    extra={
        <div>
            <a href='https://moogfest2017.sched.com/event/AGdG/the-sounds-of-dreaming'>Info</a> —  
            <a href='https://vimeo.com/236838560'> Video</a> 
        </div>
    }
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={nts} 
    header='NTS'
    meta='Featured Artist [02/22 - 28/2017]'
    fluid={true}
    />
</Grid.Column>

<Grid.Column>
    <Card 
    image={hf9} 
    header='Hasslefest9'
    meta='Feedback [Video Installation]'
    href='https://vimeo.com/album/4860217'
    fluid={true}
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={hassle} 
    header='Lethean'
    meta='Album Release'
    href='https://bostonhassle.com/substrates-lethean/'
    fluid={true}
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={hassle} 
    header='Went There'
    meta='Live @ Moon Villain'
    fluid={true}
    href='https://bostonhassle.com/went-there-charles-allin-jeremyharris-live-at-moon-villain/'
    />
</Grid.Column>
<Grid.Column>
    <Card 
    image={liveeye} 
    header='"Memory Palace" Review'
    meta='Live Eye Tv'
    href='http://www.liveeyetv.org/2017/03/watch-john-frums-memory-palace-video/'
    fluid={true}
    />
</Grid.Column>

<Grid.Column>
    <Card 
    image={liveeye} 
    header='Top 25 of 2017'
    meta='Live Eye Tv'
    fluid={true}
    href='http://www.liveeyetv.org/2017/12/watch-25-favorite-videos-of-2017/'
    />
</Grid.Column>
        </Grid>
      </div>
    );
  }
}


