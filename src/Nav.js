import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({dogs}) => {

  const links = dogs.map(d => (
    <NavLink to={`/dogs/${d.name.toLowerCase()}`} key={d.name} >{d.name}</NavLink>
  ))

  return (
    <nav>
      <NavLink to='/dogs' end>Home</NavLink>
      {links}
    </nav>
  )
}

export default Nav;