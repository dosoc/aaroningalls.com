import React from 'react'

const reactLogo = 'https://cdn-icons-png.flaticon.com/512/1126/1126012.png'
const htmlLogo = 'https://cdn-icons-png.flaticon.com/512/5968/5968267.png'
const cssLogo = 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png'
const jsLogo = 'https://cdn-icons.flaticon.com/png/512/721/premium/721671.png?token=exp=1661174867~hmac=c3be1f2cf8687382fcd30d034a2aecac'
const nodeLogo = 'https://cdn-icons-png.flaticon.com/512/5968/5968322.png'
const profile = 'https://media-exp1.licdn.com/dms/image/C4E03AQEod_ht9eOMAw/profile-displayphoto-shrink_400_400/0/1651763157454?e=1666828800&v=beta&t=rHMp3cktgujGBGzIA-MJ2SWaFLGHN-uviDY_S6UAfns'


const Profile = () => {
    return (
        <div className='container home'>
            <div>
                <img className='profile-pic' src={profile}/>
            </div>
            <div className='profile'>
                <h2>Aaron Ingalls</h2>
                <p>Full Stack Web | Software Engineer</p>
            </div>
            <div>
                <ul className='skills'>
                    <li><img src={reactLogo} className='icon' />React.js</li>
                    <li><img src={nodeLogo} className='icon' />Node.js</li>
                    <li><img src={htmlLogo} className='icon'/>HTML</li>
                    <li><img src={cssLogo} className='icon'/>CSS</li>
                    <li><img src={jsLogo} className='icon'/>JavaScriptt</li>
                </ul>
            </div>
        </div>
    )
}

export default Profile