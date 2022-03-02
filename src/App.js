import React from "react";
import './App.css';
import headerImage from './Images/icon.png'

function App(){

  return(
    <div className="app">

      <div className="header">
          <img src={headerImage} className="headerImage"/>
          <span className="headerText" style={{width:'166px', height:'48px', left:'126px', top:'56px'}}>
          Home
          </span>

          <span className="headerText" style={{width:'122px', height:'48px', left:'252px', top:'57px'}}>
          Services
          </span>

          <span className="headerText" style={{width:'120px', height:'48px', left:'426px', top:'58px'}}>
          The Team
          </span>

          <span className="headerText" style={{width:'114px', height:'48px', left:'617px', top:'58px'}}>
          Insurance
          </span>

          <span className="headerText" style={{width:'166px', height:'48px', left:'802px', top:'56px'}}>
          Your Location
          </span>

          <div className="searchBar">
            
          </div>
      </div>

      

      <div className="Rec2">
      <span className="Rec2Text" style={{width:'220px', height:'624px', left:'45px', top:'80px'}}>
        WE WANT YOU TO SEE WHAT WE SEE
      </span>
      </div>

      <div className="Rec1">

      </div>

      <div className="break">
        
      </div>

      <div className="body">
        OUR STORY
        
      </div>

      <div className="filler">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      <div className="Rec3">

      </div>

      <div className="quote">
        "Enter quote here"
      </div>

      <div className="break2">
        
      </div>

      <div className="bottomHeader">
          
          <span className="bottomHeaderText" style={{width:'146px', height:'48px', left:'421px', top:'2584px'}}>
          Contact Us
          </span>

          <span className="bottomHeaderText" style={{width:'130px', height:'40px', left:'652px', top:'2588px'}}>
          Language
          </span>

          <span className="bottomHeaderText" style={{width:'103px', height:'48px', left:'867px', top:'2588px'}}>
          Terms
          </span>

      </div>

    </div>
  );
} 

export default App;

/*
<Tweet name="Ed" message="yo" likes="3"/>
      <Tweet name="John" message="sup" likes="5"/>
      <Tweet name="Winter" message="whatup" likes="33"/>
      <Tweet name="Mosh" message="hi" likes="1"/>
*/