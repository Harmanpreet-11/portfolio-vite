import React from 'react'
import "./education.css"

const Education = () => {
  return (
    <section id='education' className='education'> 
        <div className="heading">
            <h1>EDUCATION</h1>
        </div>
    <div className='timeline'>
        <div className="container left-container">
            <div className="text-box">
                <h2>JIS College of Engineering, Kalyani</h2>
                <small>2022 - Present</small>
                <p> &bull; Relevant Coursework : Data Structures, Web Development, Cloud Computing, Software Engineering.</p>
            </div>
        </div>

        <div className="container right-container">
            <div className="text-box">
                <h2>Kendriya Vidyalaya, Higher Seconadary</h2>
                <small>2022 - Present</small>
                <p>&bull; Relevant Coursework: Mathematics, Physics, Chemistry, and Computer Science, with a strong focus on Python programming and MySQL database management.</p>
            </div>
        </div>

        <div className="container left-container">
            <div className="text-box">
                <h2>St. Xavier's School, Secondary</h2>
                <small>2022 - Present</small>
                <p>&bull; Relevant Coursework : Completed Class 10 ICSE with Science stream, including Physics, Chemistry, Biology, and Mathematics.</p>
            </div>
        </div>
    </div>
</section>
  )
}

export default Education