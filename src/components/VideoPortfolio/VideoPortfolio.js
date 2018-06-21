import React, { Component } from 'react';
import '../App/App.css';
import SubMenu				from	'../SubMenu/SubMenu'
import LogoTop        from  '../LogoTop/LogoTop'

class VideoPortfolio extends Component {
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


VideoPortfolio.defaultProps = {
   headerProp: 0
}

export default VideoPortfolio