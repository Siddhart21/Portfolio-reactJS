import React from 'react'
import ilus from './sid.jpeg';

const Myinfo = () => {
  return (
    <div className='' >
      <div className='mx-auto w-[430px]  mt-24 border-solid border-[2px] border-[#00000022] bg-[#f3f0f0]'>
        <div className='bg-[#2b3ff3dd] w-[430x] h-[131px] relative'>
          <div className='absolute bg-red-300  ml-[120px] -bottom-[82px] w-[186px] h-[179px] rounded-full'>
          <img src={ilus} className='w-full rounded-full' alt="img" />
          </div>
        </div>
        <div className='font-style'><p className='font-style font-semibold text-4xl  mt-[100px] text-center'>Siddharth Ruhela</p></div>
        <div className=' flex justify-around w-2/3 ml-[80PX] mt-5'>
        <a href='' target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" className='w-[40px] h-[40px] transform transition-transform duration-200 hover:scale-125' alt="Oracle" /></a>
        <a href='https://www.linkedin.com/in/sidruhela/' target="_blank" rel="noopener noreferrer"><img src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000" className='w-[40px] h-[40px] transform transition-transform duration-200 hover:scale-125' alt="Oracle" /></a>
          <img src="https://img.icons8.com/?size=100&id=96403&format=png&color=000000" className='w-[40px] h-[40px] transform transition-transform duration-200 hover:scale-125' alt="Oracle" />
        </div>
        <div className='text-center font-satoshi mt-7'>
          <img src="https://img.icons8.com/?size=100&id=96403&format=png&color=000000" className='w-[20px] h-[20px] inline-block mr-3 mb-1' alt="Oracle" />91+ 7291876776
        </div>
        <hr className='w-[400px] bg-[#000000] m-auto mt-2 h-[2.5px]'></hr>
        <div className='text-center font-satoshi mt-3'>
          <img src="https://img.icons8.com/?size=100&id=19408&format=png&color=000000" className='w-[20px] h-[20px] inline-block mr-3 mb-1' alt="Oracle" />sidruhela21@gmail.com
        </div>
        <hr className='w-[400px] bg-black m-auto mt-2 h-[2.5px]'></hr>
        <div className='text-center font-satoshi mt-3'>
          <img src="https://img.icons8.com/?size=100&id=108786&format=png&color=000000" className='w-[20px] h-[20px] inline-block mr-3 mb-1' alt="Oracle" />sidruhela/
        </div>
        <hr className='w-[400px] bg-black m-auto mt-2 h-[2px]'></hr>
        <div className='text-center font-satoshi mt-3 mb-3'>
          <img src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" className='w-[20px] h-[20px] inline-block mr-3 mb-1' alt="Oracle" />House no-C-64, Gali no-2, Bhatia colony, Ballabgarh, Haryana 121004
        </div>
      </div>
      <div className='mt-32 text-xs h-5 bg-[custom-bg] text-center'>
        <p>©️ Siddharth Ruhela, All Rights Reserved</p>
      </div>
    </div>
  )
}


export default Myinfo