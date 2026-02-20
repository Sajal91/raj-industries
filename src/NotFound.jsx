import { motion } from "framer-motion";
import { Link } from "react-router";
import { Home, ArrowLeft, Search } from "lucide-react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <Helmet>
                <title>Page Not Found | Raj Industries</title>
                <meta name="description" content="The page you are looking for could not be found. Return to Raj Industries homepage." />
            </Helmet>

            <section className="flex-1 flex flex-col items-center justify-center py-20 px-6 sm:px-10 bg-slate-50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-2xl mx-auto"
                >
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-8xl sm:text-9xl font-bold text-blue-600 mb-4 leading-none"
                    >
                        404
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        className="text-2xl md:text-3xl font-bold mb-4 text-blue-600"
                    >
                        Page Not Found
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-black tracking-wider text-lg mb-10"
                    >
                        The page you are looking for doesn't exist or has been moved. Let's get you back on track.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                        >
                            <Home className="w-5 h-5" />
                            Back to Home
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-blue-700 font-semibold px-6 py-3 rounded-full hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Contact Us
                        </Link>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    );
};

export default NotFound;
