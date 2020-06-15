import React from 'react';
import './About.css'

export default function About(){
  return (
    <div>
      <p>
        Scratch is a multimedia, full-stack Web Application developed by Jonathan Moore in 2020 to demonstrate his competency in Full-Stack Web Development. This application can be used to set reminders, collect one's thoughts, or simply to amuse oneself. Scratch also comes with the added benefit of being environmentally friendly. Why waste paper when you can use Scratch?
      </p>
      <img className="Cartoon" src={require("../Images/cartoon notepad.png")} alt="cartoon-notepad" />
    </div>
  )
}