import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
    return (
        <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-7">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
        </div>
    )
}

export default ProductList