import React, { useEffect } from 'react';
import thomImage from '../../assets/images/thom.png';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faYoutube, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "../Footer/footer.css"
import "./about.css"

function About() {

  return (
    <section className="my-1 " style={{ textAlign: "center" }}>
      <h1 id="about">Nice to meet you! I'm Thom </h1>
      <div className="my-2">
        <p>
        My name is Thom Burt, originally from London, UK I now live in Indianapolis, USA. <br></br>
        I help designers, small agencies and businesses bring their ideas to reality, on-time and more importantly on-budget.<br></br>
        Powered by VS Code and English Breakfast Tea, you can be assured that your project is in the best hands with me.<br></br>
        Have an idea for a project? Please don't hesitate in reaching out to me, I'd love to work with you!
        </p>
        <img src={thomImage} className="my-2" style={{ width: "400px", margin: "10px" }} alt="tb-logo" />
      </div>
    </section>
  );
}

export default About;
