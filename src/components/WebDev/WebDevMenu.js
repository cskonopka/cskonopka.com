import React, { Component } from 'react';
import '../App/App.css';
import { Tab }        from 'semantic-ui-react' 
import FullStack            from "../FullStack/FullStack"
import FrontEnd             from "../FrontEnd/FrontEnd"
import PhysicalComputing             from "../PhysicalComputing/PhysicalComputing"


const panes = [
  { menuItem: 'hardware development', render: () => <Tab.Pane attached={false}><PhysicalComputing/></Tab.Pane> },
  { menuItem: 'software development',         render: () => <Tab.Pane attached={false}><FullStack/></Tab.Pane> },
  { menuItem: 'audio development', render: () => <Tab.Pane attached={false}><FrontEnd/></Tab.Pane> },
]


export default class WebDevMenu extends Component {
  render() {
    return (
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
          <Tab menu={{ secondary: true, pointing: true, fluid: true, compact: true, widths: 3 }} grid={{compact: true}}  panes={panes}  />

      </div>
    );
  }
}


  // { menuItem: 'press', render: () => <Tab.Pane attached={false}><SoftwarePub/></Tab.Pane> },
