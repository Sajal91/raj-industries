import { BriefcaseIcon, CheckCircleIcon, GearSixIcon, HandshakeIcon, PackageIcon, StackIcon } from "@phosphor-icons/react";
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const Features = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const features = [
        {
            icon: BriefcaseIcon,
            title: "20 Years of Industry Experience",
            description: "All our products undergo rigorous quality testing to ensure they meet the highest industrial standards and deliver exceptional performance.",
        },
        {
            icon: StackIcon,
            title: "Largest Range of Fountain & Cooler Pump Magnets in India",
            description: "Engineered for maximum efficiency and energy savings. Our products reduce operational costs while maintaining superior performance.",
        },
        {
            icon: GearSixIcon,
            title: "Advanced Manufacturing Infrastructure",
            description: "Built to last with durable materials and robust construction. Our products provide reliable operation for years to come.",
        },
        {
            icon: CheckCircleIcon,
            title: "Strict Quality Control Processes",
            description: "Our team of experienced engineers and technicians provide comprehensive support, from product selection to installation and maintenance.",
        },
        {
            icon: PackageIcon,
            title: "Wide Product Portfolio",
            description: "We design and manufacture custom solutions tailored to your specific requirements and application needs.",
        },
        {
            icon: HandshakeIcon,
            title: "Trusted Brands – JETRO & JUSCO",
            description: "We offer the best value for money with competitive pricing without compromising on quality or service.",
        },
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
                        Why Choose Us?
                    </h2>
                    <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: 96 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="h-1 bg-blue-600 mx-auto mb-6 rounded-full"
                    ></motion.div>
                    <p className="text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed tracking-wider">
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
                            className="text-center p-8 rounded-2xl border border-slate-200 hover:border-blue-600 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group bg-white cursor-pointer"
                        >
                            {/* Icon */}
                            <motion.div
                                // whileHover={{ rotate: 360 }}
                                // transition={{ duration: 0.6 }}
                                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 text-black mb-6 group-hover:text-cyan-400 transition-all duration-300 transform group-hover:scale-110 shadow-lg group-hover:shadow-xl group-hover:shadow-cyan-500/20 border border-blue-200 group-hover:border-cyan-400"
                            >
                                {<feature.icon size={50} weight="fill" />}
                            </motion.div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-black mb-4 group-hover:text-cyan-400 transition-colors">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-slate-600 leading-relaxed">
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
                            className="text-center p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-blue-600 shadow-lg transition-all ease-in"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={isInView ? { scale: 1 } : {}}
                                transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
                                className="text-4xl md:text-5xl font-bold mb-2"
                            >
                                {stat.number}
                            </motion.div>
                            <div className="text-black tracking-wide font-semibold">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;

