import { motion } from "framer-motion"
import ProductCard from "./ProductCard"

const ProductList = ({ products, setIsModalOpen, setProduct }) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 place-items-center-safe gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-7"
        >
            {products.map((product, index) => (
                <ProductCard setProduct={setProduct} setIsModalOpen={setIsModalOpen} key={index} product={product} index={index} />
            ))}
        </motion.div>
    )
}

export default ProductList