import React from 'react'

const Hero = () => {
    return (
        <section className="relative h-screen w-full  pt-20 pb-10">

            {/* VIDEO */}
            <video
                src="/herovideobg.webm"
                className="absolute top-0 left-0 h-full w-full object-cover z-0"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* OVERLAY (optional but recommended) */}
            <div className="absolute inset-0 bg-black/40 z-10"></div>

            <img src="/public/age.png" alt="" className="absolute bottom-20 left-10 z-15 h-16 md:h-20 lg:h-26" />

            {/* CONTENT */}
            <div className="relative z-20 flex flex-col items-center justify-between h-full w-full">

                <div className=""></div>

                <img src="/herologo.png" alt="" className=' px-10 ' />

                <div className="w-fit text-[#8d735e] text-bold  flex items-center gap-2 border-3 border-[#8d735e] backdrop-blur-xs rounded-full p-3 bg-[#00000099] opacity-80 hover:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                        <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753" />
                    </svg>
                </div>

                <div className="flex flex-col gap-5 items-center px-10 ">
                    <h1 className="text-[clamp(1.7rem,5vw,2.2rem)]  text-white text-center">
                        RECLAIM POWER. REACH BEYOND.
                    </h1>

                    <button className="btnbg">
                        Available Now
                    </button>
                </div>

                <div className="max-w-[1000px] w-full flex items-center justify-between flex-wrap px-4 opacity-60">

                    <img src="/ps5.png" alt="" className="h-3 sm:h-6 md:h-7 object-contain" />
                    <img src="/xbox.png" alt="" className="h-3 sm:h-6 md:h-7 object-contain" />
                    <img src="/steam.png" alt="" className="h-3 sm:h-6 md:h-7 object-contain" />
                    <img src="/epic.png" alt="" className="h-3 sm:h-6 md:h-7 object-contain" />
                    <img src="/app.png" alt="" className="h-3 sm:h-6 md:h-7 object-contain" />
                    <img src="/gfn.png" alt="" className="h-3 sm:h-6 md:h-7 object-contain" />

                </div>

            </div>
        </section>
    )
}

export default Hero
