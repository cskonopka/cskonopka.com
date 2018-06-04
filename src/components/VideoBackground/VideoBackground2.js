import React, {Component} from 'react';
import sample from '../../vid/55.mp4';
import {Header, Grid, Image} from 'semantic-ui-react'
// import placeholder          from '../../img/sig2.png';
import main          from '../../img/csk-main.jpg';

var backgroundVideo = {
    height: ''
}

export default class VideoBackground2 extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=bfLyg0-XL6I'
        }
    }

    render () {
        return (
            <div>
            <Grid container columns={1} >
                <Grid.Column >
                    <video className="background-video" loop autoPlay>
                        <source src={sample} type='video/mp4' />
                    </video>
                </Grid.Column>
            </Grid>
            </div>

        )
    }
};

//                    <Image size={'medium'} src={main} centered/>
            // <Grid.Column textAlign={'center'}>
            //         <Image src={logo} href="/home" style={{width: '115%'}}/>
            // </Grid.Column>
            // <Grid.Column>
            //         <Header size={'medium'}>Analog Video Synthesis | Creative Technology Solutions</Header>
            // </Grid.Column>
            //         <br/>
            //         <br/>
            // <Grid.Column>
            //         <video id="background-video" loop autoPlay>
            //             <source src={sample} type='video/mp4' />
            //         </video>
            // </Grid.Column>