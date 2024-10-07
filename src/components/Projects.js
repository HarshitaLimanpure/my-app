import React from 'react'
import Project from './Project'

const Projects = () => {
  return (

<>
    <div className=' flex shadow  px-16 pt-20  pb-12 flex-col  justify-center items-center gap-5 w-screen' id='projects'>
        <h2 className='text-4xl py-10 color'>Projects</h2>
        <Project name="Climate Craze" src="./images/weather.png"  a="https://lambent-phoenix-eedb2b.netlify.app" content="Climate Craze is a real-time weather app using APIs to display current conditions and forecasts. Built with HTML, CSS, JavaScript, jQuery, and Bootstrap, it highlights my skills in API integration and creating responsive, dynamic user experiences."/>
        <Project name="Employee Portal" src="./images/emp.png"  a="https://employeemanageportal.netlify.app" content="The Employee Portal is a management system for handling employee data with seamless CRUD operations. Built with HTML, CSS, JavaScript, jQuery, and Bootstrap, it integrates SweetAlert and Crypto JS for security, showcasing my skills in developing efficient, interactive data management solutions."/>
        <Project name="NewsWave360" src="./images/news.png"  a="https://newswave360.netlify.app" content="NewsWave360 is a real-time news app fetching updates across categories like sports, politics, and entertainment via APIs. Built with HTML, CSS, JavaScript, jQuery, and Bootstrap, it highlights my skills in API integration and creating responsive, dynamic user interfaces."/>
    </div>
</>
)
}

export default Projects