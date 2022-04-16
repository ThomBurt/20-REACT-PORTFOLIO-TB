import React from 'react';
// import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Nice to meet you!</h1>
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        <p>
        My name is Thom Burt, originally from London, UK I now live in Indianapolis, USA. <br></br>
        I help designers, small agencies and businesses bring their ideas to reality, on-time and more importantly on-budget.<br></br>
        Powered by VS Code and English Breakfast Tea, you can be assured that your project is in the best hands with me.<br></br>
        Have an idea for a project? Please don't hesitate in reaching out to me, I'd love to work with you!
        </p>
      </div>
    </section>
  );
}

export default About;
