import Banner from "./Banner"
import CompanyIntro from "./CompanyIntro"
import Products from "./Products"
import Features from "./Features"
import Testimonials from "./Testimonials"
import Advertisement from "./Advertisement"
import { Helmet } from "react-helmet-async"

const Home = ({ setIsModalOpen, setProduct }) => {
    return (
        <>
            <Helmet>
                <title>Premium Industrial Solutions | Quality Pumps & Magnets</title>
                <meta name="description" content="Leading manufacturer of industrial pumps and magnets with 20 years of excellence. Discover reliable, high-performance solutions for your business today." />
                <meta name="keyword" content="Leading manufacturer of industrial pumps and magnets with 20 years of excellence. Discover reliable, high-performance solutions for your business today." />

                <meta property="og:url" content="https://rajtronicacity.com" />
                <meta property="og:title" content="Premium Industrial Solutions | Quality Pumps & Magnets" />
                <meta property="og:description" content="Trusted by industry leaders for 20 years. Explore our range of high-performance industrial equipment." />
                <meta property="og:image" content="./favicon.png" />

                <link rel="canonical" href="https://rajtronicacity.com/" />
            </Helmet>

            {/* <CategoryBar /> */}
            <Banner />
            <CompanyIntro />
            <Advertisement />
            <Products setProduct={setProduct} setIsModalOpen={setIsModalOpen} />
            <Features />
            <Testimonials />
        </>
    )
}

export default Home