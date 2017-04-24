import React from 'react'
import {IndexLink} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>React Router tutorial</h1>
        <ul role="nav">
          <li><NavLink to="/about">About12</NavLink></li>
          <li><NavLink to="/repos">Repos12</NavLink></li>
          <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
        </ul>
        
        {this.props.children}
      </div>
    )
  }
})
