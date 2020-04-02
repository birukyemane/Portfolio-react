import React, { Component }  from 'react';
import bg from '../assets/Header-img.png'

class Header extends Component{
    render(){        
        return (<header>
            <div id="headerContainer" className="autoMargin80perc">
                <img src={bg} alt="desktop laptop and tablet" id="headerImg" />
                <div id="headerText">
                  <h1 id="headerTitle"><emphasis className="header">POWERFULLY SIMPLE</emphasis> WITH A <br /><emphasis className="header">SQUEEKY CLEAN</emphasis> DESIGN.</h1>
                  <br />
                  <small>Find out how you can offer quick and powerful <br />solutions to your customers now.</small> <br />
                  <br />
                  <input id="learnMore" type="button" value="LEARN MORE" />       
                </div> 
            </div>
            
            <div className="blueHeader autoMargin80perc">
              <h2 className="blueTitle">CREATE A <emphasis className="header">POWERFUL</emphasis> SOLUTION NOW!</h2>
              <input className="blueButton" type="button" value="GET STARTED" />
            </div>
          </header>
        );
    }
}
export default Header;