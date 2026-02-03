import img1 from "./assets/ads/img-1.jpg"
import img2 from "./assets/ads/img-2.jpeg"
import img3 from "./assets/ads/img-3.jpeg"
import img4 from "./assets/ads/img-4.jpeg"
// import img5 from "./assets/ads/img-5.jpeg"
import img6 from "./assets/ads/img-6.jpeg"
import img7 from "./assets/ads/img-7.jpeg"
import img8 from "./assets/ads/img-8.jpeg"
import img9 from "./assets/ads/img-9.jpeg"

const Advertisement = () => {
    return (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 px-4">
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img9}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img7}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img1}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img2}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img8}
                        alt="gallery-photo"
                    />
                </div>
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src={img4}
                        alt="gallery-photo"
                    />
                </div>
            </div>
            <div className="grid gap-4">
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img3}
                        alt="gallery-photo"
                    />
                </div>
                {/* <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center "
                        src={img5}
                        alt="gallery-photo"
                    />
                </div> */}
                <div>
                    <img
                        className="h-auto max-w-full rounded-lg object-cover object-center"
                        src={img6}
                        alt="gallery-photo"
                    />
                </div>
            </div>
        </div>
    )
}

export default Advertisement