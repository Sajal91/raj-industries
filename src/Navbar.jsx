import { useState } from "react";
import { NavLink } from "react-router";
import logo from "./assets/logo-2.png";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";

const routes = [
    { name: "Menu", url: "/" },
    { name: "About", url: "/about" },
    { name: "Blogs", url: "/blogs" },
    { name: "Contact", url: "/contact" }
]

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white tracking-wide relative z-50">
            {/* Top Bar */}
            <section className="relative flex items-center px-4 sm:px-10 py-2">
                {/* Logo */}
                <NavLink to="/">
                    <img src={logo} alt="logo" className="w-36" />
                </NavLink>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex flex-1 justify-center space-x-8">
                    {routes.map((item) => (
                        <li key={item.name}>
                            <NavLink to={item.url} className="hover:text-[#111] text-slate-900 font-medium text-[15px] cursor-pointer">
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Right Actions */}
                <div className="ml-auto flex items-center gap-4">
                    <button className="text-[15px] font-medium text-black/60 hover:text-black cursor-pointer">
                        <MagnifyingGlassIcon size={30} weight="bold" />
                    </button>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(true)}
                        className="lg:hidden"
                    >
                        {/* <svg className="w-7 h-7 fill-black" viewBox="0 0 20 20">
                            <path d="M3 5h14M3 10h14M3 15h14" />
                        </svg> */}
                        menu
                    </button>
                </div>
            </section>

            <section className="relative hidden lg:flex items-center px-4 sm:px-10 py-2 bg-[#111]">
                <ul className="flex flex-1 justify-center space-x-8">
                    {[
                        "Category 1",
                        "Category 2",
                        "Category 3",
                        "Category 4",
                        "Category 5",
                        "Category 6"
                    ].map((item) => (
                        <li key={item}>
                            <a className="hover:text-white text-white/90 font-medium text-[15px] cursor-pointer">
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
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
                className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:hidden`}
            >
                {/* Close Button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 w-9 h-9 border rounded-full flex items-center justify-center"
                >
                    ✕
                </button>

                <div className="p-6">
                    <img src={logo} alt="logo" className="w-36 mb-6" />

                    <ul className="space-y-4">
                        {[
                            "Breakfast",
                            "Salads",
                            "Sides",
                            "Treats",
                            "Drinks",
                            "Kid's Meals",
                            "Catering",
                        ].map((item) => (
                            <li key={item}>
                                <a
                                    onClick={() => setIsOpen(false)}
                                    className="block text-slate-600 hover:text-[#111] cursor-pointer"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </header>
    );
};

export default Navbar;