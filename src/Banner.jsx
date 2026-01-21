import banner1 from "./assets/banner-1.png"
import banner2 from "./assets/banner-2.png"

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
    }
]

const Banner = () => {
    return (
        <div className="w-full">
            <Carousel className="w-full">
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id}>
                            <img
                                src={slide.img}
                                alt=""
                                className="w-full object-cover"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselDots />
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default Banner