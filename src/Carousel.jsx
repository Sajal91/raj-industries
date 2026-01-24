"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "./lib/util"

const CarouselContext = React.createContext(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)
    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }
    return context
}

function Carousel({ orientation = "horizontal", opts, className, children }) {
    const [carouselRef, api] = useEmblaCarousel({
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
        loop: true
    })

    const [canScrollPrev, setCanScrollPrev] = React.useState(false)
    const [canScrollNext, setCanScrollNext] = React.useState(false)
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const [scrollSnaps, setScrollSnaps] = React.useState([])

    const onSelect = React.useCallback((api) => {
        setCanScrollPrev(api.canScrollPrev())
        setCanScrollNext(api.canScrollNext())
        setSelectedIndex(api.selectedScrollSnap())
    }, [])

    React.useEffect(() => {
        if (!api) return

        setScrollSnaps(api.scrollSnapList())
        onSelect(api)

        api.on("select", onSelect)
        api.on("reInit", onSelect)
    }, [api, onSelect])

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                scrollPrev: () => api?.scrollPrev(),
                scrollNext: () => api?.scrollNext(),
                scrollTo: (index) => api?.scrollTo(index),
                canScrollPrev,
                canScrollNext,
                selectedIndex,
                scrollSnaps,
            }}
        >
            <div
                className={cn("relative overflow-hidden", className)}
                role="region"
                aria-roledescription="carousel"
            >
                {children}
            </div>
        </CarouselContext.Provider>
    )
}

function CarouselContent({ className, ...props }) {
    const { carouselRef } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div className={cn("flex", className)} {...props} />
        </div>
    )
}

function CarouselItem({ className, ...props }) {
    return (
        <div
            className={cn("min-w-full", className)}
            role="group"
            aria-roledescription="slide"
            {...props}
        />
    )
}

function CarouselPrevious({ className }) {
    const { scrollPrev, canScrollPrev } = useCarousel()
    return (
        <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
                "absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer",
                className
            )}
        >
            <ArrowLeft />
        </button>
    )
}

function CarouselNext({ className }) {
    const { scrollNext, canScrollNext } = useCarousel()
    return (
        <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
                "absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full cursor-pointer",
                className
            )}
        >
            <ArrowRight />
        </button>
    )
}

function CarouselDots({ count, className }) {
    const { selectedIndex, scrollTo } = useCarousel()

    return (
        <div
            className={cn(
                "absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10",
                className
            )}
        >
            {Array.from({ length: count }).map((_, index) => (
                <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={cn(
                        "h-2.5 w-2.5 rounded-full transition-all",
                        selectedIndex === index
                            ? "bg-white scale-110"
                            : "bg-white/30 hover:bg-white"
                    )}
                />
            ))}
        </div>
    )
}

export {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
    CarouselDots
}