import React from 'react'
import './project.css'



const Projects = () => {
    return (
        <section id='projects' className='card-container'>
            <div className='title'>
                <h1>PROJECTS</h1>
            </div>
            <div className='cards'>
                <div className='card'>
                    <img src="project-1.png" alt="" />
                    <span>Spotify Clone</span>
                    <p>Developed an interactive music player with Spotify-like UI/UX, featuring play, pause, seek, and track navigation. Currently evolving it into a full-stack app with backend integration, user playlists, and real-time streaming.</p>
                    <div className='btn'>
                        <a href="https://spotify-clone-harmanpreet.vercel.app/" 
                        target='_blank'><button>Demo</button></a>
                        <a href="https://github.com/Harmanpreet-11/spotify-clone-react" 
                        target='_blank'> <button >Github</button></a>
                    </div>
                </div>
                <div className='card'>
                    <img src="project-2.png" alt="" />
                    <span>CryptoPulse</span>
                    <p>Built a cryptocurrency live monitoring app using React, Vite, and the Gecko API to display real-time data, including price, market cap, and 24h changes. Features include interactive charts, a search bar with dynamic filtering.</p>
                    <div className='btn'>
                      <a href="https://CryptoPulse.vercel.app/" target='_blank'><button>Demo</button></a>  
                        <a href="https://github.com/Harmanpreet-11/CryptoPulse" target='_blank'><button >Github</button></a>
                    </div>
                </div>
                <div className='card'>
                    <img src="project-3.png" alt="" />
                    <span>Blogging App</span><p>Created a blogging platform to share ideas across diverse fields, fostering connection among like-minded individuals. Currently expanding it into a full-stack application with an admin panel and user features for editing and managing blogs.</p>
                    <div className='btn'>
                        <a href="https://Blogger-App.vercel.app/" target='_blank'><button>Demo</button></a>
                          <a href="https://github.com/Harmanpreet-11/Blogger-App" target='_blank'><button >Github</button></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects