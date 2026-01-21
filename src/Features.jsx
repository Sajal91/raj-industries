const Features = () => {
    const features = [
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            ),
            title: "Premium Quality",
            description: "All our products undergo rigorous quality testing to ensure they meet the highest industrial standards and deliver exceptional performance."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "High Efficiency",
            description: "Engineered for maximum efficiency and energy savings. Our products reduce operational costs while maintaining superior performance."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Long Lifespan",
            description: "Built to last with durable materials and robust construction. Our products provide reliable operation for years to come."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            ),
            title: "Expert Support",
            description: "Our team of experienced engineers and technicians provide comprehensive support, from product selection to installation and maintenance."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            ),
            title: "Custom Solutions",
            description: "We design and manufacture custom solutions tailored to your specific requirements and application needs."
        },
        {
            icon: (
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Competitive Pricing",
            description: "We offer the best value for money with competitive pricing without compromising on quality or service."
        }
    ];

    return (
        <section className="py-20 px-6 sm:px-10 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Why Choose Us?
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        We are committed to delivering excellence through quality products, innovative solutions, and exceptional customer service.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="text-center p-8 rounded-xl border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 group bg-slate-50 hover:bg-white"
                        >
                            {/* Icon */}
                            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:scale-110">
                                {feature.icon}
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-slate-900 mb-4">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">15+</div>
                        <div className="text-slate-600 font-semibold">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">500+</div>
                        <div className="text-slate-600 font-semibold">Happy Clients</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">1000+</div>
                        <div className="text-slate-600 font-semibold">Projects Completed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                        <div className="text-slate-600 font-semibold">Support Available</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;

