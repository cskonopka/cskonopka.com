import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Image, Header }      from 'semantic-ui-react' 
import logo from '../../img/csk-logo-transparent.png'
import VideoBackground      from    '../VideoBackground/VideoBackground'
import VideoBackground2      from    '../VideoBackground/VideoBackground2'
import astronaut                from '../../img/csk-astronaut-500x280.png'
import VideoPortfolio      from    '../VideoPortfolio/VideoPortfolio'
import euglossine           from    '../../img/csk-euglossine_1.jpg';
import stenos01             from '../../img/csk-stenos01-500x280.png';


import FontAwesome from 'react-fontawesome'

export default class Home extends Component {
  render() {
    return (
        <div>
            <br/>
            <Grid columns={5} fluid stackable={true}>
                <Grid.Row>
                    <Grid.Column textAlign={ 'center'}></Grid.Column>
                    <Grid.Column textAlign={ 'center'}></Grid.Column>
                    <Grid.Column textAlign={ 'center'}>
                        <Image ui centered image src={logo} />
                    </Grid.Column>
                    <Grid.Column textAlign={ 'center'}></Grid.Column>
                    <Grid.Column textAlign={ 'center'}></Grid.Column>
                </Grid.Row>
            </Grid>
            <Grid stackable={true} columns={3} fluid>
                <Grid.Row>
                    <Grid.Column textAlign={ 'center'}>
                        <Header size='medium'><a href="/video">Analog Video Synthesis</a></Header>
                        <Image src={euglossine} href="/video" />
                        <Header>[ &nbsp; &nbsp;
                            <a href="https://www.vimeo.com/cskonopka">
                                <FontAwesome size="1x" name='vimeo' />
                            </a> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <a href="https://www.instagram.com/cskonopka">
                                <FontAwesome size="1x" name='instagram' />
                            </a> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <a href="https://www.youtube.com/watch?v=WngGZz6f5o4&list=PLGJVzjsDmY4bO8W9SZSKwks2YpTOwpanr">
                                <FontAwesome size="1x" name='youtube' />
                            </a> &nbsp; &nbsp; ]</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header size='medium'><a href="/tech">Creative Technology</a></Header>
                        <Image src={stenos01} href="/tech" />
                        <Header>[ &nbsp; &nbsp;
                            <a href="https://www.github.com/cskonopka">
                                <FontAwesome size="1x" name='github' />
                            </a> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <a href="https://www.pocketgopherdex.tumblr.com">
                                <FontAwesome size="1x" name='tumblr' />
                            </a> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <a href="https://www.linkedin.com/christopherkonopka">
                                <FontAwesome size="1x" name='linkedin' />
                            </a> &nbsp; &nbsp; ]</Header>
                    </Grid.Column>
                    <Grid.Column>
                        <Header size='medium'><a href="/sound">Sound Design</a></Header>
                        <Image src={astronaut} href="/sound" />
                        <Header>[ &nbsp; &nbsp;
                            <a href="https://cskonopka.bandcamp.com/">
                                <FontAwesome size="1x" name='bandcamp' />
                            </a> &nbsp; &nbsp; ]</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {/*
            <Grid container columns={1}>
                <Grid.Row>
                    <Grid.Column>
                        <Header size='medium'>Analog Video Synthesis | Creative Technology Solutions</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>*/}
            <br/>
            <br/> {/*
            <Grid columns={6} fluid>
                <Grid.Column textAlign={ 'center'}>
                    <a href="mailto:cskonopka@schwwaaa.net">
                        <FontAwesome size="2x" name='envelope' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.vimeo.com/cskonopka">
                        <FontAwesome size="2x" name='vimeo' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.instagram.com/cskonopka">
                        <FontAwesome size="2x" name='instagram' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://schwwaaa.bandcamp.com/">
                        <FontAwesome size="2x" name='bandcamp' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.linkedin.com/in/christopherkonopka">
                        <FontAwesome size="2x" name='linkedin' />
                    </a>
                </Grid.Column>
                <Grid.Column textAlign={ 'center'}>
                    <a href="https://www.facebook.com/in/cskonopka">
                        <FontAwesome size="2x" name='facebook' />
                    </a>
                </Grid.Column>
            </Grid>*/}
        </div>
    );
  }
}





{/* <Grid columns={1} fluid>
            <Grid.Row>
                <Grid.Column>
                    <Header size='medium'><a href="/video">Analog Video Synthesis</a> | <a href="/tech">Creative Technology</a> | <a href="/sound">Sound Design</a></Header>
                </Grid.Column>
            </Grid.Row>
            </Grid>*/}