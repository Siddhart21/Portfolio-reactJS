import React from 'react'
import { useInView } from 'react-intersection-observer';

const Education = () => {

    
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will only happen once
        threshold: 0.1,    // Trigger when 10% of the item is visible
      }); 

    return (
        <div id='Education' ref={ref}
        className={`text-center mt-32 font-satoshi font-base text-6xl transition-transform duration-700 ease-out ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
          }`}

        >
            Education
            <div className='flex justify-center mt-12 text-left'>
                <div className='Experence w-2/6 font-satoshi text-2xl font-medium'>
                    <img src="https://img.icons8.com/?size=100&id=bVxZopo8bjXH&format=png&color=000000" className='inline-block w-[32px] h-[32px] mb-[7px]' alt="img" />  Experience
                    <div className='div-1 mt-10 relative'>
                        <div className='absolute top-0 left-[-5px] h-3 w-3 rounded-full bg-red-600'></div>
                        <div className='text-lg pl-6 border-solid border-l-2 border-red-600'>
                            <h3>Food Odering Application</h3>
                            <p className='font-light mt-1 text-base'>Worked as ReactJS developer</p>
                            <p className='font-semibold mt-5 text-base text-red-600'><img src="https://img.icons8.com/?size=100&id=12776&format=png&color=000000" className='inline-block W-[25px] h-[25px] mb-1' alt="img" /> 2023-2024</p>
                        </div>
                    </div>
                    <div className='div-2 mt-10 relative'>
                        <div className='absolute top-0 left-[-5px] h-3 w-3 rounded-full bg-red-600'></div>
                        <div className='text-base pl-6 border-solid border-l-2 border-red-600'>
                            <h3>School Curriculum Web Application (Hexaware Technologies, 2023)</h3>
                            <p className='font-light mt-1'>Worked as ColdFusion developer</p>
                            <p className='font-semibold mt-5 text-base text-red-600'><img src="https://img.icons8.com/?size=100&id=12776&format=png&color=000000" className='inline-block W-[25px] h-[25px] mb-1' alt="img" /> 2022-2023</p>
                        </div>
                    </div>
                </div>
                <div className='school  w-2/6 font-satoshi text-2xl font-medium'>
                    <img src="https://img.icons8.com/?size=100&id=vfiytIbdyR2f&format=png&color=000000" className='inline-block w-[41px] h-[39px] ' alt="img" />  Qualification
                    <div className='div-1 mt-10 relative'>
                        <div className='absolute top-0 left-[-5px] h-3 w-3 rounded-full bg-red-600'></div>
                        <div className='text-base pl-6 border-solid border-l-2 border-red-600'>
                            <h3>B.Tech(Computer Science and Engeeniring)(Galgotias University)</h3>
                            <p className='font-light mt-1'>Acquired 7.5 CGPA</p>
                            <p className='font-semibold mt-5 text-base text-red-600'><img src="https://img.icons8.com/?size=100&id=12776&format=png&color=000000" className='inline-block W-[25px] h-[25px] mb-1' alt="img" /> 2018-2022</p>
                        </div>
                    </div>
                    <div className='div-2 mt-10 relative'>
                        <div className='absolute top-0 left-[-5px] h-3 w-3 rounded-full bg-red-600'></div>
                        <div className='text-base pl-6 border-solid border-l-2 border-red-600'>
                            <h3>Senior School Certificate(CBSE)</h3>
                            <p className='font-light mt-1'>Acquired 79%</p>
                            <p className='font-semibold mt-5 text-base text-red-600'><img src="https://img.icons8.com/?size=100&id=12776&format=png&color=000000" className='inline-block W-[25px] h-[25px] mb-1' alt="img" /> 2016-2018</p>
                        </div>
                    </div>
                    <div className='div-2 mt-10 relative'>
                        <div className='absolute top-0 left-[-5px] h-3 w-3 rounded-full bg-red-600'></div>
                        <div className='text-base pl-6 border-solid border-l-2 border-red-600'>
                            <h3>High School Education</h3>
                            <p className='font-light mt-1'>Acquired 7.6 CGPA</p>
                            <p className='font-semibold mt-5 text-base text-red-600'><img src="https://img.icons8.com/?size=100&id=12776&format=png&color=000000" className='inline-block W-[25px] h-[25px] mb-1' alt="img" /> 2016</p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education