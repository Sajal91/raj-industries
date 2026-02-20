import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import logo from "./assets/logo-2.png";
import { ListIcon, XIcon } from "lucide-react";
import { products } from "./data/productData";
import { productPageData } from "./data/productPageData";

const routes = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

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
        <>
            <header className={`relative z-50 backdrop-blur-lg bg-transparent border-b border-slate-200 transition-all duration-300 py-1`}>
                {/* <div className="absolute left-0 top-0 w-1/2 h-full -z-1 bg-blue-600 rotate-35"></div> */}
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
                        <ul className="flex gap-8 xl:gap-10 items-center">
                            <li>
                                <NavLink
                                    to="/"
                                    className={`text-black tracking-wide relative group transition-colors duration-200 text-base ${location.pathname === "/" ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
                                >
                                    Home
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-0.5 bg-blue-600"
                                        initial={{ width: location.pathname === "/" ? "100%" : "0%" }}
                                        animate={{ width: location.pathname === "/" ? "100%" : "0%" }}
                                        whileHover={{ width: "100%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </NavLink>
                            </li>
                            {/* Products - unclickable with hover dropdown */}
                            <li
                                className="relative group/products cursor-pointer"
                                onMouseEnter={() => setProductsDropdownOpen(true)}
                                onMouseLeave={() => setProductsDropdownOpen(false)}
                            >
                                <span
                                    className={`cursor-default text-black tracking-wide relative inline-block transition-colors duration-200 text-base select-none ${location.pathname.startsWith("/products") ? "text-blue-600 font-semibold" : "hover:text-blue-600"} cursor-pointer`}
                                >
                                    Products
                                    {/* <ChevronDown className={`inline-block w-4 h-4 ml-0.5 align-middle transition-transform duration-200 ${productsDropdownOpen ? "rotate-180" : ""}`} /> */}
                                    <motion.span
                                        className="absolute -bottom-1 left-0 h-0.5 bg-blue-600"
                                        initial={{ width: location.pathname.startsWith("/products") ? "100%" : "0%" }}
                                        animate={{ width: location.pathname.startsWith("/products") || productsDropdownOpen ? "100%" : "0%" }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </span>
                                <AnimatePresence>
                                    {productsDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-6 left-1/2 -translate-x-1/2 pt-2 z-50"
                                        >
                                            <div className="bg-white rounded-xl shadow-xl border border-slate-200 py-2 min-w-50">
                                                {productPageData.map((product, index) => (
                                                    <NavLink
                                                        onClick={() => setProductsDropdownOpen(false)}
                                                        key={index}
                                                        to={`/products/${product.slug}`}
                                                        className={`block px-5 py-3 text-left text-sm transition-colors hover:bg-slate-50 tracking-wider ${location.pathname === `/products/${product.slug}` ? "bg-blue-50 text-blue-600 font-medium" : "text-black"}`}
                                                    >
                                                        {product.pageTitle.length > 50 ? product.pageTitle.slice(0, 50) + "…" : product.pageTitle}
                                                    </NavLink>
                                                ))}
                                                {/* <Link
                                                    to="/products"
                                                    className="block px-5 py-3 text-left text-sm font-semibold text-blue-600 hover:bg-blue-50 border-t border-slate-100 mt-1"
                                                >
                                                    View all products →
                                                </Link> */}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                            {routes.slice(1).map((item) => {
                                const isActive = location.pathname === item.url;
                                return (
                                    <li key={item.name}>
                                        <NavLink
                                            to={item.url}
                                            className={`text-black tracking-wide relative group transition-colors duration-200 text-base ${isActive ? "text-blue-600 font-semibold" : "hover:text-blue-600"}`}
                                        >
                                            {item.name}
                                            <motion.span
                                                className="absolute -bottom-1 left-0 h-0.5 bg-blue-600"
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
                        {/* CTA */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => navigate("/contact")}
                            className="hidden sm:block bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-6 py-2 rounded-full text-sm md:text-base shadow-md hover:shadow-lg transition-all cursor-pointer tracking-wider"
                        >
                            Get Quote
                        </motion.button>

                        {/* Hamburger */}
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(true)}
                            className="lg:hidden text-black p-2 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                            aria-label="Open menu"
                        >
                            <ListIcon size={24} />
                        </motion.button>
                    </div>
                </section>

            </header>
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
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white border-r border-slate-200 z-50 shadow-2xl lg:hidden overflow-y-auto"
                        >
                            {/* Header */}
                            <div className="flex items-center justify-between p-4 border-b border-slate-200 sticky top-0 bg-white z-10">
                                <img src={logo} alt="Raj Industries Logo" className="h-10" />
                                <motion.button
                                    // whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setIsOpen(false)}
                                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-slate-100 text-black transition-colors cursor-pointer"
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
                                        <motion.li
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0 }}
                                        >
                                            <NavLink
                                                to="/"
                                                onClick={() => setIsOpen(false)}
                                                className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${location.pathname === "/"
                                                    ? "bg-blue-600 text-white shadow-md"
                                                    : "text-black hover:bg-slate-100 hover:text-blue-600"
                                                    }`}
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span>Home</span>
                                                    {location.pathname === "/" && (
                                                        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />
                                                    )}
                                                </div>
                                            </NavLink>
                                        </motion.li>
                                        {/* Products - label (non-clickable) + product links */}
                                        <motion.li
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 }}
                                        >
                                            <span className="block px-4 py-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                                                Products
                                            </span>
                                            <ul className="mt-1 ml-2 space-y-1 border-l-2 border-slate-200 pl-3">
                                                {products.map((product, index) => (
                                                    <li key={index}>
                                                        <Link
                                                            to={`/products/${index}`}
                                                            onClick={() => setIsOpen(false)}
                                                            className={`block px-3 py-2 rounded-lg text-sm transition-all ${location.pathname === `/products/${index}`
                                                                ? "bg-blue-50 text-blue-600 font-medium"
                                                                : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"
                                                                }`}
                                                        >
                                                            {product.title.length > 45 ? product.title.slice(0, 45) + "…" : product.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li>
                                                    <NavLink
                                                        to="/products"
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-3 py-2 rounded-lg text-sm font-semibold transition-all ${location.pathname === "/products" && !location.pathname.match(/\/products\/\d+/)
                                                            ? "bg-blue-50 text-blue-600"
                                                            : "text-blue-600 hover:bg-blue-50"
                                                            }`}
                                                    >
                                                        View all products →
                                                    </NavLink>
                                                </li>
                                            </ul>
                                        </motion.li>
                                        {routes.slice(1).map((item, index) => {
                                            const isActive = location.pathname === item.url;
                                            return (
                                                <motion.li
                                                    key={item.name}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 + index * 0.1 }}
                                                >
                                                    <NavLink
                                                        to={item.url}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${isActive
                                                            ? "bg-blue-600 text-white shadow-md"
                                                            : "text-black hover:bg-slate-100 hover:text-blue-600"
                                                            }`}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <span>{item.name}</span>
                                                            {isActive && (
                                                                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="w-2 h-2 bg-white rounded-full" />
                                                            )}
                                                        </div>
                                                    </NavLink>
                                                </motion.li>
                                            );
                                        })}
                                    </ul>
                                </nav>

                                {/* Product Categories */}
                                {/* <div className="mb-8">
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
                                                <span className="block px-4 py-2 text-slate-600 hover:text-blue-600 hover:bg-slate-100 rounded-lg cursor-pointer transition-colors">
                                                    {item}
                                                </span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div> */}

                                {/* Mobile CTA */}
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => setIsOpen(false)}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                                >
                                    Get Quote
                                </motion.button>

                                {/* Mobile Search */}
                                {/* <div className="mt-4">
                                    <div className="relative">
                                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                                        <input
                                            type="text"
                                            placeholder="Search products..."
                                            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-black placeholder:text-slate-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none text-sm"
                                        />
                                    </div>
                                </div> */}
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;