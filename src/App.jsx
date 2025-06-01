import { useState } from 'react';

import './App.css';

import MyProjects from '../src/components/MyProjects';
import AboutMe from '../src/components/AboutMe';

import { LuGitCompare } from "react-icons/lu";
import { BiJoystick } from "react-icons/bi";
import { RiStickyNoteAddLine } from "react-icons/ri";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [myProjects, setMyProjects] = useState('-1000px');
  const [aboutMe, setAboutMe] = useState('0')

  return (
    <div className="container">
      <div className="nav">
        <h2>
          <LuGitCompare style={{ fontSize: '32px', marginRight: '10px' }} />
          <p>Jakthi Dyo Eliandi Putra</p>
        </h2>
        <div className="h3">
          <h3 onClick={() => setAboutMe('1')}>About me</h3>
          <h3 onClick={() => setMyProjects('0')}>My Projects</h3>
        </div>
      </div>

      <div className="spline">
{/*         <spline-viewer url="https://prod.spline.design/bGFywlYV8zlhOz1f/scene.splinecode"></spline-viewer> */}
      </div>

      <MyProjects myProjects={myProjects} setMyProjects={setMyProjects} />

      <AboutMe aboutMe={aboutMe} setAboutMe={setAboutMe} />

      <div className="hover">
        {isHovered2 && <BiJoystick className='joystick' />}

        {isHovered && <RiStickyNoteAddLine className='note' />}
      </div>

      <footer>
        <a className='linkedin' href="https://www.linkedin.com/in/jakthi-eliandi/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          linkedin.com
        </a>
        <a className='github' href="https://github.com/jakthi"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        >
          GitHub
        </a>
      </footer>
    </div>
  )
}

export default App
