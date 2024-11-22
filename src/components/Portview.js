import React from 'react'

const Portview = () => {
  return (
    <div className='mt-16 text-center font-lustria text-[48px] text-[#000000c5]'>
      <div className=''>
      Portfolio
        <div className=' w-[700px] m-auto pt-4 text-2xl text-left text-[#0000007a] font-satoshi' >
        This portfolio project was a self-initiated effort aimed at showcasing my proficiency in modern web development technologies. The primary objective was to create a dynamic, user-friendly platform that highlights my skills and expertise in frontend development. By leveraging ReactJS along with advanced tools and frameworks such as React Hooks, React Router and Tailwind CSS, I crafted an interactive and visually appealing portfolio. The application not only displays my work but also provides visitors with an immersive experience that reflects my capabilities in building responsive and seamless web interfaces.
        </div>
      </div>
      <div className='mt-9 text-left text-[38px]'>
        <div className=' w-[700px] m-auto pt-16 text-left text-[#0000007a] font-satoshi' >
          <p className='font-lustria text-[#000000c6] text-[38px]'>Skills used</p>
          <div className=''>
            <ul className='text-[17px]'><span className='font-semibold text-[18px]'>• ReactJS:</span>  To structure and develop interactive components.</ul>
            <ul className='mt-2 lis text-[17px]'><span className='text-base font-semibold text-[18px]'>• React Hooks:</span> For efficient state and lifecycle management.</ul>
            <ul className='mt-2 text-[17px]'><span className='text-base font-semibold text-[18px]'>• React Router:</span> To implement smooth navigation and routing.</ul>
            <ul className='mt-2 text-[17px]'><span className='text-base font-semibold text-[18px]'>• Tailwind CSS:</span> For creating a responsive, modern, and visually appealing UI.</ul>
          </div>
        </div>
      </div>
      <div className=' w-[700px] m-auto pt-16 text-left text-[#0000007a] font-satoshi' >
          <p className='font-lustria text-[#000000c6] text-[38px]'>Conclusion</p>
          <p className='text-[20px]'>This portfolio project successfully demonstrated my ability to combine modern web development practices and tools to build an engaging, high-quality web application. It serves as an effective representation of my technical proficiency and design sensibilities, offering a professional platform for potential employers and viewers to explore my work and skill set. The project enhanced my expertise in frontend development and provided a solid showcase of my dedication to building impactful user experiences.</p>
      </div>
      <div className='mt-32 text-xs h-5 bg-[custom-bg] text-center'>
        <p>©️ Siddharth Ruhela, All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Portview