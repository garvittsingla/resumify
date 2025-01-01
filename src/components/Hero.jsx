import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {
    const navigate = useNavigate()
    return (
        <div className='h-96 text-5xl md:text-6xl w-full lg:text-8xl font-semibold  flex flex-col items-center justify-center text-white p-4 md:p-8'>
            <h1 className='md:mx-auto ml-16 '>
                Build Your Professional
            </h1>
            <h1 className='md:mx-auto ml-16 text-slate-300 '>
                Portfolio in, <span className='font-["Bauhaus_93"]'>Minutes</span>
            </h1>
            <p className='font-normal max-w-96 md:w-full  mx-auto text-base md:text-lg lg:text-xl mt-4 text-center text-slate-500'>
                <div>Showcase your work with our powerful portfolio builder.</div> Create stunning, professional portfolios that stand out from the <span className='text-white font-["Bauhaus_93"]'>crowd.</span>
            </p>
            <button onClick={()=>{
                navigate("/login")
            }} className='text-xl text-black px-4 rounded-md py-2 mt-5 bg-[#E3D9E7]'>Get Started</button>
        </div>
    )
}

export default Hero