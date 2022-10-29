import React from 'react'
import Navbar from './Navbar';
import slideDown from '../../images/icon-bg-vr.png';


export default function banner() {
    return (
        <header className='index'>
            <div data-aos="flip-right" class="
          w-100
          h-50
          d-flex
          flex-wrap
          justify-content-center
          align-content-center
          text-center text-white
        ">
            <Navbar/>
                <h1>Cutting edge automation for your business</h1>
                <p>Begin your growth journey</p>
                <div class="w-100">
                    <a href="contact.html" class="btn btn-primary btn-lg custom-button">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div class="slide-down">
                <a href="#two">
                    <img src={slideDown} alt="slideDown" />
                </a>
            </div>
        </header>
    )
}