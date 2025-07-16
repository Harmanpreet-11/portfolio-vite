import React from 'react'
import './home.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


const Home = () => {
  return (
    <div id='home' className='Home'>
      <div className="left">
        <div className='info'>
          <h2>Hi, I am Harmanpreet Singh</h2>
          <h1>A Full Stack Developer</h1>
          <h4>I’m a student passionate about web development and technology. I enjoy building clean, responsive, and user-friendly applications. Always eager to learn and improve, I aim to grow my skills through real-world projects and collaboration.I thrive in collaborative environments and am committed to evolving both technically and professionally in the dynamic field of software development.</h4>
        </div>

        <div className='social-icons'>
          <a href="https://github.com/Harmanpreet-11" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/harmanpreet-singh-user01/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>

          <a href="/resume-harman.pdf" download className='resume'>
            <button>Resume</button>
          </a>

        </div>
      </div>
      <div className="right">
        <div className='image'>
          <img src="photo.png" width={380} height={380} alt="" />
        </div>

      </div>
    </div>
  )
}

export default Home