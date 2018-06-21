import React, { Component }   from  'react';
import { Tab }                from  'semantic-ui-react' 
import '../App/App.css';
// import  PhysicalComputing     from  "../PhysicalComputing/PhysicalComputing"
import  WebDevMenu            from  "../WebDev/WebDevMenu"
import  Video                 from  "../Video/Video"
import  Audio                 from  "../Audio/Audio"


const panes = [
  { menuItem: 'creative technology', render: () => <Tab.Pane attached={false}><WebDevMenu/></Tab.Pane> },
  { menuItem: 'analog video synthesis', render: () => <Tab.Pane attached={false}><Video /></Tab.Pane> },
  { menuItem: 'sound design', render: () => <Tab.Pane attached={false}><Audio /></Tab.Pane> },
]

export default class SubMenu extends Component {
  render() {

    return (
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
  		  <Tab menu={{ pointing: true, fluid: true,  widths: 3, compact: true }}   panes={panes} defaultActiveIndex={1}/>
      </div>

    );
  }
}

SubMenu.defaultProps = {
   indexer: 1,
   indexer2: 2
}




// const panes = [
//   { menuItem: 'phys-comp', render: () => <Tab.Pane attached={false}><PhysicalComputing /></Tab.Pane> },
//   { menuItem: 'software', render: () => <Tab.Pane attached={false}><WebDevMenu/></Tab.Pane> },
//   { menuItem: 'video', render: () => <Tab.Pane attached={false}><Video /></Tab.Pane> },
//   { menuItem: 'audio', render: () => <Tab.Pane attached={false}><Audio /></Tab.Pane> },
// ]
