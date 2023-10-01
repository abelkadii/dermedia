import './Services.css'
import { useState } from 'react'

const Services = () => {
    const [showWebsites, setShowWebsites] = useState(true)
    const [showVideo, setShowVideo] = useState(false)
    const [showMobile, setShowMobile] = useState(false)
    return(
        <div className="Services">
            <h3 className="global__label">
                SERVICES
            </h3>
            <div className="Services__body">
                <div className="Services__body__left">
                    <img src="/static/MacBook Pro 16.png" alt="" className="Services__body__left__image" />
                </div>
                <div className="Services__body__items">
                    <div className="Services__body__items__item">
                        <img src="/static/Star.png" />
                    
                        <div className="Services__body__items__item__cavas">
                            <div className="Services__body__items__item__cavas__top" onClick={()=>setShowWebsites(!showWebsites)}>
                                <h3>WEBSITES</h3>
                                <img src="/static/Arrow.png" alt="" style={{transform: `rotate(${showWebsites?'180deg':'0'})`}}/>
                            </div>
                            <div className={`Services__body__items__item__cavas__description ${showWebsites?'Services__body__items__item__cavas__description--show':''}`}>
                                Real Estate Agancies
                                <br />
                                small Busnisces
                            </div>
                        </div>
                    </div>
                    <div className="Services__body__items__item">
                        <img src="/static/Star.png" />
                    
                        <div className="Services__body__items__item__cavas">
                            <div className="Services__body__items__item__cavas__top" onClick={()=>setShowVideo(!showVideo)}>
                                <h3>VIDEO</h3>
                                <img src="/static/Arrow.png" alt="" style={{transform: `rotate(${showVideo?'180deg':'0'})`}}/>
                            </div>
                            <div className={`Services__body__items__item__cavas__description ${showVideo?'Services__body__items__item__cavas__description--show':''}`}>
                                A video introduction of the Real Estate Agancy
                            </div>
                        </div>
                        </div>
                        <div className="Services__body__items__item">
                        <img src="/static/Star.png" />
                    
                        <div className="Services__body__items__item__cavas">
                            <div className="Services__body__items__item__cavas__top" onClick={()=>setShowMobile(!showMobile)}>
                                <h3>MOBILE APPS</h3>
                                <img src="/static/Arrow.png" alt="" style={{transform: `rotate(${showMobile?'180deg':'0'})`}}/>
                            </div>
                            <div className={`Services__body__items__item__cavas__description ${showMobile?'Services__body__items__item__cavas__description--show':''}`}>
                                Mobile app to manage the your real estate Busnisces
                            </div>
                        </div>
                    </div>
                    <h3 className="Services__body__items__button">
                        Create A Project
                    </h3>
                </div>


            </div>
            <div className="serveces__text">
                <h3 className="serveces__text__left">
                    WHAT
                    <br/>
                    WE OFFER
                </h3>
                <p className="serveces__text__right">
                    At our studio, we're dedicated to staying on top of the latest
                    trends and technologies. We believe in continuous learning
                    and improvement, and we're always exploring new ways
                    to push the boundaries of digital design . With our focus
                    on simplicity, innovation, and compromise , we're confident that
                    we can deliver the best possible results for our clients.
                </p>
            </div>
        </div>
    )
}
export default Services