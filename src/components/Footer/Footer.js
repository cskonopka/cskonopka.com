import React, { Component } from 'react';
import '../App/App.css';
import { Menu }             from 'semantic-ui-react' 
import { NavLink } from 'react-router-dom'

// import placeholder          from '../../img/sig2.png';

export default class Footer extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => 
  this.setState({ activeItem: name })

  render() {
   const { activeItem } = this.state


    return (
      <div>
        <Menu fluid widths={3} >


        <Menu.Menu >
          <Menu.Item
            name='contact'
            active={activeItem === 'contact'}
            onClick={this.handleItemClick}
            as={NavLink} 
            to='/contact'
          >
          </Menu.Item>
          <Menu.Item
            name='about'
            active={activeItem === 'about'}
            onClick={this.handleItemClick}
            as={NavLink} 
            to='/about'
          >
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