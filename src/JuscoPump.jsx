import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router";
import {
    Droplets,
    CheckCircle2,
    Zap,
    Shield,
    Factory,
    Thermometer,
    Wrench,
    ArrowRight,
} from "lucide-react";

const JuscoPump = () => {
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

    const performanceHighlights = [
        "High pressure water output",
        "Fast water lifting capability",
        "Strong suction performance",
        "Continuous duty motor operation",
        "Stable and vibration-free functioning",
    ];

    const qualityPoints = [
        "Long motor lifespan",
        "Heat resistance during extended use",
        "Corrosion-resistant body",
        "Reliable day-to-day performance",
    ];

    const efficiencyBenefits = [
        "Low power consumption",
        "Reduced heat buildup",
        "Improved motor durability",
        "Cost-effective long-term operation",
    ];

    const constructionFeatures = [
        "Strong outer casing",
        "Rust-resistant components",
        "High-quality internal motor parts",
        "Reliable sealing system",
    ];

    const applications = [
        "Domestic water supply",
        "Overhead tank filling",
        "Garden irrigation systems",
        "Agricultural water transfer",
        "Commercial water circulation",
        "Workshop and industrial water usage",
    ];

    const specs = [
        { label: "Brand", value: "JUSCO" },
        { label: "Manufacturer", value: "Raj Industries" },
        { label: "Voltage", value: "220V–240V" },
        { label: "Frequency", value: "50/60 Hz" },
        { label: "Motor Type", value: "Heavy-Duty Electric Motor" },
        { label: "Operation Type", value: "Continuous Use" },
        { label: "Application", value: "Residential, Commercial & Industrial" },
    ];

    const whyChoose = [
        "Strong and stable water pressure",
        "Energy-efficient motor design",
        "Trusted manufacturing by Raj Industries",
        "Durable and corrosion-resistant build",
        "Low maintenance requirements",
        "Suitable for multiple water applications",
    ];

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>JUSCO Water Pump by Raj Industries | High Power Pumps</title>
                <meta
                    name="description"
                    content="Buy high-quality pump magnets from Raj Industries. Durable motor magnets for water pumps, cooler pumps & industrial use. Imported & premium grade options available."
                />
                <meta
                    name="keywords"
                    content="JUSCO water pump for cooler, Industrial water cooler pump, Commercial water cooler pump, Desert cooler pump motor, Water dispenser pump, Cooling system pump, Refrigeration chiller pump, Water circulation pump, Buy water cooler pump, Best water cooler pump price, JUSCO pump price, Water cooler pump near me, Cooler pump parts online, Wholesale water cooler pump, Bulk water cooler pump supplier."
                />
                <meta property="og:url" content="https://rajtronicacity.com/products/jusco-pump" />
                <meta property="og:title" content="JUSCO Water Pump by Raj Industries | High Power Pumps" />
                <meta property="og:description" content="Buy high-quality pump magnets from Raj Industries. Durable motor magnets for water pumps, cooler pumps & industrial use. Imported & premium grade options available." />
                <link rel="canonical" href="https://rajtronicacity.com/products/jusco-pump" />
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
                            <Droplets className="w-10 h-10" />
                        </motion.div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                            JUSCO Water Pump
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto mb-6">
                            High Pressure Performance by Raj Industries
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
                            Advanced Water Pumping Solutions for Residential & Industrial Use
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
                            The JUSCO Water Pump, proudly manufactured by Raj Industries, is engineered to deliver powerful water pressure, long operational life, and superior energy efficiency. Designed for demanding environments, JUSCO pumps are ideal for residential water systems, agricultural needs, commercial setups, and light industrial applications.
                        </motion.p>
                        <motion.p variants={itemVariants}>
                            Raj Industries brings years of manufacturing expertise to ensure that every JUSCO pump meets high-quality standards for durability, safety, and consistent performance.
                        </motion.p>
                        <motion.p variants={itemVariants} className="font-medium text-slate-800">
                            If you are looking for a reliable and high-performance water pump, JUSCO is built to exceed expectations.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Built for High Pressure & Strong Water Flow */}
            <section className="py-16 px-6 sm:px-10 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Zap className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Built for High Pressure & Strong Water Flow
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
                                The JUSCO water pump is specially designed to generate strong water pressure while maintaining smooth and stable flow. Whether you need water transfer, irrigation support, or overhead tank filling, this pump provides efficient performance without interruption.
                            </p>
                            <p className="text-slate-700 font-medium mb-4">Performance Highlights:</p>
                            <ul className="space-y-2">
                                {performanceHighlights.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        <span className="text-slate-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
                            <p className="text-slate-600 leading-relaxed">
                                This makes JUSCO one of the best heavy-duty water pumps in its category.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Manufactured by Raj Industries – Trusted Quality */}
            <section className="py-16 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
                                <Factory className="w-7 h-7 text-blue-600" />
                            </div>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black text-center">
                                Manufactured by Raj Industries – Trusted Quality
                            </h2>
                        </div>
                        <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                            Raj Industries is known for producing reliable and durable pumping solutions. Each JUSCO pump is manufactured using precision engineering and quality-tested components to ensure:
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
                    >
                        {qualityPoints.map((item, idx) => (
                            <div
                                key={idx}
                                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-slate-700">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                    <p className="text-slate-600 text-center mt-8">
                        With strict quality control processes, Raj Industries ensures that every JUSCO pump delivers dependable results.
                    </p>
                </div>
            </section>

            {/* Energy Efficient & Heavy-Duty Construction - two cards */}
            <section className="py-16 px-6 sm:px-10 bg-linear-to-b from-slate-50 to-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                <Zap className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Energy Efficient Motor Technology</h3>
                            <p className="text-slate-600 mb-6">
                                Efficiency matters, especially when pumps run for extended hours. The JUSCO water pump features an optimized motor system designed to reduce electricity consumption while maintaining powerful performance.
                            </p>
                            <p className="text-slate-700 font-medium mb-3">Key Efficiency Benefits:</p>
                            <ul className="space-y-2 text-slate-600">
                                {efficiencyBenefits.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 mt-4">
                                This makes JUSCO pumps suitable for both home water supply and commercial systems.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-200 shadow-lg"
                        >
                            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-5">
                                <Wrench className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-black mb-4">Heavy-Duty Construction for Long Life</h3>
                            <p className="text-slate-600 mb-6">
                                Durability is a core strength of JUSCO pumps. Manufactured with robust materials, the pump body is designed to withstand pressure, moisture, and regular usage.
                            </p>
                            <p className="text-slate-700 font-medium mb-3">Construction Features:</p>
                            <ul className="space-y-2 text-slate-600">
                                {constructionFeatures.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-600 mt-4">
                                This ensures extended service life even in challenging environments.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Wide Range of Applications */}
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
                            Wide Range of Applications
                        </h2>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-slate-600 mb-8 max-w-2xl"
                    >
                        JUSCO pumps are versatile and suitable for multiple water management needs. Ideal for:
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
                        No matter the application, JUSCO water pumps deliver consistent and efficient performance.
                    </p>
                </div>
            </section>

            {/* Technical Specifications */}
            <section className="py-16 px-6 sm:px-10 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-10"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center">
                            <Thermometer className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Technical Specifications
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 max-w-2xl"
                    >
                        <table className="w-full">
                            <tbody>
                                {specs.map((row, idx) => (
                                    <tr
                                        key={idx}
                                        className={idx % 2 === 0 ? "bg-slate-50" : "bg-white"}
                                    >
                                        <td className="px-6 py-4 font-semibold text-slate-700 w-1/3">
                                            {row.label}
                                        </td>
                                        <td className="px-6 py-4 text-slate-600">{row.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose JUSCO Water Pump? */}
            <section className="py-16 px-6 sm:px-10 bg-white">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-6">
                            <Shield className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Why Choose JUSCO Water Pump?
                        </h2>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full mb-4" />
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Choosing the right pump ensures long-term reliability and performance. JUSCO stands out because of:
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
                                className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all"
                            >
                                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-slate-700">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                    <p className="text-slate-600 text-center mt-8">
                        JUSCO combines power, performance, and reliability in one efficient pumping solution.
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
                            Order JUSCO Water Pump Today
                        </h2>
                        <p className="text-blue-100 text-lg mb-8">
                            Upgrade your water management system with the powerful and dependable JUSCO Water Pump manufactured by Raj Industries. Designed for strength, efficiency, and long-lasting operation, JUSCO pumps provide reliable performance for residential and commercial use.
                        </p>
                        <p className="text-blue-100 mb-8">
                            Choose JUSCO for powerful water pressure, efficient energy use, and trusted manufacturing quality.
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

export default JuscoPump;
