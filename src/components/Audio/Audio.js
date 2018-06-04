import React, { Component } from 'react';

import { Card, Grid }        		from 'semantic-ui-react' 

import astronaut                from '../../img/csk-astronaut-500x280.png'
import ggbbb1                from '../../img/csk-ggbbb1-500x280.png'
import ggbbb2                from '../../img/csk-ggbbb2-500x280.png'
import ggbbb3                from '../../img/csk-ggbbb3-500x280.png'
import zubra1                from '../../img/csk-zubra1-500x280.png'
import programs1                from '../../img/csk-programs1-500x280.png'

// const panes = [
//   { menuItem: 'Schwwaaa', pane:         (<Tab.Pane attached={false}>Schwwaaa</Tab.Pane>) },
//   { menuItem: 'Sound Design', pane: (<Tab.Pane attached={false}>sounddesign</Tab.Pane>) },
// ]

export default class Audio extends Component {
  render() {

    return (
      	<div style={{paddingLeft:"2%", paddingRight:"2%"}}>   
			<Grid stackable={true} columns={4}>
			  <Grid.Column>
			      <Card
			      	image={astronaut}
			        fluid={true}
			        header='cskonopka'
			        meta='thinkingaboutstrandedastronauts'
			        href='https://schwwaaa.bandcamp.com/album/thinkingaboutstrandedastronauts'
			      />
			  </Grid.Column>
			  <Grid.Column>
			      <Card
			      	image={ggbbb3}
			        fluid={true}
			        header='ggbbb'
			        meta='bone$ and ¢hlorine'
			        href='https://schwwaaa.bandcamp.com/track/bone-and-hlorine'
			      />
			  </Grid.Column>
			  <Grid.Column>
			      <Card
			      	image={zubra1}
			        fluid={true}
			        header='zubra/guraffe'
			        meta='LIVE@zebraFarm'
			        href='https://schwwaaa.bandcamp.com/album/live-zebrafarm-3'
			      />
			  </Grid.Column>
			  <Grid.Column>
			      <Card
			      	image={ggbbb2}
			        fluid={true}
			        header='ggbbb'
			        meta='phenom monde'
			        href='https://schwwaaa.bandcamp.com/album/phenom-monde'
			      />
			  </Grid.Column>
			  <Grid.Column>
			      <Card
			      	image={programs1}
			        fluid={true}
			        header='Programs'
			        meta='Software Architect/Hardware Designer'
			        href='https://schwwaaa.bandcamp.com/track/footnote-asterisk'
			      />
			  </Grid.Column>
			  <Grid.Column>
			      <Card
			      	image={ggbbb1}
			        fluid={true}
			        header='ggbbb'
			        meta='0802a'
			        href='https://schwwaaa.bandcamp.com/album/0802a'
			      />
			  </Grid.Column>

			</Grid>
      	</div>
    );
  }
}


// <Tab panes={panes} menu={{ secondary: true, pointing: true }} renderActiveOnly={false} />