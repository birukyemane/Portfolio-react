import React from 'react';
import img from '../assets/img-placeholder.png';

const RecentWork = (props) => {
    return(
    <div className="recentContent">
        <img className="recent" src={img} alt=""/>
        <div className="recent">
            <h3 className="recentTitle">{props.title}</h3>
            <p>{props.content}</p>
        </div> 
    </div>  
    );
}
export default RecentWork;    