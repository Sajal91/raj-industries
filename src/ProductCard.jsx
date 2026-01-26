import { motion } from "framer-motion"
import { useState } from "react"

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            delay: index * 0.08,
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
}

const ProductCard = ({ product, setIsModalOpen, setProduct, index = 0 }) => {
    const { title, image, discount, discountedPrice, price } = product

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full max-w-75 cursor-pointer rounded-2xl border border-slate-200 bg-white shadow-md shadow-black/20 transition-all hover:scale-105 hover:border-blue-600 ease-in backdrop-blur-sm"
            style={{ perspective: 1200 }}
            onClick={() => {
                setIsModalOpen(true)
                setProduct(product)
            }}
        >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-t-xl bg-[#DFDFDF]">
                <motion.img
                    src={image}
                    alt={title}
                    className="relative z-10 mx-auto w-full object-cover"
                    whileHover={{ scale: 1.05, y: -6 }}
                    transition={{ type: "spring", stiffness: 120 }}
                    draggable={false}
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-white/1 backdrop-blur opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Discount Badge */}
                {/* {discount && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="absolute left-3 top-3 z-20 rounded-lg bg-blue-600 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-cyan-500/30"
                    >
                        -{discount}%
                    </motion.span>
                )} */}
            </div>

            {/* Content */}
            <div className="p-4 h-20">
                <h3
                    className="mb-2 line-clamp-2 text-base tracking-wider text-black transition-colors group-hover:text-blue-600 cursor-pointer"
                    onClick={(e) => {
                        e.stopPropagation()
                        setIsModalOpen(true)
                    }}
                >
                    {title}
                </h3>

                {/* Price */}
                {/* <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-blue-600 tracking-wider">${price}</span>
                    {discountedPrice && (
                        <span className="text-sm text-slate-600 tracking-wider line-through">
                            ${discountedPrice}
                        </span>
                    )}
                </div> */}
            </div>
        </motion.div>
    )
}

export default ProductCard