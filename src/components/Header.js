import React, { Component } from 'react';
import { Navbar, Nav, Icon } from 'rsuite';

export class Navigation extends Component {
  render() {
    return(
      <Navbar appearance="inverse">
        <Navbar.Header>
          <a href="" className="navbar-brand logo">Logo</a>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />} >Home</Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />} >Login</Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    )
  }
}
