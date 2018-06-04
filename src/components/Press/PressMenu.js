import React, { Component } from 'react';
import '../App/App.css';
import { Tab }        from 'semantic-ui-react' 
import PressVideo            from "../Press/PressVideo"
import PressTech            from "../Press/PressTech"

import FrontEnd             from "../FrontEnd/FrontEnd"
import PhysicalComputing             from "../PhysicalComputing/PhysicalComputing"


const panes = [
  { menuItem: 'video press', render: () => <Tab.Pane attached={false}><PressVideo/></Tab.Pane> },
  { menuItem: 'tech press',         render: () => <Tab.Pane attached={false}><PressTech/></Tab.Pane> }
]


export default class PressMenu extends Component {
  render() {
    return (
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
          <Tab menu={{ pointing: true, fluid: true,  widths: 2, compact: true }}  panes={panes}  />
      </div>
    );
  }
}


  // { menuItem: 'press', render: () => <Tab.Pane attached={false}><SoftwarePub/></Tab.Pane> },
