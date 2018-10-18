import React from 'react';

const Testimonal = (props) => {
    return(
    <div className="testimonals">
        <h3 className="recentTitle">{props.title}</h3>
        <p>{props.content}</p>
    </div>
    );
}
export default Testimonal;