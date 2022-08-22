import React from 'react';

const twitterLogo = 'https://cdn-icons-png.flaticon.com/512/25/25347.png'
const githubLogo = 'https://cdn-icons-png.flaticon.com/512/25/25231.png'
const LinkedInLogo = 'https://cdn-icons-png.flaticon.com/512/254/254394.png'

const About = () => {
    return (
        <div className='container'>
            <h2>About Me</h2>
            <div className='about-me'>
                <p>I am a Full Stack Developer currently working on open source projects. <br/>
                I currently work full time as a construction project manager. <br/>
                I am looking to transition into a roll as a full time software engineer.
                </p>
                <br/>
                <p>I started learning to code in 2020 as a hobbie to use on projects and jobs I was working on at the time. <br/>
                Coding grew into a passion and I took the leap to go to a coding bootcamp in 2022.</p>
            </div>
            <div className='social-media'>
                <h4>---You can follow my journey from construction to tech here---</h4>
                <ul className='social-media-links'>
                    <li><a href='https://github.com/dosoc'><img className='icon' src={githubLogo} />GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/aaron-ingalls/'><img className='icon' src={LinkedInLogo} />LinkedIn</a></li>
                    <li><a href='https://twitter.com/BTCAaron'><img className='icon' src={twitterLogo}/>Twitter</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default About