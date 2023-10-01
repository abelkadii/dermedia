import './Philosophy.css'

const Philosophy = () => {
    return(
        <div className="phylosophy">
            <h3 className="global__label">
                OUR PHILOSOPHY
            </h3>
            <div className="phylosophy__body">
                <div className="phylosophy__body__left">
                    <h3 className="phylosophy__body__left__title">About <br />Us</h3>
                    <p className="phylosophy__body__left__text">We are a small media agency composed of a team of passionate creatives and filmmakers that want to help small businesses and artists get their message out there.
                    <br />
                    <br />
                    At our digital design studio, we're passionate about creating beautiful, functional designs that help our clients achieve their goals. We've been in the business for years, and our team has the experience and expertise to tackle any project, big or small.</p>
                </div>
                <img src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1196&q=80" alt="" className="phylosophy__body__right" />
            </div>
        </div>
    )
}
export default Philosophy