import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Features = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
                duration: 0.5,
                ease: "easeOut"
            }
        }
    }

    const statsVariants = {
        hidden: { opacity: 0, scale: 0.5 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5
            }
        }
    }

    return (
        <section className="py-20 px-6 sm:px-10 bg-linear-to-b from-slate-900 via-slate-800 to-slate-900" ref={ref}>
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Why Choose Us?
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-linear-to-r from-cyan-500 to-blue-500 mx-auto mb-6 rounded-full"
                    ></motion.div>
                    <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                        We are committed to delivering excellence through quality products, innovative solutions, and exceptional customer service.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            // whileHover={{ y: -10, scale: 1.02 }}
                            className="text-center p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group bg-slate-800/50 hover:bg-slate-800"
                        >
                            {/* Icon */}
                            <motion.div
                                // whileHover={{ rotate: 360 }}
                                // transition={{ duration: 0.6 }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-cyan-500/20 to-blue-500/20 text-cyan-400 mb-6 group-hover:from-cyan-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:scale-110 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/20 border border-cyan-500/30 group-hover:border-cyan-400"
                            >
                                {feature.icon}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-300 leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { number: "20+", label: "Years Experience" },
                        { number: "500+", label: "Happy Clients" },
                        { number: "1000+", label: "Projects Completed" },
                        { number: "24/7", label: "Support Available" }
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={statsVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            // whileHover={{ scale: 1.1, y: -5 }}
                            className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white shadow-lg transition-all ease-in"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                                className="text-4xl md:text-5xl font-bold mb-2"
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-cyan-100 font-semibold">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;

