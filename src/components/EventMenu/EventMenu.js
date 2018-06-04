import React, { Component } from 'react';
import '../App/App.css';
import { Tab }        from 'semantic-ui-react' 
// import {Tab} from 'react-bootstrap'
import VideoShowList            from "../VideoShowList/VideoShowList"
import InstallationList          from "../InstallationList/InstallationList"
import LectureList               from "../LectureList/LectureList"
import ResidencyList         from "../ResidencyList/ResidencyList"
import PublicationList              from "../PublicationList/PublicationList"

const panes = [
  { menuItem: 'video-shows',         render: () => <Tab.Pane attached={false}><VideoShowList/></Tab.Pane> },
  { menuItem: 'installations', render: () => <Tab.Pane attached={false}><InstallationList/></Tab.Pane> },
  { menuItem: 'lectures',       render: () => <Tab.Pane attached={false}><LectureList/></Tab.Pane> },
  { menuItem: 'residencies',         render: () => <Tab.Pane attached={false}><ResidencyList/></Tab.Pane> },
  { menuItem: 'publications',      render: () => <Tab.Pane attached={false}><PublicationList/></Tab.Pane> },
]

export default class Events extends Component {
  render() {

    return (
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
        <Tab menu={{ pointing: true, fluid: true, compact: true, widths: 5 }} grid={{compact: true}} panes={panes} />      
      </div>
    );
  }
}