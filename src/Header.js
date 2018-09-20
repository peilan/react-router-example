import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (<ul>
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/roster'>Roster</Link></li>
      <li><Link to='/shelude'>Shelude</Link></li>
    </ul>)
  }
}

export default Header;
