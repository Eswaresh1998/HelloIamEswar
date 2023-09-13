import React from "react";
import eswar_img from "./Uiil/edited_pic.png"


const AboutMe =()=>{
    return(
    <div className="About_Me_section">
           
    <div className="About_Me_Info">
    <h2 className="section2-heading">About Me</h2>
    <div className="line"></div>
    </div>
    <div className="About_Me_content">
    <div className="about-div">
     <p className="about">
         Hi, my name is Karnati Eswaresh Sai .Highly skilled and motivated Frontend Engineer with 4+ years of hands-on experience in building dynamic and responsive web applications. Proficient in React.js, Javascript, HTML, and CSS, with a passion for creating intuitive and visually
         appealing user interfaces.
     </p>
    <p className="about">Adept at collaborating with cross-functional teams to deliver high-quality software solutions. Demonstrated ability to translate design mockups and wireframes into efficient, maintainable, and scalable code. Detailoriented with a strong focus on code
         quality, performance, and usability. Always eager to learn and stay up-to-date with the latest frontend technologies and best practices. Committed to delivering exceptional user experiences that align with business objectives.

     </p>
     <p className="about"> 
        Here are the few technologies that I work on :
     </p>
     </div>
     <img  className="eswar" src={eswar_img} /> 
    </div>
    <div className="skills">
     <div>
         <ul>
             <li>React</li>
             <li>Javascript</li>
             <li>tailwind css</li>
             <li>Github</li>
         </ul>
     </div>
    
     <div>
         <ul>
             <li>Unqork </li>
             <li>Digital 1st</li>
             <li>Service now nocoder </li>
             <li>Alteryx</li>
         </ul>
     </div>
    </div>
 </div>
)
}

export default AboutMe