import React from 'react'

const Project = (props) => {
  return (

    <>
    <div className='project flex flex-row px-16 w-screen '>

        <div className="content w-3/4 px-12 pt-7  h-auto">
            <a href={props.a} target='_blank'><h2 className='text-2xl color'>{props.name}</h2></a>
            <p className='  font'>{props.content}</p>
        </div>
        <div className="pimage ">
            <a href={props.a} target='_blank' className='flex flex-col justify-center click .size '><img src={props.src} alt=""  className=' sd size rounded-md  '/></a>
        </div>
    </div>
    </>
)
}

export default Project