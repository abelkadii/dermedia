import './Contact.css'
import { useState } from 'react'

const Contact = () => {
    const [nameField, setNameField] = useState('')
    const [EMail, setEMail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [message, setMessage] = useState('')
    return(
        <div className="contact">
            <h3 className="global__label">
                CONTACT US
            </h3>
            <div className="contact__body">
                <h3 className="contact__body__left">
                    HAVE SOME
                    <br/>
                    QUESTIONS LEFT?
                </h3>
                <p className="contact__body__right">
                Fill in the form and our manager will contact you as soon as possible to discuss your projects
                </p>
            </div>
            <div className="contact__form">
                <div className="contact__form__input contact__form__input--full">
                    <h3 className="contact__form__input__label">Full Name</h3>
                    <input type="text" className="contact__form__input__field" value={nameField} onChange={e=>setNameField(e.target.value)}/>
                </div>
                <div className="contact__form__input__wrapper">
                    <div className="contact__form__input">
                        <h3 className="contact__form__input__label">E-Mail</h3>
                        <input type="text" className="contact__form__input__field" value={EMail} onChange={e=>setEMail(e.target.value)}/>
                    </div>
                    <div className="contact__form__input">
                        <h3 className="contact__form__input__label">Phone Number</h3>
                        <input type="text" className="contact__form__input__field" value={phoneNumber} onChange={e=>setPhoneNumber(e.target.value)}/>
                    </div>
                </div>
                <div className="contact__form__input contact__form__input--full">
                    <h3 className="contact__form__input__label">Message</h3>
                    <input type="text" className="contact__form__input__field" value={message} onChange={e=>setMessage(e.target.value)}/>
                </div>
                    <h3 className="contact__form__input__button">
                        Contact Us
                    </h3>
            </div>
        </div>
    )
}

export default Contact