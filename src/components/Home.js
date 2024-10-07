import React from "react";

const Home = () => {
  return (
    <>
      <div
        className="  shadow main bg-cover bg-no-repeat  text-white  flex flex-row   items-center justify-center h-screen w-screen"
        id="home"
        style={{ backgroundImage: "url('./images/source.gif')" }}
      >
        <div className="one  h-96 w-1/2  flex flex-col justify-center items-center p-9">
          <div>
            {" "}
            <h3 className="text-2xl">Hello, I am </h3>
            <h1 className="text-6xl"> Harshita Limanpure</h1>
            <h2 className="text-5xl">Web Developer</h2>
            <p className="font">
              Web Developer with a passion for creating responsive and dynamic
              web experiences
            </p>
          </div>
        </div>
        <div className="two w-1/2 flex justify-center items-center">
          <img
            src="/images/designer.png"
            alt=""
            className="w-1/2 rounded-full border-4 border-white"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
