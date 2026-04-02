import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Reclaim = () => {
    useGSAP(() => {

        // 1. Text slides up from bottom on entry
        gsap.from('#topsection h1', {
            y: 120,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: '#reclaimsec',
                start: 'top 80%',
                toggleActions: 'play none none reverse',
            }
        })

        // 2. Pin the text while images scroll through
        ScrollTrigger.create({
            trigger: '#topsection',
            start: 'top top',
            end: '+=250%',
            pin: true,
            pinSpacing: false,
        })

        // 3. Each image comes from bottom, fades in, scrolls through text
        const images = ['#reimg1', '#reimg2', '#reimg3']

        images.forEach((id, i) => {
            gsap.fromTo(id,
                { y: '100vh', opacity: 0 },
                {

                    opacity: 1,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: id,
                        start: 'top 90%',
                        end: 'top 60%',
                        scrub: 1,
                    }
                }
            )
        })

    })

    return (
        <section id='reclaimsec' className='relative w-full'>

            {/* Text — animates up, then pins */}
            <div
                id='topsection'
                className="w-full h-screen flex items-center justify-center pointer-events-none"
                style={{ position: 'sticky', top: 0, zIndex: 20 }}
            >
                <h1
                    className="text-[clamp(1.7rem,6vw,4rem)] text-[#8d735e] text-center select-none"
                >
                    RECLAIM POWER. REACH BEYOND.
                </h1>
            </div>

            {/* Images — stacked with scroll gaps so they appear one by one */}
            <div
                className="flex flex-col"
                style={{ marginTop: '-100vh', gap: '60vh', paddingBottom: '40vh' }}
            >
                {/* Behind text */}
                <img
                    src="/public/reclaim1.png"
                    id='reimg1'
                    alt=""
                    className="h-[40vh] object-contain self-end opacity-0"
                    style={{ zIndex: 10, position: 'relative' }}
                />

                {/* In front of text */}
                <img
                    src="/public/reclaim2.png"
                    id='reimg2'
                    alt=""
                    className="h-[40vh] object-contain self-start opacity-0"
                    style={{ zIndex: 30, position: 'relative' }}
                />

                {/* Behind text */}
                <img
                    src="/public/reclaim3.png"
                    id='reimg3'
                    alt=""
                    className="h-[40vh] object-contain self-end opacity-0"
                    style={{ zIndex: 10, position: 'relative' }}
                />
            </div>

        </section>
    )
}

export default Reclaim