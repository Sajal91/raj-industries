import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
    Magnet, 
    Droplets, 
    Home, 
    Award, 
    Target, 
    Eye, 
    Heart, 
    CheckCircle2,
    Factory,
    Shield,
    Package,
    Users,
    TrendingUp,
    Lightbulb,
    Handshake,
    Leaf
} from "lucide-react"

const About = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

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
        hidden: { opacity: 0, y: 30 },
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
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-20 px-6 sm:px-10 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 opacity-10"
                ></motion.div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                        >
                            About Raj Industries
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
                        >
                            20 Years of Excellence in Manufacturing Premium Pump Components & Home Appliances
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="w-24 h-1 bg-white mx-auto rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Expertise Section */}
            <section ref={ref} className="py-20 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Expertise</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                            Leading the industry with innovative solutions and premium quality products
                        </p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="space-y-16"
                    >
                        {/* Pump Magnets Manufacturing */}
                        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                                    <Magnet className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-4">Pump Magnets Manufacturing</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Raj Industries specializes in the manufacturing of high-performance fountain pump magnets and cooler pump magnets, available in:
                                </p>
                                <ul className="space-y-3 mb-6">
                                    {["A wide range of sizes", "Multiple quality grades", "Custom specifications as per industry requirements"].map((item, idx) => (
                                        <motion.li
                                            key={idx}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                                            <span className="text-slate-700">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                                <p className="text-slate-600 font-semibold mb-3">Our magnets are known for:</p>
                                <div className="grid grid-cols-2 gap-3">
                                    {["High durability", "Strong magnetic performance", "Long operational life", "Consistent quality standards"].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-blue-50">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-blue-50 to-white p-8 shadow-xl">
                                    <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                                        <Magnet className="w-32 h-32 text-blue-600 opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Concealed Technology Cooler Pumps */}
                        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-blue-50 to-white p-8 shadow-xl">
                                    <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                                        <Droplets className="w-32 h-32 text-blue-600 opacity-20" />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                                    <Droplets className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-4">Concealed Technology Cooler Pumps</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    We are also a trusted manufacturer of concealed technology cooler pumps, designed for:
                                </p>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {["Better aesthetics", "Enhanced safety", "High efficiency", "Long-lasting performance"].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-blue-50 border border-blue-100">
                                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-600">
                                    Our concealed pumps are available in multiple sizes and are manufactured using premium-grade components to ensure superior quality and reliability.
                                </p>
                            </div>
                        </motion.div>

                        {/* Home Appliances Product Range */}
                        <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                                    <Home className="w-8 h-8 text-blue-600" />
                                </div>
                                <h3 className="text-3xl font-bold text-black mb-4">Home Appliances Product Range</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    In addition to pump components, Raj Industries offers a comprehensive range of home appliances, including:
                                </p>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        "Gas Water Heaters",
                                        "Halogen Heaters",
                                        "Quartz Heaters",
                                        "Induction Cooktops",
                                        "Electric Kettles",
                                        "Room Heaters",
                                        "BLDC Fans",
                                        "Auto Swing Motors",
                                        "Aluminium Wires for Motor Winding"
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-200">
                                            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                                            <span className="text-sm text-slate-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-slate-600 mt-6">
                                    As both a manufacturer and importer, we ensure our products meet high standards of performance, safety, and durability.
                                </p>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-blue-50 to-white p-8 shadow-xl">
                                    <div className="aspect-square bg-linear-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center">
                                        <Home className="w-32 h-32 text-blue-600 opacity-20" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Our Brands Section */}
            <section className="py-20 px-6 sm:px-10 bg-linear-to-b from-white via-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Brands</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                        <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                            We proudly operate under our trusted brand names
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {[
                            { name: "JETRO", description: "Known for quality, reliability, and value" },
                            { name: "JUSCO", description: "Serving domestic and commercial needs across India" }
                        ].map((brand, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2, duration: 0.6 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-blue-600 hover:shadow-xl transition-all"
                            >
                                <div className="text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-600 text-white text-3xl font-bold mb-4">
                                        {brand.name[0]}
                                    </div>
                                    <h3 className="text-3xl font-bold text-black mb-3">{brand.name}</h3>
                                    <p className="text-slate-600">{brand.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Raj Industries */}
            <section className="py-20 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Choose Raj Industries</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Award />, text: "20 Years of Industry Experience" },
                            { icon: <Package />, text: "Largest Range of Fountain & Cooler Pump Magnets in India" },
                            { icon: <Factory />, text: "Advanced Manufacturing Infrastructure" },
                            { icon: <Shield />, text: "Strict Quality Control Processes" },
                            { icon: <Home />, text: "Wide Product Portfolio" },
                            { icon: <Award />, text: "Trusted Brands – JETRO & JUSCO" },
                            { icon: <Users />, text: "Pan-India Customer Base" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-600 hover:shadow-lg transition-all"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        {item.icon}
                                    </div>
                                    <p className="text-slate-700 font-medium leading-relaxed">{item.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 px-6 sm:px-10 bg-linear-to-b from-white via-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-black mb-6">Our Mission</h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    At Raj Industries, our mission is to design, manufacture, and supply high-quality pump components and home appliances that consistently meet and exceed customer expectations. We are committed to delivering products that combine advanced technology, superior materials, and precision manufacturing, ensuring long-lasting performance and reliability.
                                </p>
                                <p>
                                    We strive to support our customers and partners by offering a wide range of products, flexible solutions, and dependable service, while continuously improving our processes through innovation and skill development. By maintaining strict quality control standards and ethical business practices, we aim to create value for OEMs, distributors, and end users across India and beyond.
                                </p>
                                <p>
                                    Our mission also includes fostering a culture of continuous learning, safety, and responsibility, empowering our workforce and contributing positively to the growth of the home appliances and motor components industry.
                                </p>
                            </div>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                                <Eye className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold text-black mb-6">Our Vision</h3>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    Our vision is to establish Raj Industries as a globally respected and trusted brand in the manufacturing of fountain pump magnets, cooler pump magnets, concealed technology pumps, and home appliances. We aspire to lead the industry through technological advancement, product innovation, and uncompromising quality.
                                </p>
                                <p>
                                    We envision expanding our presence in both domestic and international markets by developing energy-efficient, durable, and future-ready products that address the evolving needs of modern consumers and industries. By embracing sustainable manufacturing practices and investing in research and development, we aim to set new benchmarks in performance, safety, and design.
                                </p>
                                <p>
                                    Through our brands JETRO and JUSCO, we seek to build long-term partnerships, strengthen customer trust, and contribute to a smarter, more efficient, and sustainable future for the home appliances industry.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-20 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-100 mb-6">
                            <Heart className="w-8 h-8 text-blue-600" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Core Values</h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { icon: <Award />, title: "Quality First", desc: "Uncompromising commitment to product excellence" },
                            { icon: <Lightbulb />, title: "Innovation", desc: "Continuous development of better technologies and solutions" },
                            { icon: <Handshake />, title: "Integrity", desc: "Honest, transparent, and ethical business practices" },
                            { icon: <Users />, title: "Customer Focus", desc: "Building long-term relationships through trust and service" },
                            { icon: <TrendingUp />, title: "Growth & Sustainability", desc: "Responsible growth benefiting customers, employees, and partners" }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1, duration: 0.5 }}
                                whileHover={{ y: -5, scale: 1.02 }}
                                className="bg-linear-to-br from-blue-50 to-white rounded-xl p-6 border border-blue-100 hover:border-blue-600 hover:shadow-lg transition-all"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-600 text-white flex items-center justify-center mb-4">
                                    {value.icon}
                                </div>
                                <h4 className="text-xl font-bold text-black mb-2">{value.title}</h4>
                                <p className="text-slate-600">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
