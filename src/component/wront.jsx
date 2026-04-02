import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Longvideo = () => {
    useGSAP(() => {
        // const tl = gsap.timeline()

        gsap.registerPlugin(ScrollTrigger)

        gsap.to('#text1', {
            opacity: 0,
            scrollTrigger: {
                trigger: '#longvideosec',
                start: 'top top',
                end: 'top +=120%',
                // pin: true,
                scrub: true,
            },
        })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#longvideosec',
                start: 'top top',
                end: '+=250%',
                pin: true,
                scrub: true,
            }
        });

        tl.from('#video1', {
            height: '20vh',
            width: '70vw',
            marginTop: '40vh',
        })
            .to('#video1', {
                opacity: 0
            });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: '#longvideosec',
                start: 'top +=150%',
                end: 'top +=250%',
                pin: true,
                scrub: true,
            }
        });
        tl2.from('#text2', {
            opacity: 1
        })
            .to('#text2', {
                opacity: 0
            });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: '#longvideosec',
                start: 'top +=200%',
                end: 'top +=250%',
                pin: true,
                scrub: true,
            }
        });

        tl3.from('#video2', {
            opacity:0
        })
            .to('#video2', {
                opacity: 1
            });

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: '#longvideosec',
                start: 'top +=250%',
                end: '+=500%',
                pin: true,
                scrub: true,
            }
        });

        tl4.from('#text4', {
            opacity:0
        })
            .to('#video1', {
                opacity: 1
            });


    })
    return (
        <section id='longvideosec' className="relative h-[500vh] flex flex-col items-center  w-full  pt-20 pb-10">

            <h1 id='text1' className="text-[clamp(1.7rem,6vw,4rem)] mt-[30vh] text-[#8d735e] text-center z-10">
                An Open-World Action Adventure
            </h1>

            <video id='video1' src="/public/open.webm" className="absolute w-full h-screen object-cover z-20" autoPlay loop muted></video>

            <div id='text2' className="absolute h-screen flex flex-col gap-5 text-center justify-center max-w-[400px] w-full px-4  z-23">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">A Vast, Seamless World</h1>
                <span className="">Countless destinies await your discovery on the seamless open world of Pywel.</span>
                <span className="">May Solumen’s blessing guide you on your journey across the living, breathing expanse of Pywel.</span>
            </div>

            <video id='video2' src="/public/intro.webm" className="absolute w-full h-screen object-cover z-2" autoPlay loop muted></video>

            <div id='text3' className="absolute h-screen flex flex-col gap-5 text-center justify-center  w-full px-4  z-30">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">A new chapter in this land's history shall be written.</h1>
            </div>



        </section>
    )
}

export default Longvideo
