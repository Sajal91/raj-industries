import banner1 from "./assets/banner-1.png";

const CompanyIntro = () => {
    return (
        <section className="py-20 px-6 sm:px-10 bg-blue-200 h-full">
            <div className="max-w-7xl mx-auto h-full">
                <div className="grid lg:grid-cols-2 gap-12 items-center h-full">
                    {/* Image Section - Left */}
                    <div className="relative w-full aspect-4/3">
                        <div className="absolute z-1 rounded-xl overflow-hidden shadow-2xl">
                            <img
                                src={banner1}
                                alt="Raj Industries - Industrial Solutions"
                                className="w-full h-full object-cover"
                            />
                            {/* Overlay gradient for depth */}
                            <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent"></div>
                        </div>
                        {/* Decorative element */}
                        <div className="absolute rounded-xl w-full h-full inset-0 -top-3 -left-3 bg-blue-950 aspect-4/3 max-h-80.5"></div>
                        {/* <div className="absolute inset-0 -top-6 -right-6 w-32 h-32 bg-black"></div> */}
                    </div>

                    {/* Content Section - Right */}
                    <div className="lg:pl-8">
                        {/* <div className="mb-6">
                            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                                About Raj Industries
                            </span>
                        </div> */}

                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Leading Provider of Industrial
                            <span className="text-blue-600"> Pump & Magnet Solutions</span>
                        </h2>

                        <div className="space-y-4 text-lg text-slate-600 leading-relaxed mb-8">
                            <p>
                                Raj Industries is a leading manufacturer and importer of high-quality home appliance products, proudly serving the Indian market since <span className="font-semibold">2005</span>. With <span className="font-semibold">20 years of experience</span> in the home appliances and motor components industry, we have built a strong reputation for reliability, innovation, and consistent quality.
                            </p>
                            <p>
                                We are recognized as <span className="font-semibold">India’s largest manufacturer of fountain pump magnets</span> and offer the <span className="font-semibold">widest range of cooler and fountain pump magnets</span> available in the country. Our products are trusted by OEMs, distributors, and service professionals across India.
                            </p>
                            <p>
                                Operating from our advanced manufacturing facility in <span className="font-semibold">Tronica City, Uttar Pradesh</span>, we continuously invest in technology, skilled manpower, and quality control systems to meet the evolving needs of the market.
                            </p>
                        </div>

                        {/* Key Highlights */}
                        <div className="grid sm:grid-cols-2 gap-6 mb-8">
                            <div className="flex items-start">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">ISI Certified</h4>
                                    <p className="text-sm text-slate-600">Quality assured products</p>
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Expert Team</h4>
                                    <p className="text-sm text-slate-600">Experienced engineers</p>
                                </div>
                            </div> */}
                            <div className="flex items-start">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">Fast Delivery</h4>
                                    <p className="text-sm text-slate-600">On-time shipments</p>
                                </div>
                            </div>
                            {/* <div className="flex items-start">
                                <div className="shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-1">24/7 Support</h4>
                                    <p className="text-sm text-slate-600">Always available</p>
                                </div>
                            </div> */}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-1">
                                Learn More About Us
                            </button>
                            <button className="bg-white hover:bg-slate-50 text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-md font-semibold transition-all duration-200">
                                Our Products
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CompanyIntro;

