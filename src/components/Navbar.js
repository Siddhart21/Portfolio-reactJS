import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <>
      <div className='navbar flex justify-around pt-9 items-center'>
        <div className='left'>
          <span id="sid" className='pl-6 text-red-400 text-2xl font-extrabold p-1 tracking-widest font-satoshi'>S<h1 className=' font-satoshi inline-block text-slate-600 text-2xl font-extrabold tracking-widest'>IDDHARTH</h1></span>
        </div>
        <div className='right'>
          <ul className='flex items-center'>
            <Link to="/"><li className='nav-item relative pl-5 pr-5 font-medium  text-slate-600 font-satoshi before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-slate-600 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-bottom-right hover:before:origin-bottom-left hover:text-red-400'>Home</li></Link>
            <a href="#skills">
              <li className="nav-item relative pl-5 pr-5 font-medium text-slate-600 font-satoshi before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-slate-600 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-bottom-right hover:before:origin-bottom-left hover:text-red-400">
                Skills
              </li>
            </a>
            <a href="#Education">
              <li className='nav-item relative pl-5 pr-5 font-medium  text-slate-600 font-satoshi before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-slate-600 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-bottom-right hover:before:origin-bottom-left hover:text-red-400'>Education</li>
            </a>
            <a href="#Exp">
              <li className='nav-item relative pl-5 pr-5 font-medium  text-slate-600 font-satoshi before:content-[""] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-slate-600 before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-bottom-right hover:before:origin-bottom-left hover:text-red-400'>Experience</li>
            </a>
            <a href="#contact">
            <li className='pl-6 pr-6 font-medium pt-3 pb-3 font-satoshi bg-black text-white rounded-3xl hover:text-slate-900 transition-all duration-200 hover:bg-red-400'>Let's Talk</li>
            </a>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar