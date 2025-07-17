import React from 'react'
import './about.css'

const About = () => {
    return (
        <div id='about' className='about'>
            <h1>WHO AM I ?</h1>
            <div className='about-container'>
                <div className="left-about">
                    <h3>About Me !!</h3><p>Hello, I'm <strong>Harmanpreet Singh</strong> — a passionate and driven Computer Science student with a strong foundation in Mathematics, Physics, Chemistry, and Computer Science. I take particular interest in Python and MySQL, where I constantly strive to sharpen both my technical proficiency and problem-solving acumen.

                    What excites me most is the intersection of technology and impact — building meaningful, user-centered solutions that are both scalable and elegant. I value clarity in code, precision in logic, and creativity in design. Whether I'm collaborating on team-based projects or working independently, I bring curiosity, discipline, and an eagerness to learn.

                    I'm not just preparing for a job in tech — I'm preparing for a career where I can innovate, contribute, and lead.</p>
                </div>
                <div className="right-about">
                        <h3>Skills & Focus Areas :</h3>

                       <p>&bull; Languages: Python (Core & Advanced), C++, JavaScript

                        &bull; Web Development: React, HTML5, CSS3, Tailwind CSS

                         &bull;Database Systems: MySQL (CRUD, Joins, Optimization), basic MongoDB

                         &bull;Tools & Platforms: Git, GitHub, Vite, VS Code, Postman

                        &bull; Core Strengths: Problem Solving, Clean Code Practices, UI/UX Awareness
                        </p> 

                       <h3> Currently Exploring :</h3>

                       <p>Full-Stack Development with backend integration

                        RESTful APIs and secure authentication systems

                        Building admin dashboards and scalable web applications

                        Future Aspirations:

                        To evolve into a well-rounded developer capable of creating intuitive applications, contributing to open-source communities, and eventually leading engineering teams that solve real-world problems through code.
                        </p> 
                    </div>
            </div>
        </div>
    )
}

export default About