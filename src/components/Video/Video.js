import React, { Component } from 'react';
import '../App/App.css';
import { Tab }        from 'semantic-ui-react' 
// import {Tab} from 'react-bootstrap'
import LiveVideo            from "../LiveVideo/LiveVideo"
import MusicVideos          from "../MusicVideos/MusicVideos"
import Promos               from "../Promos/Promos"
import Publications         from "../Publications/Publications"
import Collabs              from "../Collabs/Collabs"

const panes = [
  { menuItem: 'live',         render: () => <Tab.Pane attached={false}><LiveVideo/></Tab.Pane> },
  { menuItem: 'music-videos', render: () => <Tab.Pane attached={false}><MusicVideos/></Tab.Pane> },
  { menuItem: 'promos',       render: () => <Tab.Pane attached={false}><Promos/></Tab.Pane> },
  { menuItem: 'press',         render: () => <Tab.Pane attached={false}><Publications/></Tab.Pane> },
  { menuItem: 'collabs',      render: () => <Tab.Pane attached={false}><Collabs/></Tab.Pane> },
]

export default class Video extends Component {
  render() {

    return (
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
        <Tab menu={{ secondary: true, pointing: true, fluid: true, compact: true, widths: 5 }} grid={{compact: true}} defaultActiveIndex={this.props.headerProp} panes={panes} />      
      </div>
    );
  }
}

Video.defaultProps = {
   headerProp: 0
}