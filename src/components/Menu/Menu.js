import React, { Component } from 'react';
import '../App/App.css';
import { Menu }             from 'semantic-ui-react' 
// import placeholder          from '../src/img/sig.png';

export default class Menu2 extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => 
  this.setState({ activeItem: name })

  render() {
   const { activeItem } = this.state


    return (
      <div>
        <Menu>
          <Menu.Menu position='left'>
            <Menu.Item
              name='editorials'
              active={activeItem === 'editorials'}
              onClick={this.handleItemClick}
            >
            {/*<Image src={placeholder} href="/scoping" style={{width: '10%'}}/>*/}
            cskonopka
            </Menu.Item>
          </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item
            name='reviews'
            active={activeItem === 'reviews'}
            onClick={this.handleItemClick}
          >
            cv
          </Menu.Item>

          <Menu.Item
            name='upcomingEvents'
            active={activeItem === 'upcomingEvents'}
            onClick={this.handleItemClick}
          >
            contact
          </Menu.Item>
        </Menu.Menu>
      </Menu>
  
      </div>
    );
  }
}



//   <div style={{paddingLeft:"10%", paddingRight:"10%"}}>
//       <Grid columns='equal'>
//         <Grid.Column>
//           <Button style={{width:"99%"}}>Click Here</Button>
//         </Grid.Column>
//         <Grid.Column>
//           <Button style={{width:"99%"}}>Click Here</Button>
//         </Grid.Column>
//         <Grid.Column>
//           <Button style={{width:"99%"}}>Click Here</Button>
//         </Grid.Column>
//       </Grid>