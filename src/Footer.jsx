import './Footer.css'

const Footer = () => {
    return(
        <div className="footer">
            <h3 className="global__label"></h3>
            <div className="footer__top">
                <div className="footer__links">
                    <h3 className="footer__links__item">Home</h3>
                    <h3 className="footer__links__item">Services</h3>
                    <h3 className="footer__links__item">Why us</h3>
                    <h3 className="footer__links__item">About us</h3>
                </div>
            </div>
            <div className="footer__body">
                <div className="footer__body__left">
                    <div className="footer__body__item">
                        <h3 className="footer__body__item__title">Our Offices</h3>
                        <h3 className="footer__body__item__item">Our Offices</h3>
                        <h3 className="footer__body__item__item">Our Offices</h3>
                        <h3 className="footer__body__item__item">Our Offices</h3>
                    </div>
                    <div className="footer__body__item">
                        <h3 className="footer__body__item__title">Contacts</h3>
                        <h3 className="footer__body__item__item">Contact</h3>
                        <h3 className="footer__body__item__item">Contact</h3>
                        <h3 className="footer__body__item__item">Contact</h3>
                    </div>
                </div>
                <div className="footer__body__right">
                    <div className="footer__body__item">
                        <h3 className="footer__body__item__title">We on Social Media</h3>
                        <div className="footer__body__right__socials">
                            <img src="/static/Facebook.png" alt="" />
                            <img src="/static/Twitter.png" alt="" />
                            <img src="/static/Linkedin.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className="footer__body__bottom">
                <h3 className="footer__body__bottom__text">
                    Dermedia 2023. All rights reserved
                </h3>
                <div className="footer__body__bottom__items">
                    <h3 className="footer__body__bottom__items__item">Cookies</h3>
                    <h3 className="footer__body__bottom__items__item">Privacy</h3>
                    <h3 className="footer__body__bottom__items__item">Terms</h3>
                </div>
            </div>

        </div>
    )
}
export default Footer