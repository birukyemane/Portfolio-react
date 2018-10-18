import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import RecentWork from './components/RecentWork';
import Testimonal from './components/Testimonal';


class App extends Component {
  render() {
    let introContent = [{introTitle:"superbly",introEmphasis:"Responisve",content:"är en utfyllnadstext från tryck- och förlagsindustrin"},
    {introTitle:"superbly",introEmphasis:"Responisve",content:"är en utfyllnadstext från tryck- och förlagsindustrin."},
    {introTitle:"superbly",introEmphasis:"Responisve",content:"är en utfyllnadstext från tryck- och förlagsindustrin"},
    {introTitle:"superbly",introEmphasis:"Responisve",content:"är en utfyllnadstext från tryck- och förlagsindustrin."},
  ];

  let recentWorks = [
    {title:"Blog title", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
    {title:"Blog title", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
    {title:"Blog title", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
    
  ];

  let testimonals = [
    {title:"Jhon Smith", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
    {title:"Jhon Smith", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
    {title:"Jhon Smith", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
    {title:"Jhon Smith", content:"Det är ett välkänt faktum att läsare distraheras av läsbar text på enyouten."},
  ];

    return (    
      <div>
        <Header />
        <section id="intoSection">
        {introContent.map((e,i)=> <Intro key={i} content={e.content} introTitle={e.introTitle} introEmphasis={e.introEmphasis}/>)}         
        </section>
        <section id="recentWork">
        {recentWorks.map((e,i)=> <RecentWork key={i} content={e.content} title={e.title}/>)}
        </section>
      <div id="borderTestimonyDev">
        <div class="borderTestim">
            <h4 class="borderTitle">RECENT WORK</h4> 
        </div>
        <div class="borderDev">
            <h4 class="borderTitleDev">DEVELOPMENT</h4> 
        </div>
      </div>

        <section id="testimonalDev">
          <section id="testimonalContent">
            {testimonals.map((e,i)=> <Testimonal key={i} content={e.content} title={e.title}/>)}
          </section>
          <section id="development">
            <input className="tabButton" type="button" value="DESIGN"/>
            <input className="tabButtonDeactive" type="button" value="PRODUCTION"/>
            <div className="deveContent">
              <h3 className="recentTitle">The Design</h3>
              <p>I motsättning till vad många tror, är inte Lorem
              tror, är inte  tror, är inte  tror, är inte  tror, är inte  tror, är inte  tror, är inte 
              </p>
            <input type="button" value="READ MORE" className="introButton" id="deveButton"/>
            </div>          
          </section>  
        </section>
        <div class="blueHeader autoMargin80perc">
          <h2 class="blueTitle">GET IN TOUCH WITH US <emphasis class="header">NOW!</emphasis></h2>
          <input class="blueButton" type="button" value="CONTACT US"/>
      </div> 
      <footer>
        <div id="footerHolder">
          <div class="footerContent">
            <h3 class="recentTitle">AbOUT US</h3>
            <p>er ett normalt ordflöde, till skillnad från "Text här,
              Text här", och ger intryck av att vara läsbar text. Många
                publiseringprogram och webbutvecklare</p>
          </div>
          <div class="footerContent">
              <h3 class="recentTitle">LATEST TWEETS</h3>
              <p>er ett normalt ordflöde, till skillnad från "Text här,
                Text här", och ger intryck av att vara läsbar text. Många
                  publiseringprogram och webbutvecklare</p>
          </div>
          <div class="footerContent">
              <h3 class="recentTitle">LATEST POSTS</h3>
              <p>er ett normalt ordflöde, till skillnad från "Text här,
                Text här", och ger intryck av att vara läsbar text. Många
                  publiseringprogram och webbutvecklare</p>
          </div>
          <div class="footerContent">
              <h3 class="recentTitle">FLICKER</h3>
              <p>er ett normalt ordflöde, till skillnad från "Text här,
                Text här", och ger intryck av att vara läsbar text. Många
                  publiseringprogram och webbutvecklare</p>
          </div>
      </div>
        <div id="copyright">
          <section >
              <p>copy right</p>
              <i class="fa fa-twitter-square"></i>
          </section>        
        </div>
      </footer>
    </div>      
    );
  }
}

export default App;
