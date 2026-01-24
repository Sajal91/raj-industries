import banner1 from "./assets/banner-1.png"
import banner2 from "./assets/banner-2.png"
import banner3 from "./assets/banner-3.png"

import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"

const slides = [
    {
        id: 1,
        img: banner1,
    },
    {
        id: 2,
        img: banner2,
    },
    {
        id: 3,
        img: banner3,
    }
]

const Banner = () => {
    return (
        <div className="w-full">
            <Carousel className="w-full">
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className={"relative"}>
                            <div className="absolute left-0 top-0 w-full h-full bg-black/20"></div>
                            <img
                                src={slide.img}
                                alt=""
                                className="w-full object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselDots count={slides.length} />
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Banner