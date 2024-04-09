import React from 'react'
import './intro.css'
import {Link} from 'react-scroll'
import imgBtn from '../../assets/hireme.png'
import proImg from '../../assets/dummypro.jpg'

const Intro = () => {
  return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Shubham</span><br />Web Developer</span>
                <p className="introPara">I am a skilled web developer with knowledge of html css javascript and react</p>
                <Link><button className="btn"><img src={imgBtn} alt="imgBtn" className='btnImg' />Hire me</button></Link>
            </div>
            <img src={proImg} alt="proImg" className='bg' />
        </section>
    )
}

export default Intro