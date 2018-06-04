import React, { Component } from 'react';
import '../App/App.css';
import SubMenu				from	'../SubMenu/SubMenu'

class Portfolio extends Component {
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


Portfolio.defaultProps = {
   headerProp: 0
}

export default Portfolio