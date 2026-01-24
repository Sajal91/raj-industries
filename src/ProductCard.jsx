import { BadgeInfo } from 'lucide-react'

const ProductCard = ({ product }) => {
    const { title, image, discount, discountedPrice, price } = product

    const handleAddToCart = () => {
        console.log(`Add ${title} to cart`)
    }

    const handleShowProductInfo = () => {
        console.log(`View details for ${title}`)
    }

    return (
        <div className="rounded-2xl w-full max-w-75 border border-blue-100 bg-white p-1.5 cursor-pointer hover:scale-105 transition-all ease-in">
            <div className="relative flex h-60 w-full items-center justify-center rounded-xl bg-black p-4">
                <img src={image} alt={`${title} image`} className="max-h-full max-w-full object-contain" />
                {discount && (
                    <span className="absolute left-2 top-2 rounded-md bg-blue-600 px-2 py-1 text-sm text-white">
                        -{discount}%
                    </span>
                )}
            </div>

            <div className="p-2 pt-0">
                <h3 className="my-5 line-clamp-2 text-sm font-semibold sm:h-12">{title}</h3>

                <div className="mb-8 flex items-center">
                    <span className="mr-2 text-lg font-semibold text-blue-600">${price}</span>
                    {discountedPrice && (
                        <span className="font-medium text-gray-400 line-through">${discountedPrice}</span>
                    )}
                </div>

                <div className="flex gap-2.5">
                    <button
                        onClick={handleAddToCart}
                        className="w-full rounded-md bg-black py-1.5 font-medium text-white hover:bg-black/80 focus:outline-white cursor-pointer"
                    >
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard