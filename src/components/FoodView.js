import React from 'react'

const FoodView = () => {
  return (
    <div className='mt-16 text-center font-lustria text-[48px] text-[#000000c5]'>
      <div className=''>
        Food delivery Web Application
        <div className=' w-[700px] m-auto pt-4 text-2xl text-left text-[#0000007a] font-satoshi' >
          I developed a user-centric food delivery application using ReactJS, enabling users to browse menus, add items to their cart, and place orders effortlessly. The project emphasizes a smooth, intuitive ordering process, integrating user authentication, real-time updates, and seamless navigation. Key tools like React Router, Context API, and Redux were employed to enhance state management and user experience. Tailwind CSS was used for responsive, modern UI styling.
        </div>
      </div>
      <div className='mt-9 text-left text-[38px]'>
        <div className=' w-[700px] m-auto pt-6 text-left text-[#0000007a] font-satoshi' >
          <p className='font-lustria text-[#000000c6] text-[38px]'>Challenge / Requirement</p>
          <p className='mt-2 text-[20px]'>The main goal was to build a dynamic, user-friendly application that could handle real-time updates, manage user sessions, and maintain an intuitive navigation flow. Integrating state management for efficient data handling across multiple components was essential.</p>
        </div>
        <div className=' w-[700px] m-auto pt-16 text-left text-[#0000007a] font-satoshi' >
          <p className='font-lustria text-[#000000c6] text-[38px]'>Skills used</p>
          <div className=''>
            <ul className='text-[17px]'><span className='font-semibold text-[18px]'>• ReactJS:</span>  For component-based architecture and efficient rendering.</ul>
            <ul className='mt-2 lis text-[17px]'><span className='text-base font-semibold text-[18px]'>• Context API & Redux:</span> For robust state management across the application.</ul>
            <ul className='mt-2 text-[17px]'><span className='text-base font-semibold text-[18px]'>• React Router:</span> For dynamic routing and a single-page application experience.</ul>
            <ul className='mt-2 text-[17px]'><span className='text-base font-semibold text-[18px]'>• Tailwind CSS:</span> For responsive, modern UI styling.</ul>
          </div>
        </div>
      </div>
      <div className=' w-[700px] m-auto pt-16 text-left text-[#0000007a] font-satoshi' >
          <p className='font-lustria text-[#000000c6] text-[38px]'>Conclusion</p>
          <p className='text-[20px]'>The project successfully delivered an intuitive food ordering platform with real-time capabilities. The use of ReactJS, Tailwind CSS, and advanced state management techniques made it responsive and reliable, meeting the demands of modern users seeking quick and easy food delivery.</p>
        </div>
        <div className='mt-32 text-xs h-5 bg-[custom-bg] text-center'>
        <p>©️ Siddharth Ruhela, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default FoodView