import React, { Component }   from  'react';
import { Tab }                from  'semantic-ui-react' 
import '../App/App.css';
import AboutCreative from '../About/AboutCreative'
import AboutVideo from '../About/AboutVideo'


// const panes = [
//   { menuItem: 'video', render: () => <Tab.Pane attached={false}><AboutVideo/></Tab.Pane> },
// ]

const panes = [
 { menuItem: 'creative full stack', render: () => <Tab.Pane attached={false}><AboutCreative/></Tab.Pane> },
 { menuItem: 'video', render: () => <Tab.Pane attached={false}><AboutVideo/></Tab.Pane> },
]

export default class AboutMenu extends Component {
  render() {
    return (

     <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
 		  <Tab menu={{ secondary: false, pointing: true, fluid: true, compact: true, widths: 2 }}   panes={panes} defaultActiveIndex={4}/>
     </div>
    );
  }
}





//      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
//      		<AboutVideo/>
//      </div>

//const panes = [
//  { menuItem: 'creative', render: () => <Tab.Pane attached={false}><AboutCreative/></Tab.Pane> },
//  { menuItem: 'video', render: () => <Tab.Pane attached={false}><AboutVideo/></Tab.Pane> },
//]


//const panes = [
//  { menuItem: 'video', render: () => <Tab.Pane attached={false}><AboutVideo/></Tab.Pane> },
//]
//
//export default class AboutMenu extends Component {
//  render() {
//
//    return (
//      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
//  		  <Tab menu={{ secondary: false, pointing: true, fluid: true, compact: true, widths: 2 }}   panes={panes} defaultActiveIndex={4}/>
//      </div>
//
//    );
//  }
//}