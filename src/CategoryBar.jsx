export const productCategories = [
    "Concealed Pumps",
    "Magnets",
    "Pump Components",
    "Industrial Solutions",
    "Custom Solutions",
    "Technical Support"
]

const CategoryBar = () => {

    return <div className="sticky z-999 top-0 hidden lg:flex items-center px-4 sm:px-10 py-3 bg-slate-900/95">
        <ul className="flex flex-1 justify-center space-x-8">
            {productCategories.map((item) => (
                <li key={item}>
                    <a className="hover:text-blue-400 text-white/90 font-medium text-sm cursor-pointer transition-colors duration-200 uppercase tracking-wider">
                        {item}
                    </a>
                </li>
            ))}
        </ul>
    </div>
}

export default CategoryBar