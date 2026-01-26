import { motion, AnimatePresence } from "framer-motion"
import { X, ShoppingCart, Heart, Share2, Check, Star, Truck, Shield, RotateCcw } from "lucide-react"
import { useEffect, useState } from "react"

const ProductModal = ({ product, isOpen, onClose }) => {
    const [selectedImage, setSelectedImage] = useState(0)
    const [quantity, setQuantity] = useState(1)
    const [isWishlisted, setIsWishlisted] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = ""
        }
        return () => {
            document.body.style.overflow = ""
        }
    }, [isOpen])

    if (!product) return null

    const { title, image, discount, discountedPrice, price, description, features, specifications } = product

    const handleQuantityChange = (delta) => {
        setQuantity(Math.max(1, quantity + delta))
    }

    const handleAddToCart = () => {
        console.log(`Added ${quantity} x ${title} to cart`)
        // Add to cart logic here
    }

    const handleBuyNow = () => {
        console.log(`Buy now: ${quantity} x ${title}`)
        // Buy now logic here
    }

    const benefits = [
        { icon: <Truck className="w-5 h-5" />, text: "Free Shipping" },
        { icon: <Shield className="w-5 h-5" />, text: "1 Year Warranty" },
        { icon: <RotateCcw className="w-5 h-5" />, text: "Easy Returns" },
        { icon: <Check className="w-5 h-5" />, text: "Quality Assured" }
    ]

    const defaultFeatures = features || [
        "Premium Quality Materials",
        "Energy Efficient Design",
        "Long Lasting Performance",
        "Easy Installation",
        "Industry Standard Compliance"
    ]

    const defaultSpecifications = specifications || {
        "Material": "High-Grade Industrial",
        "Warranty": "1 Year",
        "Weight": "2.5 kg",
        "Dimensions": "15 x 10 x 8 cm",
        "Power": "220V AC"
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.92 }}
                        transition={{
                            duration: 0.35,
                            ease: [0.22, 1, 0.36, 1] // premium easing
                        }}
                        className="fixed inset-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-200 max-h-full rounded-2xl overflow-hidden"
                    >
                        <div
                            className="bg-white rounded-2xl shadow-2xl h-full flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg flex items-center justify-center transition-all hover:scale-110 cursor-pointer"
                            >
                                <X className="w-5 h-5 text-gray-700" />
                            </button>

                            <div className="flex flex-col md:flex-row h-full">
                                {/* Left Side - Image Gallery */}
                                <div className="md:w-1/2 bg-linear-to-br from-slate-50 to-white p-6 flex flex-col">
                                    {/* Main Image */}
                                    <div className="relative flex rounded-xl bg-linear-to-br from-slate-100 to-slate-50 mb-4 group">
                                        <motion.img
                                            key={selectedImage}
                                            initial={{ opacity: 0, scale: 1.1 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.3 }}
                                            src={image}
                                            alt={title}
                                            className="w-full h-full object-contain"
                                            draggable={false}
                                        />
                                    </div>

                                    {/* Thumbnail Gallery (if multiple images) */}
                                    <div className="flex gap-2">
                                        {[image, image, image].slice(0, 3).map((img, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => setSelectedImage(idx)}
                                                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === idx
                                                    ? "border-blue-600 scale-105"
                                                    : "border-slate-200 hover:border-slate-300"
                                                    }`}
                                            >
                                                <img
                                                    src={img}
                                                    alt={`Thumbnail ${idx + 1}`}
                                                    className="w-full h-full object-cover"
                                                    draggable={false}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side - Product Details */}
                                <div className="md:w-1/2 h-full p-6 md:p-8 flex flex-col overflow-y-auto">
                                    {/* Header */}
                                    <div className="mb-6">
                                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-3 leading-tight">
                                            {title}
                                        </h2>
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="flex items-center">
                                                {[...Array(5)].map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                                                    />
                                                ))}
                                            </div>
                                            <span className="text-slate-600 text-sm">(4.8) • 234 Reviews</span>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    {/* <div className="mb-6">
                                        <h3 className="text-lg font-bold text-black mb-3">Description</h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {description || "Experience premium quality with our industrial-grade product. Designed for durability and performance, this product meets the highest standards in the industry. Perfect for both commercial and residential applications."}
                                        </p>
                                    </div> */}

                                    {/* Features */}
                                    {/* <div className="mb-6">
                                        <h3 className="text-lg font-bold text-black mb-3">Key Features</h3>
                                        <ul className="space-y-2">
                                            {defaultFeatures.map((feature, idx) => (
                                                <motion.li
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="flex items-start gap-2"
                                                >
                                                    <Check className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                                    <span className="text-slate-600">{feature}</span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </div> */}

                                    {/* Specifications */}
                                    <div className="mb-6">
                                        <h3 className="text-lg font-bold text-black mb-3">Specifications</h3>
                                        <div className="space-y-2">
                                            {Object.entries(defaultSpecifications).map(([key, value], idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.05 }}
                                                    className="flex justify-between py-2 border-b border-slate-100"
                                                >
                                                    <span className="text-slate-600 font-medium">{key}:</span>
                                                    <span className="text-black">{value}</span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Quantity & Actions */}
                                    {/* <div className="mt-auto pt-6 border-t border-slate-200">
                                        <div className="flex items-center gap-4 mb-4">
                                            <span className="text-sm font-semibold text-slate-700">Quantity:</span>
                                            <div className="flex items-center gap-2 border border-slate-300 rounded-lg">
                                                <button
                                                    onClick={() => handleQuantityChange(-1)}
                                                    className="px-3 py-2 hover:bg-slate-100 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="px-4 py-2 font-semibold min-w-12 text-center">
                                                    {quantity}
                                                </span>
                                                <button
                                                    onClick={() => handleQuantityChange(1)}
                                                    className="px-3 py-2 hover:bg-slate-100 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>

                                        <div className="flex gap-3">
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleAddToCart}
                                                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                                            >
                                                <ShoppingCart className="w-5 h-5" />
                                                Add to Cart
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                onClick={handleBuyNow}
                                                className="flex-1 bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                                            >
                                                Buy Now
                                            </motion.button>
                                        </div>

                                        <div className="flex gap-3 mt-3">
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => setIsWishlisted(!isWishlisted)}
                                                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                                                    isWishlisted
                                                        ? "bg-red-50 text-red-600 border-2 border-red-200"
                                                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-2 border-transparent"
                                                }`}
                                            >
                                                <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-600" : ""}`} />
                                                {isWishlisted ? "Wishlisted" : "Wishlist"}
                                            </motion.button>
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="flex-1 px-4 py-3 rounded-lg font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
                                            >
                                                <Share2 className="w-5 h-5" />
                                                Share
                                            </motion.button>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    )
}

export default ProductModal
