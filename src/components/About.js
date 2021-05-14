import { useState } from "react";
import LinkIconList from "./LinkIconList";

const About = () => {
  const [social, setSocial]=useState([
    {
      href: "https://www.linkedin.com/in/vicwilton-dayag-algorithm-b53486153/",
      icon: "fab fa-linkedin-in"
    },
    {
      href: "https://github.com/prgrmmrthz",
      icon: "fab fa-github"
    },
    {
      href: "https://www.facebook.com/vicgr8/",
      icon: "fab fa-facebook-f"
    },
  ]);
  return (
    <section className="resume-section" id="about">
      <div className="resume-section-content">
        <h1 className="mb-0">
          Vicwilton Dayag
          <span className="text-primary"> Salmero</span>
        </h1>
        <div className="subheading mb-5">
          Auditing St. Tandang Sora Quezon City · (+63) 9978629182 ·
          <a href="mailto:vic.wilton18@gmail.com">vic.wilton18@gmail.com</a>
        </div>
        <p className="lead mb-5">
          I am experienced in leveraging agile frameworks to provide a robust
          synopsis for high level overviews. Iterative approaches to corporate
          strategy foster collaborative thinking to further the overall value
          proposition.
        </p>
        <LinkIconList dataList={social} />
      </div>
    </section>
  );
};

export default About;
