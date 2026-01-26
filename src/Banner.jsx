import { motion } from "framer-motion"
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
} from "./Carousel"

const slides = [
    {
        id: 1,
        img: banner1,
        title: "Premium Industrial Solutions",
        subtitle: "Quality Pumps & Magnets for Your Business"
    },
    {
        id: 2,
        img: banner2,
        title: "Innovation Meets Reliability",
        subtitle: "Trusted by Industry Leaders"
    },
    {
        id: 3,
        img: banner3,
        title: "Your Partner in Excellence",
        subtitle: "20 Years of Manufacturing Excellence"
    }
]

const Banner = () => {
    return (
        <div className="w-full relative overflow-hidden">
            <Carousel className="w-full">
                <CarouselContent>
                    {slides.map((slide, index) => (
                        <CarouselItem key={slide.id} className={"relative min-h-125 md:min-h-150 flex items-center justify-center"}>
                            <motion.div
                                initial={{ scale: 1.1, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="absolute inset-0"
                            >
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <div className="absolute inset-0 bg-black/10"></div>
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