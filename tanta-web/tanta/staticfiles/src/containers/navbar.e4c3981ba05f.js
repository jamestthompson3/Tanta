import React, { Component } from 'react';
import styled from 'styled-components'
class NavBar extends Component {

  render() {
    return (
      <div className="clearfix border">
        <div className="sm-col">
          <a>My Wallet</a>
          <a>Actions</a>
          <a>My Info</a>
          <a>Sign Out</a>
        </div>
      </div>
    );
  }

}

export default NavBar;
