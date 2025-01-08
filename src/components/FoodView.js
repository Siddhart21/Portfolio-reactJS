import React from 'react'

const FoodView = () => {
  return (
    <div className='mt-16 text-center font-lustria text-[48px] text-[#000000c5]'>
      <div className=''>
        Fusion Center
        <div className=' w-[700px] m-auto pt-4 text-2xl text-left text-[#0000007a] font-satoshi' >
        I worked on Hexaware's internal tool, "Fusion Center," which serves as a central platform to list and access all the AI solutions and tools offered by the organization. My role focused on enhancing this tool by redesigning its outdated UI to a modern, user-friendly interface using Tailwind CSS, ensuring a visually appealing and intuitive experience for users. Additionally, I improved the performance of the application by optimizing key functionalities, enabling faster tool access and seamless interactions. To achieve efficient state management, I utilized Redux, ensuring smooth data flow and consistent application behavior. This project significantly improved the usability and responsiveness of one of Hexaware's core internal tools.        </div>
      </div>
      <div className='mt-9 text-left text-[38px]'>
        <div className=' w-[700px] m-auto pt-6 text-left text-[#0000007a] font-satoshi' >
          <p className='font-lustria text-[#000000c6] text-[38px]'>Challenge / Requirement</p>
          <p className='mt-2 text-[20px]'>The original interface was cumbersome and visually outdated, making it difficult to provide a seamless user experience. I addressed this by redesigning the UI using Tailwind CSS, ensuring responsiveness and modern design principles.</p>
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
          <p className='text-[20px]'>This project not only enhanced the usability and performance of one of Hexaware’s core internal tools but also demonstrated my ability to modernize legacy systems, implement efficient state management, and create a user-centric design. By delivering a streamlined platform for accessing AI solutions and tools, the project contributed to improved operational efficiency and highlighted the importance of innovation in internal applications.</p>
        </div>
        <div className='mt-32 text-xs h-5 bg-[custom-bg] text-center'>
        <p>©️ Siddharth Ruhela, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default FoodView