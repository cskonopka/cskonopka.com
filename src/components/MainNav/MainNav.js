import React, { Component } from 'react';
import '../App/App.css';
import { Menu, Image }             from 'semantic-ui-react' 
import { NavLink } from 'react-router-dom'

import placeholder          from '../../img/sig2.png';

export default class MainNav extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => 
  this.setState({ activeItem: name })

  render() {
   const { activeItem } = this.state


    return (
      <div>
        <Menu fluid={true} borderless={false} attached='top' secondary={true}>
          <Menu.Menu position='left' >
            <Menu.Item

            >
            <Image src={placeholder} href="/home" style={{width: '115%'}}/>

            </Menu.Item>
          </Menu.Menu>

        <Menu.Menu position='right'>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            as={NavLink} 
            to='/about'
          >

          </Menu.Item>

          <Menu.Item
            name='events'
            active={activeItem === 'events'}
            onClick={this.handleItemClick}
            as={NavLink} 
            to='/events'
          >

          </Menu.Item>  

          <Menu.Item
            name='portfolio'
            active={activeItem === 'portfolio'}
            onClick={this.handleItemClick}
            as={NavLink} 
            to='/portfolio'
          >

          </Menu.Item>
          <Menu.Item
            name='press'
            active={activeItem === 'press'}
            onClick={this.handleItemClick}
            as={NavLink} 
            to='/press'
          >

          </Menu.Item>

        </Menu.Menu>
      </Menu>
  
      </div>
    );
  }
}



 //        <Menu.Item
 //          name='cv'
 //          active={activeItem === 'cv'}
 //          onClick={this.handleItemClick}
 //          as={NavLink} 
 //          to='/cv'
 //        >

 //        </Menu.Item>
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