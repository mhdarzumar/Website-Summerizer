import React from 'react'
import {logo} from '../assets'

const Hero = () => {
  return (
    <header className='flex justify-center items-center w-full  flex-col'>
        <nav className='flex justify-between w-full mt-5'>
            <img src={logo} alt='logo-image'/>
            <button className='bg-black rounded-full font-serif py-2.5 px-5 text-cyan-50 hover:bg-white hover:text-black' type='button' 
            onClick={()=>
                window.open("https://github.com/TidbitsJS/Summize","_blank")
            }>Git Hub 
            
            </button>
        </nav>
        <h1 className='text-5xl mt-5 text-center font-extrabold leading-[1.46] sm:text-6xl '>Summarize Articles with
        <br className='max-md:hidden'></br><span className='orange_gradient'>Open AI GPT-4</span>
        </h1>
    </header>
  )
}

export default Hero