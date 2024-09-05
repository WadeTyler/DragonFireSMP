import React from 'react'

export const How = () => {
  return (
    <div id="how" className='flex lg:flex-row flex-col items-center justify-between border-y-2 border-opacity-20 border-white bg-[#0D1724] text-white lg:h-[700px] relative w-full'>

        <div className="left-side px-10 lg:pl-48">
            <h1 className="text-5xl font-bold text-[#FF8023] my-3 lg:text-left text-center">How to Join DragonFire SMP</h1>

            <div className="my-3">
              <h2 className="text-xl font-bold tracking-tight">Install the Modpack</h2>
              <p className="text-lg tracking-wide">Step 1. Open or Install <a href="https://www.curseforge.com/" target="_blank" className='inline-link'>Curseforge</a></p>
              <p className="text-lg tracking-wide">Step 2. <a href="https://www.mediafire.com/file/4ahnmhhv53suzk1/The_Dragonfire_modpack.zip/file" target="_blank" className='inline-link'>Download the Modpack</a></p>
              <p className="text-lg tracking-wide">Step 3. Navigate to the Minecraft tab in Curseforge</p>
              <p className="text-lg tracking-wide">Step 4. Select Import</p>
              <p className="text-lg tracking-wide">Step 5. Selected the Modpack</p>
            </div>
            <div className="my-3">
              <h2 className="text-xl font-bold tracking-tight">Join the Server</h2>
              <p className="text-lg tracking-wide">Step 1. Join our <a href="https://discord.gg/ADNzPTHY9k" target="_blank" className='inline-link'>Discord Server</a></p>
              <p className="text-lg tracking-wide">Step 2. Agree to the Rules</p>
              <p className="text-lg tracking-wide">Step 3. Navigate to the #server-info channel</p>
              <p className="text-lg tracking-wide">Step 4. Copy our server IP-Address</p>
              <p className="text-lg tracking-wide">Step 5. Launch DragonFire from Curseforge and Have Fun!</p>
            </div>

        </div>

        <div className="right-side flex flex-col lg:mr-48 lg:items-end items-center justify-center">
          <img src="how-curseforge.png" alt="Curseforge Image" className='w-11/12 my-2'/>
          <img src="how-discord.png" alt="Discord Image" className='w-7/12 my-2' />
        </div>

    </div>
  )
}
