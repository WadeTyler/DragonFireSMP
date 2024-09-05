import React from 'react'

export const Hero = () => {
  return (
    <div className="sm:mt-20 flex items-center border-b-2 border-opacity-20 border-white sm:bg-[url('/hero-image.png')] bg-[#0D1724] text-white  bg-top lg:h-[700px]">
        
        <div className="left-side flex flex-col sm:pl-48 sm:w-1/2 w-full sm:items-start items-center">
            <h1 className="text-2xl sm:text-5xl font-bold text-[#FF8023] my-3 sm:text-left text-center">Welcome to DragonFire SMP</h1>
            <p className="my-3 sm:p-0 px-2 sm:text-lg font-thin">Unleash the Power of Dragons in a customized Minecraft Experience! Embark on an epic adventure in DragonFireSMP, Discover custom dragons, explore new biomes, and master the art of dragon breeding and training.</p>
            <button 
            onClick={() => window.scrollTo({top: document.querySelector("#how").offsetTop, behavior: "smooth"})}
            className="w-fit my-3 bg-[#FF8023] rounded-xl font-bold px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:shadow-black ">Take Flight Now!</button>
        </div>

    </div>
  )
}
