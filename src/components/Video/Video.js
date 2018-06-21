import React, { Component } from 'react';
import '../App/App.css';
import { Tab }        from 'semantic-ui-react' 
// import {Tab} from 'react-bootstrap'
import LiveVideo            from "../LiveVideo/LiveVideo"
import MusicVideos          from "../MusicVideos/MusicVideos"
import VideoPainting               from "../VideoPainting/VideoPainting"
import Studio         from "../Studio/Studio"
import Promos              from "../Promos/Promos"

const panes = [
  { menuItem: 'studio',         render: () => <Tab.Pane attached={false}><Studio/></Tab.Pane> },
  { menuItem: 'performance',         render: () => <Tab.Pane attached={false}><LiveVideo/></Tab.Pane> },
  { menuItem: 'music-videos', render: () => <Tab.Pane attached={false}><MusicVideos/></Tab.Pane> },
  { menuItem: 'videoPainting',       render: () => <Tab.Pane attached={false}><VideoPainting/></Tab.Pane> },
  { menuItem: 'promos',      render: () => <Tab.Pane attached={false}><Promos/></Tab.Pane> },
]

export default class Video extends Component {
  render() {

    return (
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
        <Tab menu={{ secondary: true, pointing: true, fluid: true, compact: true, widths: 5, stackable: true}} grid={{compact: true}} defaultActiveIndex={this.props.headerProp} panes={panes} />      
      </div>
    );
  }
}

Video.defaultProps = {
   headerProp: 0
}