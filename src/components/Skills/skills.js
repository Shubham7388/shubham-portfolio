import React from 'react';
import './Skills.css';
import Uidesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
      <span className='skillsTitle'>What I do</span>
      <span className="skillsDesc">A web developer is a technical professional who builds and maintains websites and web applications.A Software Developer is a professional who is charged with designing and coding software for businesses and consumers alike. They work closely with clients to determine what they need, then use programming languages like Java or C++ to create programs. </span>
      <div className="skillsBars">
        <div className="skillbar">
          <img src={Uidesign} alt="Uidesign" className='skillBarImg' />
          <div className="skillsBarText">
            <h2>UI/UX Design</h2>
            <p>This demo test can be changed according to user need</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
          <div className="skillsBarText">
            <h2>Web Design</h2>
            <p>This is demo test, you can write your own content here</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
          <div className="skillsBarText">
            <h2>App Design</h2>
            <p>You can write text related to mobile app development</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills