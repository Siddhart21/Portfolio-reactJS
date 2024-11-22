import React from 'react'
import Typical from 'react-typical';
import ilus from './ilus.png';
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div>
        <div className='header mt-20 flex justify-around'>
        <div className='left-text  w-2/6 ml-40 font-satoshi text-6xl '>
          <div className='mt-2'>Hi,I'm<span className='font-satoshi  text-red-400'> Sid</span></div>
          <div className='mt-6'>I'm a passionate</div>
          <span className='text-red-400 text-5xl font-light'>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                'ReactJS Developer', 2000,
                'Frontend Developer', 2000,
                'NextJS Developer', 2000,
              ]}
            />
          </span>
          <p className='mt-4 text-slate-600 text-lg'>
            Where code meets creativity—let's build something amazing together!
            Excited to share my passion for technology and design with you!
          </p>
          <a href="/Sid_ruhela_OL_resume.pdf" download><button className='rounded-3xl text-base bg-white border-solid border-[3px] border-button-color text-slate-600 pt-3 pb-3 pl-6 pr-6 mt-4 hover:bg-button-color hover:text-white '>Download CV</button></a>
        </div>
        <div className='right-logo  w-2/4'>
          <img src={ilus} className='w-[574px] h-96 ml-16 ' alt="img" />
        </div>
      </div>
      <div className=' mt-14 text-center text-xl text-slate-400 font-normal h-[172px]'>
        Tools which I use on daily basis
        <Marquee pauseOnClick gradient gradientWidth={300} gradientColor={["#f5f3f1"]} speed={30}>
          <div className='overflow-hidden ml-12  mt-6 cursor-pointer '>
            <div className='flex gap-20 whitespace-nowrap mt-5'>
              <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" title='Material UI'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000" alt="Material UI" />
              </a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" title='Bootstrap'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000" alt="Bootstrap" />
              </a>
              <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" title='Notion'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=nZoJhBpPfVev&format=png&color=000000" alt="Notion" />
              </a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" title='VS Code'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000" alt="VS Code" />
              </a>
              <a href="https://www.framer.com/" target="_blank" rel="noopener noreferrer" title='Framer'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=XKFRdQOs24QU&format=png&color=000000" alt="Framer" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title='GitHub'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="GitHub" />
              </a>
              <a href="https://mui.com/" target="_blank" rel="noopener noreferrer" title='Material UI'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=gFw7X5Tbl3ss&format=png&color=000000" alt="Material UI" />
              </a>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer" title='Bootstrap'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=EzPCiQUqWWEa&format=png&color=000000" alt="Bootstrap" />
              </a>
              <a href="https://www.notion.so/" target="_blank" rel="noopener noreferrer" title='Notion'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=nZoJhBpPfVev&format=png&color=000000" alt="Notion" />
              </a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" title='VS Code'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=y7WGoWNuIWac&format=png&color=000000" alt="VS Code" />
              </a>
              <a href="https://www.framer.com/" target="_blank" rel="noopener noreferrer" title='Framer'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=XKFRdQOs24QU&format=png&color=000000" alt="Framer" />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title='GitHub'>
                <img className='h-20 w-20' src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="GitHub" />
              </a>
            </div>
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default Header