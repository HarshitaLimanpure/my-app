import React from 'react'

const Contact = () => {



  return (
<>
<div className='flex shadow flex-col px-16 pt-20  pb-12 justify-center items-center gap-10 section' id='contact'>
<h2 className='text-4xl color'>Contact Me</h2>
<div className="contact flex flex-row justify-center items-center ">
  <div className="left w-3/4  pt-7 flex  flex-col font justify-center px-12 h-full">
    <p>I’m currently seeking front-end development opportunities and would love to connect. If you have any questions or would like to discuss potential roles, please fill out the form  or reach out directly via email at harshita.limanpure342001@gmail.com. I’m excited to explore how I can contribute to your team and bring value to your projects.</p>

  <div className="touch flex gap-2 h-10">
    <a href="https://www.linkedin.com/in/harshita-limanpure007/"target="_blank" className=''> <img src="./images/link.png" alt="" /></a>
    <a href="mailto:harshita.limanpure342001@gmail.com" target="_blank"> <img src="./images/gmail.png" alt="" /></a>
    <a href="https://github.com/HarshitaLimanpure" target="_blank"> <img src="./images/hub.png" alt="" /></a>
    <a href="https://wa.me/16265904289" target="_blank"> <img src="./images/whatsapp.jpeg" alt="" /></a>

  </div>
  </div>
  <div className="right w-1/2 flex flex-col justify-center items-center h-full"  >
    <form   action="https://formspree.io/f/xdknqrar"
  method="POST" className='flex flex-col user'>
      <p>Name</p>
      <input type="text" name='name' placeholder='Enter Your Full Name' required />
      <p>Email</p>
      <input type="email" name='email' placeholder='Enter Your Email ID' required />
      <p>Message</p>
      <textarea name="message" id="" placeholder='Message'></textarea>
      <button type='submit'>SUBMIT</button>
    </form>
  </div>
</div>
</div>
</>
)
}

export default Contact