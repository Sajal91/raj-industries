import { useEffect, useState } from "react";
import banner1 from "./assets/banner-1.jpeg"
import banner2 from "./assets/banner-2.jpeg"
import banner3 from "./assets/banner-3.jpeg"

const slides = [
    { id: 1, text: "First slide", img: banner1 },
    { id: 2, text: "Second slide", img: banner2 },
    { id: 3, text: "Third slide", img: banner3 }
];

const Banner = () => {
    const [current, setCurrent] = useState(0);

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-dvh overflow-hidden">
            {/* Slides */}
            <div
                className="flex h-full transition-transform duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slides.map((slide) => (
                    <div
                        key={slide.id}
                        className={`min-w-full h-full flex justify-center items-center`}
                    >
                        <img src={slide.img} className="w-full h-full object-cover" alt="" />
                    </div>
                ))}
            </div>

            {/* Prev Button */}
            <button
                onClick={prevSlide}
                className="absolute inset-y-0 left-0 w-12 flex items-center justify-center hover:bg-gray-800/10 cursor-pointer"
            >
                <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute inset-y-0 right-0 w-12 flex items-center justify-center hover:bg-gray-800/10"
            >
                <svg
                    className="size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </button>

            {/* Pagination */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`h-2 w-2 rounded-full ${current === index ? "bg-gray-800" : "bg-gray-400"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Banner;