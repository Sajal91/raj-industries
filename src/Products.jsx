import { products } from "./data/productData";
import ProductList from "./ProductList";

const Products = () => {

    return (
        <section className="py-20 px-6 sm:px-10 bg-linear-to-b from-slate-50 to-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Our Products & Services
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        Comprehensive solutions for all your pumping and magnetic needs. Quality, reliability, and innovation in every product.
                    </p>
                </div>

                {/* Products Grid */}
                <ProductList products={products} />
            </div>
        </section>
    );
};

export default Products;

