import React from 'react'
import sky from './sky.jpg'
import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from "react-hook-form"

const Contact = () => {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  return (
    <div className='mt-20 h-[650px]'
      style={{
        backgroundImage: `url(${sky})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px', // Adjust height as needed
      }} id='contact'>
      <div className='text-6xl text-white text-center font-semibold font-satoshi italic'>
        CONTACT
        <form action="https://getform.io/f/awnnqdjb" method="POST">
          <div className='text-base mt-4 flex flex-col justify-center items-center gap-4'>
            <input className='mt-1 p-3 rounded-3xl w-1/3 bg-[black] text-white border-soild border-2 border-white placeholder:text-white'  placeholder='Enter Name' type='text' name='Name'/>
           
            <input className='mt-1 p-3 rounded-3xl w-1/3 bg-[black] text-white border-soild border-2 border-white placeholder:text-white' placeholder='Enter Email' type='email' name='Email'/>
            <input className='mt-1 p-3 rounded-3xl w-1/3 bg-[black] text-white border-soild border-2 border-white placeholder:text-white'  placeholder='Enter number' type='text' name='Number'/>
            <textarea id="w3review" name="text" rows="4" cols="59.5" className='rounded-3xl mt-1 bg-[black] text-white p-3 border-soild border-2 border-white placeholder:text-white' placeholder='Message'></textarea>
            <button className='rounded-3xl text-base bg-black  text-white pt-3 pb-3 pl-6 pr-6 hover:bg-[#327481] hover:text-white mr-[415px] mt-1 border-soild border-2 border-white' type='submit'>Submit</button>
          </div>
        </form>
      </div>
      <div className=' mt-24 flex w-[25rem] ml-[31rem] justify-around font-satoshi text-white text-lg font-medium items-center'>
        <div className='hover:underline'><a href='https://www.linkedin.com/in/sidruhela/' target="_blank" rel="noopener noreferrer"><p className=''>Linkedin</p></a></div>
        <div className='hover:underline'><p onClick={() => window.location.href = 'mailto:sidruhela21@gmail.com'}> <a href='https://www.linkedin.com/in/sidruhela/' target="_blank" rel="noopener noreferrer">Mail</a></p></div>
        <Link to="/myinfo"><div className='hover:underline'><button className='rounded-3xl p-2 bg-black text- white border-soild border-2 border-white hover:bg-[#327481]'>Contact info</button></div></Link>
      </div>
    </div>
  )
}

export default Contact