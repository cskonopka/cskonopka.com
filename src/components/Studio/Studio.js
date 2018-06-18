import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Card, Tab }      from 'semantic-ui-react' 

import vice                 from '../../img/csk-vice-500x280.jpg';
import nts                  from '../../img/csk-nts-500x280.jpg';
import hf9                  from '../../img/csk-hasslefest9-500x280.png';
import moogfest                  from '../../img/csk-moogfest-500x280.jpg';
import massmoca                  from '../../img/csk-massmoca-500x280.jpg';
import liveeye                  from '../../img/csk-liveeye-500x280.png';
import hassle                  from '../../img/studio.jpg';

const panes = [
  { menuItem: 'Tab 1', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 2', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 3', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Tab 4', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 5', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Tab 6', render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Tab 7', render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
  { menuItem: 'Tab 8', render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
]

const TabExampleSecondary = () => <Tab menu={{ secondary: true }} panes={panes} />


export default class Studio extends Component {
  render() {
    return (
      <div >  
        <Grid stackable={true} columns={4}>



            <br/>
      <div style={{paddingLeft:"2%", paddingRight:"2%"}}>
<Tab menu={{ secondary: true }} panes={panes} fluid={true} />
      </div>



</Grid>

      </div>
    );
  }
}

