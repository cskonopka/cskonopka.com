import React, { Component } from 'react';
import '../App/App.css';
import AboutMenu from '../About/AboutMenu'
import LogoTop        from  '../LogoTop/LogoTop'
import { Grid, Image, Header }      from 'semantic-ui-react' 
import resume from '../../img/cskonopka-resume.pdf'
import FontAwesome from 'react-fontawesome'

export default class About extends Component {

  render() {
    return (
      <div>
  		<LogoTop/>
  		<br/>

<Grid stackable={true} columns={3} fluid>
                <Grid.Row>
                    <Grid.Column>
                        <Header size='medium'><a href="/tech">Creative Technology</a></Header>

                        <Header>[ &nbsp; &nbsp;
                            <a href="https://www.github.com/cskonopka">
                                <FontAwesome size="1x" name='github' />
                            </a> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <a href="https://www.pocketgopherdex.tumblr.com">
                                <FontAwesome size="1x" name='tumblr' />
                            </a> &nbsp; &nbsp; | &nbsp; &nbsp;
                            <a href="https://www.linkedin.com/christopherkonopka">
                                <FontAwesome size="1x" name='linkedin' />
                            </a> &nbsp; &nbsp; ]
                        </Header>
                    </Grid.Column>
                    <Grid.Column textAlign={ 'center'}>
                        <Header size='medium'><a href="/video">Analog Video Synthesis</a></Header>

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
                        <Header size='medium'><a href="/sound">Sound Design</a></Header>

                        <Header>[ &nbsp; &nbsp;
                            <a href="https://cskonopka.bandcamp.com/">
                                <FontAwesome size="1x" name='bandcamp' />
                            </a> &nbsp; &nbsp; ]</Header>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </div>
    );
  }
}


     	{/*<AboutMenu/>*/}