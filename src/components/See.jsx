import React from 'react'

export const See = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full items-center lg:px-48 py-20'>
        <img src="see-wolves.png" alt="Wolves" className='lg:w-7/12 rounded-3xl'/>
        <div className="right-side flex flex-col px-10 justify-center">
            <h1 className="text-[#FF8023] text-3xl font-bold py-3 lg:text-left text-center">See you Soon!</h1>
            <p className="text-white font-thin text-lg py-3 tracking-wide">
                Please feel free to reach out to us on <a href="https://discord.gg/ADNzPTHY9k" target="_blank" className='inline-link'>Discord</a> if you have any questions or require assistance.
            </p>
        </div>
    </div>
  )
}
