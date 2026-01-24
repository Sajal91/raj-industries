import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import banner1 from "./assets/info-1.png";

const CompanyIntro = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    }

    return (
        <section className="py-20 px-6 sm:px-10 bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 h-full overflow-hidden">
            <div className="max-w-7xl mx-auto h-full flex items-center flex-col" ref={ref}>
                <motion.h2
                    initial={{ opacity: 0, x: 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="text-4xl md:text-5xl max-w-180 font-bold text-white mb-16 leading-tight text-center"
                >
                    Leading Provider of Industrial
                    <span className="text-cyan-400"> Pump & Magnet Solutions</span>
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid lg:grid-cols-2 gap-12 items-start h-full"
                >
                    {/* Image Section - Left */}
                    <motion.div
                        variants={itemVariants}
                        className="relative w-full aspect-4/3"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={isInView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="absolute z-10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={banner1}
                                alt="Raj Industries - Industrial Solutions"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 to-transparent"></div>
                        </motion.div>
                        <motion.div
                            initial={{ x: -20, y: -20, opacity: 0 }}
                            animate={isInView ? { x: -12, y: -12, opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="absolute rounded-2xl w-full h-full inset-0 -top-3 -left-3 bg-linear-to-br from-cyan-900/50 to-blue-900/50 aspect-4/3 max-h-80.5 -z-10"
                        ></motion.div>
                    </motion.div>

                    {/* Content Section - Right */}
                    <motion.div
                        variants={itemVariants}
                        className="lg:pl-8"
                    >

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-4 text-lg text-slate-300 leading-relaxed mb-8"
                        >
                            <p>
                                Raj Industries is a leading manufacturer and importer of high-quality home appliance products, proudly serving the Indian market since <span className="font-semibold text-cyan-400">2005</span>. With <span className="font-semibold text-cyan-400">20 years of experience</span> in the home appliances and motor components industry, we have built a strong reputation for reliability, innovation, and consistent quality.
                            </p>
                            <p>
                                We are recognized as <span className="font-semibold text-cyan-400">India's largest manufacturer of fountain pump magnets</span> and offer the <span className="font-semibold text-cyan-400">widest range of cooler and fountain pump magnets</span> available in the country. Our products are trusted by OEMs, distributors, and service professionals across India.
                            </p>
                            <p>
                                Operating from our advanced manufacturing facility in <span className="font-semibold text-cyan-400">Tronica City, Uttar Pradesh</span>, we continuously invest in technology, skilled manpower, and quality control systems to meet the evolving needs of the market.
                            </p>
                        </motion.div>

                    </motion.div>

                </motion.div>
                <div className="flex flex-col gap-6 items-start w-full">
                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-10"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20"
                        >
                            Learn More About Us
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-800 hover:bg-slate-700 text-cyan-400 border-2 border-cyan-500/50 hover:border-cyan-400 px-8 py-3 rounded-lg font-semibold transition-all duration-200 shadow-md hover:shadow-lg"
                        >
                            Our Products
                        </motion.button>
                    </motion.div>
                    {/* Key Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid sm:grid-cols-2 gap-10 mb-8"
                    >
                        {[
                            { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "ISI Certified", desc: "Quality assured products" },
                            { icon: "M13 10V3L4 14h7v7l9-11h-7z", title: "Fast Delivery", desc: "On-time shipments" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.05, x: 5 }}
                                className="flex items-start"
                            >
                                <div className="shrink-0 w-12 h-12 bg-linear-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mr-4 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                                    <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-400">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;

