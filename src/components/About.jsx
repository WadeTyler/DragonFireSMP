import React from 'react'

export const About = () => {
  return (
    <div className='w-full flex flex-col items-center'>
        <h1 className='text-white text-3xl font-semibold py-10'>Learn More</h1>

        <div className="group-1 flex lg:flex-row flex-col lg:px-48 pb-10">
            <img src="about-soaring.png" alt="Soaring Dragon" className='w-full lg:w-7/12 rounded-3xl'/>
            <div className="flex flex-col px-10 items-center justify-center">
                <h1 className="text-[#FF8023] text-xl lg:text-3xl font-bold py-3">Breed, Train, and ride dragons across stunning landscapes</h1>
                <p className="text-white font-thin text-sm lg:text-lg  py-3 tracking-wide">Unlock rare species, nurture your dragons from hatchlings to powerful beasts, and form an unbreakable bond as you soar through majestic skies, explore vast forests, and conquer fiery volcanoes. Customize your dragons with armor and abilities, making them your ultimate companion in battle and exploration.</p>
            </div>
        </div>

        <div className="group-2 flex lg:flex-row flex-col-reverse lg:px-48 py-10">
            <div className="flex flex-col px-10 items-center justify-center">
                <h1 className="text-[#FF8023] text-xl lg:text-3xl font-bold py-3">Explore a custom world filled with Dragons and Magic</h1>
                <p className="text-white font-thin text-sm lg:text-lg py-3 tracking-wide">Traverse enchanted forests, mystical ruins, and hidden dragon sanctuaries as you uncover ancient secrets and powerful artifacts. The world is alive with magical creatures, rare resources, and dynamic weather systems, offering endless opportunities for exploration and crafting.</p>
            </div>
            <img src="about-bridge.png" alt="Bridge" className='w-full lg:w-7/12 rounded-3xl'/>
        </div>

        <div className="group-1 flex lg:flex-row flex-col lg:px-48 py-10 pb-20">
            <img src="about-chicken.png" alt="Chicken" className='w-full lg:w-7/12 rounded-3xl'/>
            <div className="flex flex-col px-10 items-center justify-center">
                <h1 className="text-[#FF8023] text-xl lg:text-3xl font-bold py-3">Join a friendly, engaging community of dragon tamers and adventurers</h1>
                <p className="text-white font-thin text-sm lg:text-lg py-3 tracking-wide">Whether you're a seasoned player or new to the world of dragons, you'll find a welcoming group ready to share tips, collaborate on epic builds, and tackle challenges together. Participate in community events, dragon battles, and collaborative projects, all while forging lasting friendships in a server dedicated to creativity, exploration, and fun.</p>
            </div>
        </div>


    </div>
  )
}
