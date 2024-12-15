import React, { useEffect } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const About = () => {
    useEffect (() => {
      document.title = "Best coders | About"
    })
  return (
    <div>
      <h2>About page</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus exercitationem necessitatibus ab iusto natus provident facere at eveniet nostrum alias perspiciatis obcaecati, architecto corrupti, debitis facilis sed atque labore veniam!</p>
      <nav>
        <NavLink to="team">Team</NavLink>
        <NavLink to="aim">Aim</NavLink>
        <NavLink to="job">Job</NavLink>
      </nav>
      <Outlet/>
    </div>
  )
}

export default About