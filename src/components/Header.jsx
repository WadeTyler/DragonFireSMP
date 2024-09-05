import React from 'react'

export const Header = () => {
  return (
    <div className='w-full sm:fixed sm:px-48 flex flex-row justify-between text-white border-b-2 border-opacity-20 border-white sm:h-20 bg-[#080E16]'>
        
        <div className="left-side flex items-center ">
            <img src="logo-transparent.png" alt="DragonFire Logo" className='w-20 '/>
            <h2 className='h-fit text-lg sm:text-2xl font-bold '>DragonFire SMP</h2>
        </div>
        <div className="right-side flex items-center justify-center">
            <button 
            onClick={() => window.scrollTo({top: document.querySelector("#how").offsetTop, behavior: "smooth"})}
            className="join-btn bg-[#FF8023] rounded-xl font-bold px-2 py-1 transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-md hover:shadow-black">Join DragonFire</button>
        </div>

    </div>
  )
}
