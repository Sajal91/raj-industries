import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo-2.png";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { productCategories } from "./CategoryBar";
import { ListIcon, XIcon, Search } from "lucide-react";

const routes = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();

    // Close search on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location.pathname]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <header className={`z-50 backdrop-blur-lg bg-slate-900/95 transition-all duration-300 ${isScrolled ? "shadow-xl shadow-black/20" : "shadow-lg shadow-black/10"}`}>
            {/* Top Bar */}
            <section className="flex items-center px-4 sm:px-6 md:px-10 py-3 md:py-4">
                {/* Logo */}
                <NavLink to="/" className="flex items-center shrink-0">
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        src={logo}
                        alt="Raj Industries Logo"
                        className="h-10 sm:h-12 md:h-14"
                    />
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex flex-1 justify-center items-center">
                    <ul className="flex gap-8 xl:gap-10">
                        {routes.map((item) => {
                            const isActive = location.pathname === item.url;
                            return (
                                <li key={item.name}>
                                    <NavLink
                                        to={item.url}
                                        className={`text-slate-300 tracking-wider relative group font-medium transition-colors duration-200 ${
                                            isActive ? "text-cyan-400 font-semibold" : "hover:text-cyan-400"
                                        }`}
                                    >
                                        {item.name}
                                        {/* Active indicator */}
                                        <motion.span
                                            className="absolute -bottom-1 left-0 h-0.5 bg-linear-to-r from-cyan-400 to-blue-500"
                                            initial={{ width: isActive ? "100%" : "0%" }}
                                            animate={{ width: isActive ? "100%" : "0%" }}
                                            whileHover={{ width: "100%" }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                {/* Right Actions */}
                <div className="ml-auto flex items-center gap-2 sm:gap-3 md:gap-4">
                    {/* 🔍 Search */}
                    <div ref={searchRef} className="relative hidden sm:flex items-center">
                        {/* Input */}
                        <AnimatePresence>
                            {isSearchOpen && (
                                <motion.input
                                    initial={{ width: 0, opacity: 0, x: 20 }}
                                    animate={{ width: 200, opacity: 1, x: 0 }}
                                    exit={{ width: 0, opacity: 0, x: 20 }}
                                    transition={{ duration: 0.3 }}
                                    type="text"
                                    placeholder="Search products..."
                                    className="absolute right-10 h-9 md:h-10 rounded-full px-4 text-sm outline-none border border-cyan-500/50 shadow-md text-white bg-slate-800 placeholder:text-slate-400 focus:border-cyan-400"
                                    autoFocus
                                />
                            )}
                        </AnimatePresence>

                        {/* Icon */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsSearchOpen((prev) => !prev)}
                            className={`relative z-10 w-9 h-9 md:w-10 md:h-10 rounded-full bg-slate-800 text-slate-300 border-2 ${
                                isSearchOpen ? "border-cyan-400" : "border-slate-700"
                            } hover:border-cyan-400 flex items-center justify-center shadow-md cursor-pointer transition-colors`}
                        >
                            <Search size={18} className={isSearchOpen ? "text-cyan-400" : ""} />
                        </motion.button>
                    </div>

                    {/* CTA */}
                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden sm:block bg-linear-to-r from-cyan-500 to-blue-500 text-white px-4 md:px-6 py-2 rounded-full font-semibold text-sm md:text-base shadow-md hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
                    >
                        Get Quote
                    </motion.button>

                    {/* Hamburger */}
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-slate-300 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                        aria-label="Open menu"
                    >
                        <ListIcon size={24} />
                    </motion.button>
                </div>
            </section>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/70 z-40 lg:hidden"
                        />
                        <motion.aside
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-slate-900 border-r border-slate-800 z-50 shadow-2xl lg:hidden overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-slate-800 sticky top-0 bg-slate-900 z-10">
                                <img src={logo} alt="Raj Industries Logo" className="h-10" />
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-800 text-slate-300 transition-colors"
                                    aria-label="Close menu"
                                >
                                    <XIcon size={20} />
                                </motion.button>
                            </div>

                            {/* Menu Content */}
                            <div className="p-6">
                                {/* Navigation Links */}
                                <nav className="mb-8">
                                    <ul className="space-y-2">
                                        {routes.map((item, index) => {
                                            const isActive = location.pathname === item.url;
                                            return (
                                                <motion.li
                                                    key={item.name}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.1 }}
                                                >
                                                    <NavLink
                                                        to={item.url}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
                                                            isActive
                                                                ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white shadow-md shadow-cyan-500/20"
                                                                : "text-slate-300 hover:bg-slate-800 hover:text-cyan-400"
                                                        }`}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span>{item.name}</span>
                                                            {isActive && (
                                                                <motion.div
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    className="w-2 h-2 bg-white rounded-full"
                                                                />
                                                            )}
                                                        </div>
                                                    </NavLink>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </nav>

                                {/* Product Categories */}
                                <div className="mb-8">
                                    <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-slate-500 px-4">
                                        Product Categories
                                    </h3>
                                    <ul className="space-y-2">
                                        {productCategories.map((item, index) => (
                                            <motion.li
                                                key={item}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + index * 0.05 }}
                                            >
                                                <span className="block px-4 py-2 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Mobile CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-linear-to-r from-cyan-500 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 transition-all"
                                >
                                    Get Quote
                                </motion.button>

                                {/* Mobile Search */}
                                <div className="mt-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 text-white placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Navbar;