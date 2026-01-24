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
                            <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/50 to-black/30"></div>
                            
                            {/* Content Overlay */}
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto"
                            >
                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight"
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                    className="text-lg md:text-xl lg:text-2xl text-cyan-200 mb-8"
                                >
                                    {slide.subtitle}
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.9, duration: 0.5 }}
                                    className="flex gap-4 justify-center flex-wrap"
                                >
                                    <button className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1">
                                        Explore Products
                                    </button>
                                    <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:-translate-y-1">
                                        Get Quote
                                    </button>
                                </motion.div>
                            </motion.div>
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