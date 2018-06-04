import React, { Component } from 'react';
import '../App/App.css';
import SubMenu				from	'../SubMenu/SubMenu'

class LiveVideoLink extends Component {
        constructor(props) {
            super(props);
            this.state = { name: 0 };
        }


  render() {
    return (
      <div>
{/*        <SubMenu indexer={this.state.name}/>*/}
        <SubMenu indexer={this.props.headerProp}/>
      </div>
    );
  }
}


LiveVideoLink.defaultProps = {
   headerProp: 0
}

export default LiveVideoLink