import React, { Component } from 'react';
import '../App/App.css';
import SubMenu				from	'../SubMenu/SubMenu'
import LogoTop    from '../LogoTop/LogoTop'
class SoundPortfolio extends Component {
        constructor(props) {
            super(props);
            this.state = { name: 0 };
        }


  render() {
    return (
      <div>
{/*        <SubMenu indexer={this.state.name}/>*/}
        <LogoTop/>
        <br/>
        <SubMenu indexer={this.props.headerProp}/>
      </div>
    );
  }
}


SoundPortfolio.defaultProps = {
   headerProp: 2
}

export default SoundPortfolio