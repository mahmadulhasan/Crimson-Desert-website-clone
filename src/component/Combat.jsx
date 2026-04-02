import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Combat = () => {
    gsap.registerPlugin(ScrollTrigger )
    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'#combatsec',
                start:'top top',
                end:'+=300%',
                scrub:1,
            }
        })

        tl.from('#combatvideo',{
            scale:.7,
            opacity:0,
            scrollTrigger:{
                trigger:'#combatsec',
                start:'top top',
                end:'+=200%',
                scrub:true,
                pin:true,
            }
        })

        tl.fromTo('#combattext',{
            opacity:0,
            
        },{
            opacity:1,
            y:0,            
        },
        {
            scrollTrigger:{
                trigger:'#combatsec',
                start:'top 200%',
                end:'+=300%',
                scrub:true,
            }
        }
    )


    })
  return (
    <section id='combatsec' className='relative w-full h-screen flex items-center justify-center mt-[50vh]'>

        <video id='combatvideo' src="/combat1.webm"  autoPlay loop muted className="absolute top-0 left-0 w-full h-screen object-cover"></video>

        <div
                id='combattext'
                className="absolute top-0 left-0 h-screen flex flex-col gap-5 text-center justify-center max-w-[400px] w-full px-4 z-30 opacity-0"
                style={{ left: '50%', transform: 'translateX(-50%)' }}
            >
                <h1 className="text-2xl md:text-3xl lg:text-4xl">Relentless Action, Brutal Combat</h1>
                <span>On the unforgiving battlefields of Crimson Desert, there is no single path to victory.</span>
                <span>With every strike and move, forge your own way</span>
                <span>in a world where a split second can decide your fate in fast-paced, visceral battles.</span>
            </div>
      
    </section>
  )
}

export default Combat
