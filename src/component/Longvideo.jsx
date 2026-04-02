import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

gsap.registerPlugin(ScrollTrigger)

const Longvideo = () => {
    useGSAP(() => {

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#longvideosec',
                start: 'top top',
                end: '+=600%',
                pin: true,
                scrub: true,
            }
        })

        // Step 1: text1 fades out
        tl.to('#text1', { opacity: 0, duration: 1 })

        // Step 2: video1 expands from small pill → fullscreen
        tl.from('#video1', {
            height: '20vh',
            width: '60vw',
            marginTop: '40vh',
            marginLeft: '20vw',
            borderRadius: '20px',
            duration: 2,
        })

        // Step 3: text2 fades in
        tl.to('#text2', { opacity: 1, duration: 1.5 })

        // Step 4: text2 + video1 fade out together
        tl.to(['#text2', '#video1'], { opacity: 0, duration: 1 })

        // Step 5: video2 fades in
        tl.to('#video2', { opacity: 1, duration: 1.5 })

        // Step 6: text3 fades in over video2
        tl.to('#text3', { opacity: 1, duration: 1.5 })

        // Step 7: text3 fades out at the end
        tl.to('#text3', { opacity: 0, duration: 1 })
        // Step 6: text3 fades in over video2
        tl.to('#text4', { opacity: 1, duration: 1.5 })

    })

    return (
        <section
            id='longvideosec'
            className="relative h-[100vh] flex flex-col items-center justify-center w-full"
        >
            {/* Text 1 — intro headline */}
            <h1
                id='text1'
                className="absolute top-[30vh] text-[clamp(1.7rem,6vw,4rem)] text-[#8d735e] text-center z-30"
            >
                An Open-World Action Adventure
            </h1>

            {/* Video 1 — starts small, expands fullscreen */}
            <video
                id='video1'
                src="/open.mp4"
                className="absolute top-0 left-0 w-full h-screen object-cover z-20"
                style={{ opacity: 1 }}
                autoPlay loop muted
            />

            {/* Text 2 — over video1, fades in then out */}
            <div
                id='text2'
                className="absolute top-0 left-0 h-screen flex flex-col gap-5 text-center justify-center max-w-[400px] w-full px-4 z-25 opacity-0"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                <h1 className="text-2xl md:text-3xl lg:text-4xl">A Vast, Seamless World</h1>
                <span>Countless destinies await your discovery on the seamless open world of Pywel.</span>
                <span>May Solumen's blessing guide you on your journey across the living, breathing expanse of Pywel.</span>
            </div>

            {/* Video 2 — hidden initially, fades in after video1 leaves */}
            <video
                id='video2'
                src="/intro.mp4"
                className="absolute top-0 left-0 w-full h-screen object-cover z-10"
                style={{ opacity: 0 }}
                autoPlay loop muted
            />

            {/* Text 3 — final text over video2 */}
            <div
                id='text3'
                className="absolute top-0 left-0 h-screen flex flex-col gap-5 text-center justify-center w-full px-4 z-30 opacity-0"
            >
                <h1 className="text-2xl md:text-3xl lg:text-4xl">
                    A new chapter in this land's history shall be written.
                </h1>
            </div>
            {/* Text 4 — final text over video2 */}
            <div
                id='text4'
                className="absolute top-0 left-0 h-screen flex flex-col gap-5 text-center justify-center w-full  px-4 z-35 opacity-0"
            >
                <center><img src="/public/action_thumb.png" alt="" className='h-64 w-64 ' /></center>
                <h1 className="text-2xl md:text-3xl lg:text-4xl">The Rise of a Great Destiny</h1>
                <span>A devastating ambush in the deep of night by their sworn enemies the Black Bears leaves members of the Greymanes dead or scattered across the continent. Kliff – having lost his Greymane comrades, his family in all but name – is determined to reunite with the survivors, rebuild the fallen Greymanes, and reclaim what was lost. But on a journey where alliances are forged, dangers abound, and mysterious factions are uncovered, Kliff will come to realize that an unprecedented threat and a destiny greater than he imagined await him.</span>
            </div>

        </section>
    )
}

export default Longvideo