import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { products } from "./data/productData"
import ProductList from "./ProductList"
import { Search, Filter } from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router"

const ProductsPage = ({ setIsModalOpen, setProduct }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [searchTerm, setSearchTerm] = useState("")

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white">
            {/* Hero Section */}
            <section className="relative py-20 px-6 sm:px-10 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 opacity-20"
                ></motion.div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            Our Products & Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-cyan-100 max-w-3xl mx-auto mb-8"
                        >
                            Comprehensive solutions for all your pumping and magnetic needs. Quality, reliability, and innovation in every product.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Search and Filter Section */}
            {/* <section className="py-8 px-6 sm:px-10 bg-white/95 backdrop-blur-lg border-b border-slate-200 sticky top-0 z-40 shadow-lg shadow-black/10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col md:flex-row gap-4 items-center"
                    >
                        <div className="relative flex-1 w-full md:max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-white placeholder:text-slate-600 focus:border-blue-600 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                            />
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white hover:bg-slate-700 text-slate-700 border border-slate-300 hover:border-blue-600/50 font-semibold transition-colors"
                        >
                            <Filter className="w-5 h-5" />
                            Filter
                        </motion.button>
                    </motion.div>
                </div>
            </section> */}

            {/* Products Section */}
            <section ref={ref} className="py-20 px-6 sm:px-10">
                <div className="max-w-7xl mx-auto flex flex-col items-start">
                    <div className="relative flex w-full md:max-w-md">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-300 bg-white text-black placeholder:text-slate-600 focus:border-blue-600 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                        />
                    </div>
                    {filteredProducts.length > 0 ? (
                        <div className="w-full">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : {}}
                                className="mb-8 mt-4"
                            >
                                <p className="text-slate-600">
                                    Showing <span className="font-semibold text-cyan-400">{filteredProducts.length}</span> product{filteredProducts.length !== 1 ? 's' : ''}
                                </p>
                            </motion.div>
                            <ProductList setProduct={setProduct} setIsModalOpen={setIsModalOpen} products={filteredProducts} />
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center py-20"
                        >
                            <div className="text-6xl mb-4">🔍</div>
                            <h3 className="text-2xl font-bold text-black mb-2">No products found</h3>
                            <p className="text-slate-600">Try adjusting your search terms</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6 sm:px-10 bg-linear-to-r from-blue-600 to-blue-700 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Need a Custom Solution?
                        </h2>
                        <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                            We design and manufacture custom solutions tailored to your specific requirements. Contact us to discuss your needs.
                        </p>
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <NavLink
                                to="/contact"
                                className="inline-block bg-white text-cyan-600 px-8 py-4 rounded-lg font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
                            >
                                Contact Us
                            </NavLink>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default ProductsPage
