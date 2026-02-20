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
                <title>ISI Certified Concealed Pumps & Industrial Magnets | Raj Industries</title>
                <meta name="description" content="Raj Industries is an ISI certified manufacturer of concealed pumps and industrial magnets, delivering reliable quality, durability, and industrial-grade performance." />
                <meta name="keyword" content="Water cooler pump, Water cooler pump manufacturer, Water cooler pump supplier, JUSCO water cooler pump, JUSCO pump dealer, Water cooler pump parts, Cooler pump spare parts, Chiller pump parts supplier." />

                <meta property="og:url" content="https://rajtronicacity.com" />
                <meta property="og:title" content="ISI Certified Concealed Pumps & Industrial Magnets | Raj Industries" />
                <meta property="og:description" content="Raj Industries is an ISI certified manufacturer of concealed pumps and industrial magnets, delivering reliable quality, durability, and industrial-grade performance." />
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