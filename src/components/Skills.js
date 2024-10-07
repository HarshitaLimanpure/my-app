import React from "react";

const Skills = () => {
  return (
    <>
     <div className="flex shadow flex-col  px-16 pt-20  pb-12 items-center  section" id="skills">
     <div className="head flex justify-center  ">
        <h2 className="text-4xl p-5 color pb-16">Skills</h2>
      </div>
      <div className="box  flex flex-row px-6  gap-5  ">
        <div className="skilldata w-3/4 px-12 pt-7  flex flex-row  justify-start ">
          <p className="  font ">
          
          As a front-end developer, I’ve built expertise in creating responsive, interactive web applications using HTML, CSS, React JS, and JavaScript. My foundation in C enhances my problem-solving abilities, while SQL and PL/SQL skills aid in effective data handling. I’m proficient with libraries like jQuery and Bootstrap for cross-browser functionality, and I use Git and GitHub for version control to manage projects efficiently. Tools like Sublime Text and VS Code streamline my workflow, while third-party libraries like SweetAlert and Crypto JS enhance user experiences. I stay updated with the latest technologies to deliver top-quality web solutions.
          </p>
        </div>

        <div className="icon  flex flex-col ">
          <div className="icons sd ">
            <img src="./images/c.png" alt="" className="png" />
            <img src="./images/c++.png" alt="" className="png" />
            <img src="./images/css.png" alt="" className="png" />
            <img src="./images/git.png" alt="" className="png" />
            <img src="./images/github.png" alt="" className="png" />
            <img src="./images/html.png" alt="" className="png" />
            <img src="./images/js.png" alt="" className="png" />
            <img src="./images/jquery.png" alt="" className="png h-8" />
            <img src="./images/tailwind.png" alt="" className="png" />
            <img src="./images/bootstrap.png" alt="" className="png" />
            <img src="./images/react.png" alt="" className="png" />
            <img src="./images/firebase.png" alt="" className="png" />
            <img src="./images/sublime.png" alt="" className="png" />
            <img src="./images/vs.png" alt="" className="png" />
            <img src="./images/sql.png" alt="" className="png" />
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Skills;
