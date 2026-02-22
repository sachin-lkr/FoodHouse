import Category from "../Category/Categoury";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import OurProducts from "../OurProducts/OurProducts";
import OurValue from "../OurValue/OurValue";
import Process from "../Process/Process";
import Testimonial from "../Testimonial/Testimonial";

function Home(){
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Category/>
            <OurValue/>
            <OurProducts/>
            <Discount/>
            <Process/>
            <Testimonial/>
            <Footer/>

        </div>
    )
}
export default Home;