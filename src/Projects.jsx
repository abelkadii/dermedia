import ProjectItem from './ProjectItem'
import './Projects.css'

const Projects = ()=>{
    return (
        <div className="projects">
            <h3 className="global__label">
                OUR PROJECTS
            </h3>
            <div className="projects__body">
                <ProjectItem id={'01'} name={'WEBSITES'} pic={'/static/img.png'} title="Real Estate" desc={'Real Estate Agancies \nsmall Busnisces'} />
                <ProjectItem id={'02'} name={'VIDEO'} text={'VIDEOS HERE'} title="Introductiton" desc={'A video introduction of the Real Estate Agancy'} />
                <ProjectItem id={'03'} name={'MOBILE APP'} text={'APPS HERE'} title="Management" desc={'Mobile app to manage the your real estate Busnisces'} />
            </div>
        </div>
    )
}

export default Projects