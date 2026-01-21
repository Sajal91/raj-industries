const Products = () => {
    const products = [
        {
            id: 1,
            title: "Concealed Pumps",
            description: "Advanced concealed pump systems designed for maximum efficiency and minimal noise. Perfect for residential and commercial applications.",
            features: ["High Efficiency", "Quiet Operation", "Energy Saving", "Long Lifespan"],
            icon: "💧"
        },
        {
            id: 2,
            title: "Industrial Magnets",
            description: "Premium-grade magnets engineered for industrial applications. Available in various sizes and strengths to meet your specific requirements.",
            features: ["High Strength", "Corrosion Resistant", "Customizable", "ISO Certified"],
            icon: "🧲"
        },
        {
            id: 3,
            title: "Pump Components",
            description: "Complete range of pump components and spare parts. Quality-assured components for all major pump brands and models.",
            features: ["OEM Quality", "Wide Compatibility", "Fast Delivery", "Expert Support"],
            icon: "⚙️"
        },
        {
            id: 4,
            title: "Magnetic Solutions",
            description: "Custom magnetic solutions for unique applications. Our engineering team designs magnets tailored to your specific needs.",
            features: ["Custom Design", "R&D Support", "Prototype Services", "Bulk Orders"],
            icon: "🔧"
        },
        {
            id: 5,
            title: "Maintenance & Service",
            description: "Comprehensive maintenance and repair services for all pump systems. Expert technicians ensure optimal performance.",
            features: ["24/7 Support", "On-site Service", "Preventive Maintenance", "Emergency Repairs"],
            icon: "🔨"
        },
        {
            id: 6,
            title: "Technical Consultation",
            description: "Expert consultation services to help you choose the right products for your application. Free technical support included.",
            features: ["Free Consultation", "Technical Expertise", "Application Support", "Training Programs"],
            icon: "📋"
        }
    ];

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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-200 group transform hover:-translate-y-2"
                        >
                            <div className="p-8">
                                {/* Icon */}
                                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {product.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                                    {product.title}
                                </h3>

                                {/* Description */}
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2 mb-6">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-center text-sm text-slate-700">
                                            <svg className="w-5 h-5 text-blue-600 mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

