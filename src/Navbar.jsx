import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router";
import logo from "./assets/logo-2.png";
import { MagnifyingGlassIcon, List, X } from "@phosphor-icons/react";
import { productCategories } from "./CategoryBar";

const routes = [
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" }
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);

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

    return (
        <header className="relative z-50 backdrop-blur-lg bg-white shadow-lg">
            {/* Top Bar */}
            <section className="flex items-center px-4 sm:px-10 py-4">
                {/* Logo */}
                <NavLink to="/" className="flex items-center">
                    <img src={logo} alt="Raj Industries Logo" className="h-12 md:h-14" />
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex flex-1 justify-center gap-10">
                    {routes.map((item) => (
                        <li key={item.name}>
                            <NavLink
                                to={item.url}
                                className="text-black tracking-wider relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="ml-auto flex items-center gap-4 relative">
                    {/* 🔍 Search */}
                    <div ref={searchRef} className="relative hidden md:flex items-center">
                        {/* Input */}
                        <input
                            type="text"
                            placeholder="Search products..."
                            className={`absolute right-10 h-10 rounded-full px-4 text-sm outline-none border border-blue-200 shadow-md transition-all duration-300 ease-in-out text-black ${isSearchOpen ? "w-64 opacity-100 -translate-x-2" : "w-0 opacity-0 translate-x-6 pointer-events-none"}`}
                        />

                        {/* Icon */}
                        <button
                            onClick={() => setIsSearchOpen((prev) => !prev)}
                            className="relative z-10 w-10 h-10 rounded-full bg-white text-black border-2 border-gray-400 hover:bg-black/10 flex items-center justify-center shadow cursor-pointer transition-colors ease-in"
                        >
                            <MagnifyingGlassIcon size={20} weight="bold" />
                        </button>
                    </div>

                    {/* CTA */}
                    <button className="hidden md:block bg-linear-to-br from-black to-gray-500 text-white px-6 py-2 rounded-full font-semibold shadow hover:from-black hover:to-black transition-colors ease-in cursor-pointer">
                        Get Quote
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden text-white hover:scale-110 transition-transform"
                    >
                        <List size={28} weight="bold" />
                    </button>
                </div>
            </section>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                />
            )}

            {/* Mobile Menu */}
            <aside
                className={`fixed top-0 left-0 h-full w-80 bg-white z-50 transition-transform duration-300 shadow-xl
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
            >
                {/* Close */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 w-10 h-10 border rounded-full flex items-center justify-center hover:border-blue-600 hover:text-blue-600"
                >
                    <X size={20} />
                </button>

                <div className="p-6 pt-16">
                    <img src={logo} alt="Raj Industries Logo" className="h-12 mb-8" />

                    <ul className="space-y-5 mb-8">
                        {routes.map((item) => (
                            <li key={item.name}>
                                <NavLink
                                    to={item.url}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-700 font-semibold border-b pb-2 hover:text-blue-600"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <h3 className="font-bold text-sm uppercase tracking-wider mb-4">
                        Products
                    </h3>

                    <ul className="space-y-3 mb-8">
                        {productCategories.map((item) => (
                            <li key={item}>
                                <span className="text-slate-600 hover:text-blue-600 cursor-pointer">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold shadow hover:bg-blue-700">
                        Get Quote
                    </button>
                </div>
            </aside>
        </header>
    );
};

export default Navbar;