import './Whyus.css'

const Whyus = () => {
    return(
        <div className="whyus">
            <h3 className="global__label">
                WHY US
            </h3>
            <div className="whyus__body">
                <h3 className="whyus__body__left">
                    THE TEAM OF
                    <br/>
                    PROFESSIONALS
                </h3>
                <p className="whyus__body__right">
                At our digital design studio, we understand that you want a hassle-free experience when it comes to bringing your ideas to life. That's why we prioritize simplicity in everything we do. Our goal is to create a seamless process that results in a product that perfectly aligns with your vision.
                </p>
            </div>
            <div className="whyus__team__items">
                <div className="whyus__team__items__item">
                    <img src="/static/Lightning.png" />
                    <div className="whyus__team__items__item__cavas">
                        <div className="whyus__team__items__item__cavas__top">
                            <h3>SIMPLICITY</h3>
                        </div>
                        <div className='whyus__team__items__item__cavas__description'>
                        No headaches, we prioritize a hassle-free experience, delivering the product as you describe.
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyus__team__items">
                <div className="whyus__team__items__item">
                    <img src="/static/Lightning.png" />
                    <div className="whyus__team__items__item__cavas">
                        <div className="whyus__team__items__item__cavas__top">
                            <h3>INNOVATION</h3>
                        </div>
                        <div className='whyus__team__items__item__cavas__description'>
                        We incorporate cutting-edge tools like AI to provide the best, fastest, and most efficient results for our clients.
                        </div>
                    </div>
                </div>
            </div>
            <div className="whyus__team__items">
                <div className="whyus__team__items__item">
                    <img src="/static/Inovation.png" className="inno" />
                    <div className="whyus__team__items__item__cavas">
                        <div className="whyus__team__items__item__cavas__top">
                            <h3>COMPROMISE</h3>
                        </div>
                        <div className='whyus__team__items__item__cavas__description'>
                        We stand behind our work and offer a unique compromise - if we don't deliver the agreed result, you don't pay.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Whyus