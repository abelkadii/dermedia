import React, { useState } from 'react';

import './Home.css'

const Home = () => {
    const sleep = ms => new Promise(
        resolve => setTimeout(resolve, ms)
      );
    const [dropDown, setDropDown] = useState(false)
    return(
        <div className="Home">
            
            <div className="navbar">
                <h3 className="navbar__logo">Dermedia</h3>
                <div className="navbar__links">
                    <h3 className="navbar__links__item">Home</h3>
                    <h3 className="navbar__links__item">Services</h3>
                    <h3 className="navbar__links__item">Why us</h3>
                    <h3 className="navbar__links__item">About us</h3>
                </div>
                <h3 className="navbar__contact">
                    Contact us
                </h3>
                <div className={`navabr__burger ${dropDown?'navabr__burger-active':''}`} onClick={async ()=>{
                if(dropDown){
                    let ele = document.getElementById('nav-drop')
                    ele.classList.add('leave-animation')
                    await sleep(200)
                    setDropDown(!dropDown)
                    ele.classList.remove('leave-animation')
                }
                else{
                    setDropDown(!dropDown)
                }
                
                }}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`navbar__dropdown ${dropDown?'navbar__dropdown-active':''}`} id="nav-drop">
                    <h3 className="navbar__dropdown__item navbar__dropdown__item-active">Home</h3>
                    <h3 className="navbar__dropdown__item">Services</h3>
                    <h3 className="navbar__dropdown__item">Why us</h3>
                    <h3 className="navbar__dropdown__item">About us</h3>
                    <h3 className="navbar__dropdown__item navbar__dropdown__item-sign">Contact</h3>
                </div>
            </div>


            <div className="home__body">
                <h3 className="home__body__title">
                    Dermedia
                </h3>
                <h4 className="home__body__description">
                    Show the best of your brand
                </h4>
                <h3 className="home__body__button">
                    Get A Consultation
                </h3>
            </div>

        </div>
    )
}

export default Home