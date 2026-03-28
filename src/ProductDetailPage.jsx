import { useParams, Navigate } from "react-router";
import { products } from "./data/productData";
import { motion } from "framer-motion";
import { Star, ArrowLeft } from "lucide-react";
import { NavLink } from "react-router";
import { Helmet } from "react-helmet-async";
import { useState } from "react";
import bgImg from "./assets/ads/img-2.webp"
import { productPageData } from "./data/productPageData";

const ProductDetailPage = ({ setIsModalOpen, setProduct }) => {
    const { productSlug } = useParams();

    const product = productPageData.find((e) => e.slug === productSlug);

    if (!product) {
        return <Navigate to="/" replace />;
    }

    const { pageTitle } = product;

    return (
        <div className="min-h-screen relative" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="absolute left-0 top-0 w-full h-full backdrop-blur-xl z-1"></div>
            <Helmet>
                <title>{pageTitle} | Raj Industries</title>
                <meta name="description" content={pageTitle} />
                <link rel="canonical" href={`https://rajtronicacity.com/products/${productSlug}`} />
            </Helmet>
            <div className="relative z-2">
                {product.content && (() => {
                    const ContentComponent = product.content;
                    return <ContentComponent setProduct={setProduct} setIsModalOpen={setIsModalOpen} />;
                })()}
            </div>
        </div>
    );
};

export default ProductDetailPage;
