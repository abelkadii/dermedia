import './ProjectItem.css'
import { useState } from 'react'

const ProjectItem = ({id, name, pic, text, title, desc}) => {
    const [canvas, setCanvas] = useState(0)
    return (
        <div className="projectitem">
            <h3 className="projectitem__name">
                {id}/<span>{name}</span>
            </h3>
            <div className="projectitem__canvas" >
                <div className="projectitem__canvas__arrow" style={{left: '0'}} onClick={()=>{canvas>0&&setCanvas(canvas-1)}}><img src="/static/CanvasArrow.png" style={{transform: 'rotate(180deg)'}}/></div>
                <div className="projectitem__canvas__arrow" style={{right: '0'}} onClick={()=>{canvas<1&&setCanvas(canvas+1)}}><img src="/static/CanvasArrow.png" /></div>
                <div className="projectitem__canvas__container" style={{transform: `translateX(${-canvas*50}%)`}}>
                    {pic?<div className="projectitem__canvas__container__item"><img src={pic}/></div>:<div className="projectitem__canvas__container__item"><p>{text}</p></div>}
                    {pic?<div className="projectitem__canvas__container__item"><img src={pic}/></div>:<div className="projectitem__canvas__container__item"><p>{text}</p></div>}
                </div>
            </div>
            <h3 className="project__item__title">
                {title}
            </h3>
            <h3 className="project__item__desc">
                {desc}
            </h3>
        </div>
    )
}
export default ProjectItem