import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import gsap from "gsap"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const Media = () => {
    const sliderRef = useRef(null)
    const currentX = useRef(0)

    const images = [
        "/media1.jpg",
        "/media2.jpg",
        "/media3.jpg",
        "/media4.jpg",
        "/media5.jpg",
        "/media6.png",
    ]

    const moveLeft = () => {
        currentX.current += 276

        gsap.to(sliderRef.current, {
            x: currentX.current,
            duration: 0.5,
            ease: "power2.out"
        })
    }

    const moveRight = () => {
        currentX.current -= 276

        gsap.to(sliderRef.current, {
            x: currentX.current,
            duration: 0.5,
            ease: "power2.out"
        })
    }

    return (
        <section className="mediasec w-full h-screen bg-[url('/bg-2.png')] bg-cover bg-center py-20 flex flex-col gap-5 items-center justify-end">

            <Carousel>
                <CarouselContent className="-ml-4">
                    {images.map((id, i) => (
                        <CarouselItem key={i} className="basis-1 md:basis-1/3 lg:basis-1/4">
                            <div className="bg-transaparent">
                                <Card className="bg-transparent">
                                    <CardContent className="flex aspect-retangle bg-transparent items-center justify-center">
                                        <img
                                            src={id}
                                            alt={`Media ${i}`}
                                            className="w-64 h-40 object-cover group-hover:scale-110 transition-transform duration-300 bg-transparent group-hover:opacity-80"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            {/* <div className="flex w-full gap-5 items-center px-5">
                <ChevronLeft
                    onClick={moveLeft}
                    className="h-10 w-10 text-[#8d735e] cursor-pointer"
                />

                <div className="w-full overflow-hidden">
                    <div
                        ref={sliderRef}
                        className="flex gap-5"
                    >
                        {images.map((id, i) => (
                            <div key={i} className="group w-64 h-40 flex-shrink-0">
                                <img
                                    src={id}
                                    alt={`Media ${i}`}
                                    className="w-64 h-40 object-cover group-hover:scale-110 transition-transform duration-300 group-hover:opacity-80"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <ChevronRight
                    onClick={moveRight}
                    className="h-10 w-10 text-[#8d735e] cursor-pointer"
                />
            </div> */}

            <button className="btnbg">
                See More
            </button>

        </section>
    )
}

export default Media