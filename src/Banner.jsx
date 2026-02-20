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
        <div className="w-full group">
            <Carousel className="w-full" autoplay autoplayDelay={4000}>
                <CarouselContent>
                    {slides.map((slide) => (
                        <CarouselItem key={slide.id} className="relative w-full">
                            {/* Motion wrapper handles the entry animation */}
                            <motion.div
                                initial={{ scale: 1.05, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full h-auto"
                            >
                                <img
                                    src={slide.img}
                                    alt={slide.title}
                                    // w-full and h-auto ensures the image stays responsive
                                    // block removes the bottom whitespace often found in inline elements
                                    className="w-full h-auto block object-cover"
                                />
                            </motion.div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselDots count={slides.length} />
                <div className="transition-opacity max-md:hidden opacity-0 group-hover:opacity-100">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
        </div>
    )
}

export default Banner