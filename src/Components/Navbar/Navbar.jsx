import React from 'react'
import './navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='name'>
            <h2>Harmanpreet Singh</h2>
        </div>
        <div className='category'>
            <a href="#home"><button>Home</button></a>
            <a href="#projects"><button>Projects</button></a>
            <a href="#education"><button>Education</button></a>
            <a href="#about"><button>About</button></a>
            <a href="#contact"><button>Contact</button></a>
        </div>
    </div>
  )
}

export default Navbar