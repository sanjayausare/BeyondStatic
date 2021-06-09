import React from 'react';
import './DetailsCard.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faDiscord,
    faYoutube,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
const Card = (props) => {
    return (
        <div className="card-container">
            <div className="head">
                <img src={"../images/profile/" + props.img + ".svg"} alt="" />
                <div>{props.title}</div>
                <h1 className="name">{props.name}</h1>
            </div>
            <div className="card-content">
                <p>
                   {props.content}
                </p>
                <nav className="social">
                    <a target="_blank" href={props.linkedin}><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                    <a target="_blank" href={props.github}><FontAwesomeIcon icon={faGithub} size="2x"/></a>
                    <a target="_blank" href={props.discord}><FontAwesomeIcon icon={faDiscord} size="2x"/></a>
                    <a target="_blank" href={props.youtube}><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                    <a target="_blank" href={props.twitter}><FontAwesomeIcon icon={faTwitter} size="2x"/></a>

                </nav>
            </div>
        </div>
    ); 
}

export default Card