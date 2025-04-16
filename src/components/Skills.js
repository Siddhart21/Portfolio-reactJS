import React from 'react';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will only happen once
        threshold: 0.1,    // Trigger when 10% of the item is visible
    });

    return (
        <div className={`mt-36 text-center font-satoshi font-base text-6xl transition-transform duration-700 ease-out ${
            inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
        }`} id="skills" ref={ref}>
            Skills
            <div className='w-3/4 mx-auto mt-5 bg-blue-back px-28 py-10 rounded-3xl flex-col lg:flex-row'>
                {/* Skill Icons - Flex Layout (Desktop) and Stack Layout (Mobile) */}
                <div className='flex flex-wrap justify-center gap-36'>
                    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" title='HTML5' rel="noopener noreferrer">
                        <img src="https://img.icons8.com/?size=100&id=D2Hi2VkJSi33&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="JavaScript" />
                    </a>
                    <a href="https://www.w3schools.com/css/" target="_blank" rel="noopener noreferrer" title='CSS3'>
                        <img src="https://img.icons8.com/?size=100&id=YjeKwnSQIBUq&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="React" />
                    </a>
                    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" title='ReactJS'>
                        <img src="https://img.icons8.com/?size=100&id=wPohyHO_qO1a&format=png&color=00FAFF" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="CSS" />
                    </a>
                    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" title='Tailwind'>
                        <img src="https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="Oracle" />
                    </a>
                </div>

                {/* Space between rows without increasing container height */}
                <div className='flex flex-wrap justify-center gap-36 mt-10'> {/* Reduced margin-top */}
                    <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer" title='MySQL'>
                        <img src="https://img.icons8.com/?size=100&id=42904&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="MySQL" />
                    </a>
                    <a href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer" title='NextJS'>
                        <img src="https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="Tailwind CSS" />
                    </a>
                    <a href="https://docs.python.org/3/" target="_blank" rel="noopener noreferrer" title='Python'>
                        <img src="https://img.icons8.com/?size=100&id=121464&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="Redux" />
                    </a>
                    <a href="https://devdocs.io/javascript/" target="_blank" rel="noopener noreferrer" title='JavaScript'>
                        <img src="https://img.icons8.com/?size=100&id=tGvHBPJaKqEd&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="Node.js" />
                    </a>
                </div>

                <div className='flex flex-wrap justify-center gap-36 mt-10'> {/* Reduced margin-top */}
                    <a href="https://jestjs.io/docs/getting-started" target="_blank" rel="noopener noreferrer" title='Jest'>
                        <img src="https://img.icons8.com/?size=100&id=bp24DwGXJDyT&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="HTML" />
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" title='GitHub'>
                        <img src="https://img.icons8.com/?size=100&id=46565&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="jQuery" />
                    </a>
                    <a href="https://legacy.reactjs.org/docs/context.html" target="_blank" rel="noopener noreferrer" title='ContextAPI'>
                        <img src="https://img.icons8.com/?size=100&id=21893&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="ColdFusion" />
                    </a>
                    <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer" title='Redux'>
                        <img src="https://img.icons8.com/?size=100&id=b6vIINYN0kfW&format=png&color=000000" className='w-24 h-24 bg-white rounded-full p-2 transition-transform duration-500 ease-in-out hover:scale-125 hover:rotate-180 cursor-pointer' alt="ColdFusion" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Skills;
