import React from 'react'

const About = () => {
  return (

    <>
    <div className="about shadow flex flex-col section px-16 pt-20  pb-12 justify-center items-center" id='about'>
        <div className="heading flex justify-center color items-center text-3xl p-10"><h2>About Me</h2></div>
        <div className=" aboutdiv flex flex-row ">
            <div className="img w-1/2 flex justify-center items-center">
                <img src="./images/designer.png" alt=""  className='rounded-full  border-4  sd w-1/2'/>
            </div>
            <div className="details w-1/2 p-12 sd flex flex-col items-center ">
               <div className=''> <h1 className='text-2xl'>Hello !</h1>
               <p className='font'> I’m Harshita Limanpure, a passionate web developer specializing in front-end technologies. With a solid foundation in HTML, CSS, and React, I enjoy creating engaging, user-friendly web applications that deliver a seamless experience. I hold a B.Tech in Information Technology from Shri G.S. Institute of Technology and Science, where I honed my skills and deepened my interest in web development. I take pride in bringing ideas to life through responsive designs and interactive features. Continuously learning and adapting to new industry trends, I approach each project with creativity and attention to detail. In my spare time, I enjoy exploring the latest web development trends and working on personal projects that challenge my skills and expand my knowledge.</p></div>
            </div>
        </div>
    </div>
    </>
)
}

export default About