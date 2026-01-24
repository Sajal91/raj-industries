import { motion } from "framer-motion"
import { BadgeInfo } from "lucide-react"

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

const ProductCard = ({ product, index = 0 }) => {
    const { title, image, discount, discountedPrice, price } = product

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true }}
            whileTap={{ scale: 0.98 }}
            className="group relative w-full max-w-75 min-h-93.75 cursor-pointer rounded-2xl border border-slate-500 bg-slate-800/50 shadow-md shadow-black/20 transition-all hover:scale-105 hover:border-cyan-500/50 ease-in backdrop-blur-sm"
            style={{ perspective: 1200 }}
        >
            {/* Image Section */}
            <div className="relative overflow-hidden rounded-t-xl bg-[#DFDFDF] p-4">
                <motion.img
                    src={image}
                    alt={title}
                    className="relative z-10 mx-auto h-56 object-contain"
                    whileHover={{ scale: 1.12, y: -6 }}
                    transition={{ type: "spring", stiffness: 120 }}
                />

                {/* Glass Hover Overlay */}
                <div className="absolute inset-0 bg-white/1 backdrop-blur opacity-0 transition-opacity group-hover:opacity-100" />

                {/* Discount Badge */}
                {discount && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="absolute left-3 top-3 z-20 rounded-lg bg-linear-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-bold text-white shadow-lg shadow-cyan-500/30"
                    >
                        -{discount}%
                    </motion.span>
                )}
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="mb-2 line-clamp-2 text-base tracking-wider text-white transition-colors group-hover:text-cyan-400">
                    {title}
                </h3>

                {/* Price */}
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-cyan-400 tracking-wider">${price}</span>
                    {discountedPrice && (
                        <span className="text-sm text-slate-300 tracking-wider line-through">
                            ${discountedPrice}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    )
}

export default ProductCard