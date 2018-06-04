import React, { Component } from 'react';
import '../App/App.css';
import { Grid, Image, Header }      from 'semantic-ui-react' 
import logo from '../../img/csk-logo-transparent.png'
import SubMenu				from	'../SubMenu/SubMenu'
import FontAwesome from 'react-fontawesome'
import astronaut                from '../../img/csk-astronaut-500x280.png'
import euglossine           from    '../../img/csk-euglossine_1.jpg';
import stenos01             from '../../img/csk-stenos01-500x280.png';
import LogoTop        from  '../LogoTop/LogoTop'

class Portfolio extends Component {
        constructor(props) {
            super(props);
            this.state = { name: 0 };
        }


  render() {
    return (
      <div>
            <LogoTop />
{/*        <SubMenu indexer={this.state.name}/>*/}
        <SubMenu indexer={this.props.headerProp}/>
      </div>
    );
  }
}


Portfolio.defaultProps = {
   headerProp: 0
}

export default Portfolio