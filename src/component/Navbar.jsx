import React from 'react'

const Navbar = () => {
    return (
        <section className="fixed top-0 left-0 w-full h-16 flex items-center justify-between px-4 z-50 bg-black/50">

            <span className="md:hidden text-[#8d735e] transition-colors duration-300">=</span>

            <img src="/logo.png" alt="" className="h-10 object-contain backdrop-blur-xs" />

            <div className="hidden lg:flex gap-10 lg:gap-20 text-sm lg:text-base items-center">
                <a href="#home" className="hover:text-[#8d735e] transition-colors duration-300">Main</a>
                <a href="#collection" className="hover:text-[#8d735e] transition-colors duration-300">Announcement</a>
                <a href="#media" className="hover:text-[#8d735e] transition-colors duration-300">Media</a>
                <a href="#contact" className="hover:text-[#8d735e] transition-colors duration-300">Report a issue</a>
                <span className="border-2 border-[#8d735e] bg-gradient-to-r from-[#8d735ea6] to-black/80 px-8 py-1 text-center rounded-full transition-colors duration-300">Purchase</span>
            </div>


            <span className="md:hidden text-[#8d735e] transition-colors duration-300">:</span>

        </section>
    )
}

export default Navbar
