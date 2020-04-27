import React, { Component }  from 'react';

class Intro extends Component{
    render(){ 
        const {icon,introEmphasis, introTitle, content } = this.props;
        //const content = this.props.content; 
        return (
            <div className="introContent"> 
              <i className={icon}></i> 
              <p className="introTitle"><emphasis className="emphContent">{introEmphasis}</emphasis> {introTitle}</p> 
              <p className="contentText">{content} </p>       
              <input type="button" value="READ MORE" className="introButton"></input>
          </div> 
        );
    } 
} 
export default Intro;    