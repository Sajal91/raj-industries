import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Testimonials = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-20 px-6 sm:px-10 bg-linear-to-b from-white via-slate-50 to-white" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
                        Client Testimonials
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full"
                    ></motion.div>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        See what our valued clients have to say about our products and services. Their success is our commitment.
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 gap-8"
                >
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // whileHover={{ y: -10, scale: 1.02 }}
                            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 p-8 border border-slate-200 hover:border-blue-300 group backdrop-blur-sm cursor-default"
                        >
                            {/* Rating */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={isInView ? { opacity: 1, x: 0 } : {}}
                                transition={{ delay: 0.3 + index * 0.1 }}
                                className="flex items-center mb-4"
                            >
                                <div className="flex space-x-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <motion.svg
                                            key={i}
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={isInView ? { scale: 1, rotate: 0 } : {}}
                                            transition={{ delay: 0.4 + index * 0.1 + i * 0.1, type: "spring" }}
                                            className="w-5 h-5 fill-yellow-400"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </motion.svg>
                                    ))}
                                </div>
                                <span className="ml-2 text-sm font-semibold text-slate-700">
                                    {testimonial.rating}.0
                                </span>
                            </motion.div>

                            {/* Testimonial Text */}
                            <p className="text-slate-700 leading-relaxed mb-6 text-base transition-colors">
                                "{testimonial.text}"
                            </p>

                            {/* Client Info */}
                            <motion.div
                                // whileHover={{ x: 5 }}
                                className="flex items-center pt-6 border-t border-slate-200"
                            >
                                <motion.img
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full mr-4 border-2 border-blue-100 transition-colors"
                                />
                                <div>
                                    <h4 className="font-bold text-black transition-colors">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-sm text-slate-600">
                                        {testimonial.position}
                                    </p>
                                    <p className="text-sm text-blue-600 font-medium">
                                        {testimonial.company}
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;