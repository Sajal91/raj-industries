import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
    Magnet,
    CheckCircle2,
    Zap,
    Shield,
    Factory,
    Thermometer,
    Droplets,
    Truck,
    ArrowRight,
} from "lucide-react";

const PumpMagnet = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const benefits = [
        "Motor efficiency",
        "Stable rotation speed",
        "Reduced power loss",
        "Lower heat generation",
        "Longer pump life",
    ];

    const whyChoose = [
        "Strong and stable magnetic field",
        "Long operational life",
        "Precision-engineered dimensions",
        "Suitable for continuous motor operation",
        "Reliable performance under load",
        "Competitive wholesale pricing",
    ];

    const applications = [
        "Water pumps",
        "Desert cooler pumps",
        "Submersible pumps",
        "Domestic motor pumps",
        "Industrial circulation pumps",
        "Electric motor assemblies",
        "Replacement motor repair parts",
    ];

    const technicalFeatures = [
        "High magnetic strength",
        "Heat resistant material",
        "Corrosion-resistant surface",
        "Precision sizing for pump motors",
        "Compatible with multiple motor designs",
        "Suitable for continuous duty pumps",
    ];

    const bulkClients = [
        "Pump manufacturers",
        "OEM suppliers",
        "Motor assembly units",
        "Repair workshops",
        "Industrial distributors",
    ];

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>Pump Magnet by Raj Industries | High Quality Motor Magnets</title>
                <meta
                    name="description"
                    content="Buy high-quality pump magnets from Raj Industries. Durable motor magnets for water pumps, cooler pumps & industrial use. Imported & premium grade options available."
                />
                <link rel="canonical" href="https://rajtronicacity.com/products/pump-magnet" />
            </Helmet>

            {/* Hero */}
            <section className="relative py-20 px-6 sm:px-10 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white/10 backdrop-blur mb-6"
                        >
                            <Magnet className="w-10 h-10" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            Pump Magnets
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6">
                            High Performance Motor Magnets by Raj Industries
                        </p>
                        <div className="w-24 h-1 bg-white mx-auto rounded-full" />
                    </motion.div>
                </div>
            </section>

            {/* Intro */}
            <section ref={ref} className="py-16 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Premium Quality Magnets for Water Pumps & Electric Motors
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-6" />
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="prose prose-lg text-slate-600 space-y-4 text-center max-w-3xl mx-auto"
                    >
                        <motion.p variants={itemVariants}>
                            Raj Industries supplies and manufactures high-quality pump magnets used in water pumps, cooler pumps, and electric motor systems. These magnets play a critical role in ensuring smooth motor rotation, efficient energy transfer, and long-lasting pump performance.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            We offer both in-house manufactured magnets and imported high-grade magnets sourced from China, ensuring a wide range of options to meet different technical and budget requirements.
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-medium text-slate-800">
                            If you are looking for reliable and durable magnets for pump motors, Raj Industries provides quality you can trust.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* What is a Pump Magnet? */}
            <section className="py-16 px-6 sm:px-10 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Magnet className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            What is a Pump Magnet?
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid lg:grid-cols-2 gap-10 items-start"
                    >
                        <div>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                A pump magnet is a key component used inside electric motors of water pumps. It helps generate the magnetic field required for motor rotation and smooth mechanical movement.
                            </p>
                            <p className="text-slate-700 font-medium mb-4">High-quality magnets improve:</p>
                            <ul className="space-y-2">
                                {benefits.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                            <p className="text-slate-600 leading-relaxed">
                                Without a strong and balanced magnet, pump motors cannot perform efficiently.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Types of Pump Magnets */}
            <section className="py-16 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Types of Pump Magnets We Offer
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Raj Industries supplies multiple types of motor magnets suitable for different pump applications.
                        </p>
                    </motion.div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">1. Ferrite Magnets for Pumps</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    Cost-effective solution
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    Durable and corrosion-resistant
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    Suitable for cooler pumps and small water pumps
                                </li>
                            </ul>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:border-blue-200 hover:shadow-lg transition-all"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                <Factory className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">2. High-Performance Imported Magnets (China Sourced)</h3>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    Strong magnetic strength
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    Better energy efficiency
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    High temperature resistance
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                    Ideal for heavy-duty and high-speed motors
                                </li>
                            </ul>
                            <p className="text-sm text-slate-500 mt-4">
                                All imported magnets are quality-checked before supply to ensure consistent performance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Why Choose Raj Industries? */}
            <section className="py-16 px-6 sm:px-10 bg-linear-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Why Choose Pump Magnets from Raj Industries?
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            We focus on quality, durability, and performance. Every magnet is tested for magnetic strength and structural integrity.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
                    >
                        {whyChoose.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-slate-700">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                    <p className="text-slate-600 text-center mt-8">
                        We serve pump manufacturers, motor repair shops, cooler manufacturers, and industrial clients.
                    </p>
                </div>
            </section>

            {/* Applications */}
            <section className="py-16 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Droplets className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Applications of Pump Magnets
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 mb-8 max-w-2xl"
                    >
                        Our motor magnets are widely used in:
                    </motion.p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                        {applications.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100"
                            >
                                <div className="w-2 h-2 rounded-full bg-blue-600 shrink-0" />
                                <span className="text-slate-700">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                    <p className="text-slate-600 mt-6">
                        These magnets ensure efficient motor functionality across various pump categories.
                    </p>
                </div>
            </section>

            {/* Quality Assurance & Technical Features */}
            <section className="py-16 px-6 sm:px-10 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                                <Shield className="w-7 h-7 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-black mb-4">
                                Quality Assurance & Sourcing
                            </h2>
                            <p className="text-slate-600 mb-6 leading-relaxed">
                                Raj Industries manufactures selected magnet types and also imports premium-grade pump magnets from trusted suppliers in China. This allows us to provide:
                            </p>
                            <ul className="space-y-2 text-slate-600">
                                {["Multiple quality grades", "Bulk supply options", "Custom size availability", "Cost-effective pricing solutions"].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 mt-4">
                                Every batch undergoes inspection for magnetic strength, shape accuracy, and durability before dispatch.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200"
                        >
                            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6">
                                <Thermometer className="w-7 h-7 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold text-black mb-4">
                                Technical Features
                            </h2>
                            <ul className="space-y-2 text-slate-600">
                                {technicalFeatures.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 mt-6">
                                These features ensure stable and long-term pump performance.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Bulk Supply & Wholesale */}
            <section className="py-16 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-8"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Truck className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Bulk Supply & Wholesale Orders
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 mb-6"
                    >
                        Raj Industries supplies pump magnets in bulk quantities for:
                    </motion.p>
                    <div className="flex flex-wrap gap-3">
                        {bulkClients.map((item, idx) => (
                            <span
                                key={idx}
                                className="px-4 py-2 rounded-full bg-blue-50 text-blue-800 border border-blue-100 font-medium"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                    <p className="text-slate-600 mt-6">
                        We offer competitive pricing and reliable delivery for domestic and commercial clients.
                    </p>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 px-6 sm:px-10 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Order Pump Magnets from Raj Industries
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            If you need high-quality magnets for water pumps or electric motors, Raj Industries offers durable and performance-tested solutions. Whether you prefer locally manufactured magnets or imported high-strength magnets from China, we provide options that match your technical requirements and budget.
                        </p>
                        <p className="text-blue-100 mb-8">
                            Contact us today for pricing, bulk orders, and product specifications.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default PumpMagnet;
