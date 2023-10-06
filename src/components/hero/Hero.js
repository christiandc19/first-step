import React from 'react'
import './Hero.css'
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom'
// import { Link as LinkRoll } from 'react-scroll'




const Hero = () => {
    return (
<>        
<div className='hero'>
    <div className="hero-container">

        <div className="content">
                <Fade left>
                <h1>First Step Now</h1>
                </Fade>
                <Fade right>
                <h2>Creating stability in recovery.</h2>
                </Fade>
        </div>

    </div>
</div>
</>

    )
}

export default Hero