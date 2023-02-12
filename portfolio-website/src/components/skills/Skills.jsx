import React from 'react'
import Frontend from './Frontend'
import "./skills.css"

const Skills = () => {
  return (
    <section className="skills" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My tecnical level</span>

        <div className="skill__container container grid">
            <Frontend/>
        </div>
    </section>
  )
}

export default Skills