import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { products } from "./data/productData";
import ProductList from "./ProductList";
import { Link, NavLink } from "react-router"

const Products = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-20 px-6 sm:px-10 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Our Products & Services
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full"
                    ></motion.div>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive solutions for all your pumping and magnetic needs. Quality, reliability, and innovation in every product.
                    </p>
                </motion.div>

                {/* Products Grid */}
                <ProductList products={products.slice(0, 6)} />

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <NavLink to="/products">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg transition-all cursor-pointer"
                        >
                            View All Products
                        </motion.button>
                    </NavLink>
                </motion.div>
            </div>
        </section>
    );
};

export default Products;

