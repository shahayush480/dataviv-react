import React from 'react'
import slideDown from '../../images/icon-bg-vr.png';
import Cuveebottom from '../designs/Cuveebottom';


export default function banner({page}) {
    return (
        <>
        <header className={page}>
            <div data-aos="flip-right" className="
          w-100
          h-50
          d-flex
          flex-wrap
          justify-content-center
          align-content-center
          text-center text-white
        ">
                <h1>Cutting edge automation for your business</h1>
                <p>Begin your growth journey</p>
                <div className="w-100">
                    <a href="contact.html" className="btn btn-primary btn-lg custom-button">
                        Get In Touch
                    </a>
                </div>
            </div>

            <div className="slide-down">
                <a href="#two">
                    <img src={slideDown} alt="slideDown" />
                </a>
            </div>
        </header>
        <Cuveebottom/>

        </>
    )
}
