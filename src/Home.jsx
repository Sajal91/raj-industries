import Banner from "./Banner"
import CompanyIntro from "./CompanyIntro"
import Products from "./Products"
import Features from "./Features"
import Testimonials from "./Testimonials"
import CategoryBar from "./CategoryBar"
import Advertisement from "./Advertisement"

const Home = ({ setIsModalOpen, setProduct }) => {
    return (
        <>
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