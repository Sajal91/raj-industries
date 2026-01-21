const Testimonials = () => {
    const testimonials = [
        {
            name: "Rajesh Kumar",
            position: "Operations Manager",
            company: "Industrial Solutions Pvt. Ltd.",
            image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=2563eb&color=fff&size=128",
            rating: 5,
            text: "Raj Industries has been our trusted partner for over 5 years. Their concealed pumps have significantly reduced our operational costs and maintenance requirements. The quality and reliability are exceptional."
        },
        {
            name: "Priya Sharma",
            position: "Procurement Head",
            company: "Advanced Manufacturing Co.",
            image: "https://ui-avatars.com/api/?name=Priya+Sharma&background=2563eb&color=fff&size=128",
            rating: 5,
            text: "The industrial magnets we purchased from Raj Industries have exceeded our expectations. They've improved our production efficiency and the customer service is outstanding. Highly recommended for industrial applications."
        },
        {
            name: "Amit Patel",
            position: "Technical Director",
            company: "Precision Engineering Systems",
            image: "https://ui-avatars.com/api/?name=Amit+Patel&background=2563eb&color=fff&size=128",
            rating: 5,
            text: "Their technical expertise and custom solutions helped us solve a complex pumping challenge. The team is professional, responsive, and truly understands industrial requirements. A reliable partner for critical projects."
        },
        {
            name: "Sneha Reddy",
            position: "Plant Manager",
            company: "Global Industrial Works",
            image: "https://ui-avatars.com/api/?name=Sneha+Reddy&background=2563eb&color=fff&size=128",
            rating: 5,
            text: "Outstanding product quality and excellent after-sales support. The pump components we source from Raj Industries have a much longer lifespan compared to other suppliers. Their commitment to quality is evident in every product."
        }
    ];

    return (
        <section className="py-20 px-6 sm:px-10 bg-linear-to-b from-white to-slate-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        Client Testimonials
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        See what our valued clients have to say about our products and services. Their success is our commitment.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-slate-200"
                        >
                            {/* Rating */}
                            <div className="flex items-center mb-4">
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className="w-5 h-5 fill-yellow-400"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm font-semibold text-slate-700">
                                    {testimonial.rating}.0
                                </span>
                            </div>

                            {/* Testimonial Text */}
                            <p className="text-slate-700 leading-relaxed mb-6 text-base">
                                "{testimonial.text}"
                            </p>

                            {/* Client Info */}
                            <div className="flex items-center pt-6 border-t border-slate-200">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100"
                                />
                                <div>
                                    <h4 className="font-bold text-slate-900">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {testimonial.position}
                                    </p>
                                    <p className="text-sm text-blue-600 font-medium">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;