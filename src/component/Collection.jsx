import React from 'react'

const Collection = () => {
  return (
    <section className='collectionsec relative min-h-[50vh] w-full flex flex-col lg:flex-row items-center justify-between gap-5 px-10 py-20 bg-gradient-to-b from-black to-white/5' id='collection'>

        <div className="w-full lg:w-1/4 flex flex-col gap-5 items-center justify-center h-[30vh] relative">
            <img src="/public/collectionbg.jpg" alt="" className="absolute w-full h-full z-05" />
            <div className="w-full h-full z-10 absolute bg-gradient-to-b from-blue/60 to-transparent"></div>

            <img src="/collection1.png" alt="" className='z-20 h-[50%] w-fit' />
            <img src="/devidor.png" alt="" className="h-[1px] w-[150px] z-20" />
            <h2 className="text-3xl  text-white z-20 relative">
                Standard Edition
            </h2>
        </div>
        <div className="w-full lg:w-[35%] flex flex-col gap-5 items-center justify-center h-[30vh] relative">
            <img src="/collectionbg.jpg" alt="" className="absolute w-full h-full z-05" />
            <div className="w-full h-full z-10 absolute bg-gradient-to-b from-[#8d735ea6] to-transparent"></div>

            <img src="/collection2.png" alt="" className='z-20 h-[50%] w-fit' />
            <img src="/devidor.png" alt="" className="h-[1px] w-[150px] z-20" />
            <h2 className="text-3xl text-white z-20 relative">
                Deluxe Edition
            </h2>
        </div>
        <div className="w-full lg:w-[40%] flex flex-col gap-5 items-center justify-center h-[30vh] relative">
            <img src="/collectionbg.jpg" alt="" className="absolute w-full h-full z-05" />
            <div className="w-full h-full z-10 absolute bg-gradient-to-b from-[#eeb281c0] to-transparent"></div>

            <img src="/collection3.png" alt="" className='z-20 h-[50%] w-fit' />
            <img src="/devidor.png" alt="" className="h-[1px] w-[150px] z-20" />
            <h2 className="text-3xl  text-white z-20 relative">
                Collector's Edition
            </h2>
        </div>
      
    </section>
  )
}

export default Collection
