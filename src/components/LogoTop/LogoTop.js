import React, { Component } from 'react';
import '../App/App.css';
import EventMenu        from  '../EventMenu/EventMenu'
import { Grid, Image, Header }      from 'semantic-ui-react' 
import logo from '../../img/csk-logo-transparent.png'

export default class Events extends Component {

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
            <br/>
        </div>
    );
  }
}
