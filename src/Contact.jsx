import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react"

const Contact = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            alert("Thank you for your message! We'll get back to you soon.")
            setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
        }, 1500)
    }

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Phone",
            details: ["+91 1234567890", "+91 9876543210"],
            color: "from-blue-500 to-blue-600"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "Email",
            details: ["info@rajindustries.com", "sales@rajindustries.com"],
            color: "from-green-500 to-green-600"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Address",
            details: ["Tronica City, Uttar Pradesh", "India - 201102"],
            color: "from-red-500 to-red-600"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Business Hours",
            details: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"],
            color: "from-purple-500 to-purple-600"
        }
    ]

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
        <div className="min-h-screen bg-linear-to-b from-white via-slate-50 to-white">
            {/* Hero Section */}
            {/* <section className="relative py-20 px-6 sm:px-10 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 text-white overflow-hidden">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 opacity-20"
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
                            Get In Touch
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8"
                        >
                            We're here to help! Reach out to us for inquiries, quotes, or any questions about our products and services.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="w-24 h-1 bg-white mx-auto rounded-full"
                        ></motion.div>
                    </motion.div>
                </div>
            </section> */}

            {/* Contact Info Cards */}
            {/* <section className="py-16 px-6 sm:px-10 -mt-10">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }}
                                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all border border-slate-200 hover:border-blue-600 backdrop-blur-sm"
                            >
                                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${info.color} text-white mb-4 shadow-lg`}>
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold text-black mb-3">{info.title}</h3>
                                {info.details.map((detail, idx) => (
                                    <p key={idx} className="text-slate-700 text-sm mb-1">{detail}</p>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section> */}

            {/* Contact Form Section */}
            <section ref={ref} className="py-20 px-6 sm:px-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="grid lg:grid-cols-2 gap-12"
                    >
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200 backdrop-blur-sm"
                        >
                            <h2 className="text-3xl font-bold text-black mb-6">Send us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Enter Your Name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="Provide your email"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                                            Phone
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                            placeholder="+91 1234567890"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                                        placeholder="Product Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                                        placeholder="Tell us about your requirements..."
                                    ></textarea>
                                </div>

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-blue-600 hover:from-cyan-400 hover:to-blue-400 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                                            />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Additional Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="space-y-6"
                        >
                            <div className="bg-linear-to-br from-blue-600 to-blue-700 rounded-2xl p-8 text-white shadow-xl">
                                <h3 className="text-2xl font-bold mb-4">Why Contact Us?</h3>
                                <ul className="space-y-3">
                                    {[
                                        "Get expert advice on product selection",
                                        "Request custom solutions for your needs",
                                        "Receive competitive quotes",
                                        "Schedule a factory visit",
                                        "Learn about bulk order discounts"
                                    ].map((item, index) => (
                                        <motion.li
                                            key={index}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: 0.5 + index * 0.1 }}
                                            className="flex items-start gap-3"
                                        >
                                            <span className="text-blue-100 mt-1">✓</span>
                                            <span>{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-black mb-4">Quick Response</h3>
                                <p className="text-slate-700 mb-4">
                                    We typically respond to all inquiries within 24 hours during business days.
                                </p>
                                <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                                    <Globe className="w-5 h-5" />
                                    <span>Available Worldwide</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default Contact
