import React, {Component} from 'react';
import sample from '../../vid/55.mp4';
import {Header, Grid, Image} from 'semantic-ui-react'
// import placeholder          from '../../img/sig2.png';
import main          from '../../img/csk-main.jpg';

var backgroundVideo = {
    height: ''
}

export default class VideoBackground extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.dropbox.com/s/tynv3wv0hf1lxau/55.mp4?dl=0'
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