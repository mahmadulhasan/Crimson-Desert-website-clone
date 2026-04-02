import React from 'react'
import Hero from './component/Hero'
import Navbar from './component/Navbar'
import Collection from './component/Collection'
import Longvideo from './component/Longvideo'
import Reclaim from './component/Reclaim'
import Combat from './component/Combat'
import Media from './component/Media'

const App = () => {
  return (
    <main className="relative w-full overflow-x-hidden  text-white">
      
      <Navbar />
      
      <Hero />

      <Collection />

      <Longvideo />

      <Reclaim />

      <Combat />

      <Media />

      {/* Scroll Section */}
      <div className="w-full pt-30 px-5 bg-gradient-to-b from-black to-white/5">
        <img src="/public/footername.png" alt="" className="w-full opacity-10" />
      </div>

    </main>
  )
}

export default App