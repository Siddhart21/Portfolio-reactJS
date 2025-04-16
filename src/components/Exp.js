import React from 'react';
import food from './food.png';
import grey from './grey.png';
import card3 from './card3.png';
import { Link } from 'react-router-dom';

const Exp = () => {
    return (
        <div className='mt-36 font-satoshi font-base text-6xl' id='Exp'>
            <p className='ml-[252px]'>Experience</p>

            {/* Fusion Center Experience */}
            <div className='flex flex-col md:flex-row justify-center bg-gradient-to-r from-card via-[#b3d9a0] to-[#c3eaaf] mx-4 md:mx-64 rounded-3xl p-7 mt-10 h-auto md:h-[500px]'>
                <div className='w-full md:w-2/4 mt-2'>
                    <p className='text-3xl text-left font-semibold'>Fusion Center</p>
                    <p className='text-lg text-left mt-4 text-Text'>Enhanced Hexaware's internal tool, "Fusion Center," by redesigning its outdated UI. This tool serves as a central platform to list and access all AI solutions and tools offered by Hexaware, improving usability and efficiency.</p>
                    <Link to="/Foodview">
                        <button className='rounded-3xl text-base bg-black text-white pt-3 pb-3 pl-6 pr-6 hover:bg-[#65d74e] transition-all duration-200 hover:text-white mt-10 md:mt-44'>View more</button>
                    </Link>
                </div>
                <div className='w-full md:w-2/4 mt-2 px-7'>
                    <div className='w-full h-[250px] rounded-lg'>
                        <img src={food} className='w-full h-full rounded-lg' alt="Food" />
                    </div>
                    <div className='mt-10 bg-gradient-to-r from-[#90d8f4] via-[#5cb1db] to-[#85cde3] rounded-lg'>
                        <div className='text-base flex flex-wrap p-4 gap-4'>
                            <p className='p-3 bg-newblue text-white rounded-lg'>ReactJS</p>
                            <p className='p-3 bg-newblue text-white rounded-lg'>Tailwind</p>
                            <p className='p-3 bg-newblue text-white rounded-lg'>Router</p>
                            <p className='p-3 bg-newblue text-white rounded-lg'>Redux</p>
                            <p className='p-3 bg-newblue text-white rounded-lg'>HTML5</p>
                            <p className='p-3 bg-newblue text-white rounded-lg'>CSS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* School Curriculum Web Application */}
            <div className='flex flex-col md:flex-row justify-center mx-4 md:mx-64 rounded-3xl p-7 mt-8 h-auto md:h-[500px] bg-gradient-to-r from-card2 via-[#f29696] to-[#f7b3b3]'>
                <div className='w-full md:w-2/4 mt-2'>
                    <p className='text-3xl text-left font-semibold'>School curriculum web Application</p>
                    <p className='text-lg text-left mt-4 text-Text'>Worked on a school web application, implementing security fixes to protect against vulnerabilities and enhancing overall code quality through the development of new features.</p>
                    <Link to="/Schoolview">
                        <button className='rounded-3xl text-base bg-black text-white pt-3 pb-3 pl-6 pr-6 hover:bg-[#f05151] transition-all duration-200 hover:text-white mt-10 md:mt-44'>View more</button>
                    </Link>
                </div>
                <div className='w-full md:w-2/4 mt-2 px-7'>
                    <div className='w-full h-[250px] rounded-lg'>
                        <img src={grey} className='w-full h-full rounded-lg' alt="Grey" />
                    </div>
                    <div className='mt-10 bg-gradient-to-r from-[#e1dddd] via-[#e6e3e3] to-[#b1a9a9] rounded-lg'>
                        <div className='text-base flex flex-wrap p-4 gap-4'>
                            <p className='p-3 bg-black text-white rounded-lg'>ColdFusion</p>
                            <p className='p-3 bg-black text-white rounded-lg'>Javascript</p>
                            <p className='p-3 bg-black text-white rounded-lg'>Mysql</p>
                            <p className='p-3 bg-black text-white rounded-lg'>Jquery</p>
                            <p className='p-3 bg-black text-white rounded-lg'>Ajax</p>
                            <p className='p-3 bg-black text-white rounded-lg'>CSS</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Portfolio Web Application */}
            <div className='flex flex-col md:flex-row justify-center mx-4 md:mx-64 rounded-3xl p-7 mt-8 h-auto md:h-[500px] bg-gradient-to-r from-[#e7e0eb] via-[#ccb9d7] to-[#ccbdd4]'>
                <div className='w-full md:w-2/4 mt-2'>
                    <p className='text-3xl text-left font-semibold'>Portfolio web application</p>
                    <p className='text-lg text-left mt-4 text-Text'>I embarked on a self-initiated project to demonstrate and test my proficiency in modern web technologies. Leveraging ReactJS, React Hooks, React Router, and Tailwind CSS.</p>
                    <Link to="/portview">
                        <button className='rounded-3xl text-base bg-black text-white pt-3 pb-3 pl-6 pr-6 hover:bg-[#eb50eb] transition-all duration-200 hover:text-white mt-10 md:mt-52'>View more</button>
                    </Link>
                </div>
                <div className='w-full md:w-2/4 mt-2 px-7'>
                    <div className='w-full h-[250px] rounded-lg'>
                        <img src={card3} className='w-full h-full rounded-lg' alt="Card" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exp;
