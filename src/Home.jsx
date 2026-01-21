import Banner from "./Banner"
import CompanyIntro from "./CompanyIntro"
import Products from "./Products"
import Features from "./Features"
import Testimonials from "./Testimonials"
import CategoryBar from "./CategoryBar"

const Home = () => {
    return (
        <>
            <CategoryBar />
            <Banner />
            <CompanyIntro />
            <Products />
            <Features />
            <Testimonials />
        </>
    )
}

export default Home