
import Achievements from "../layouts/Achievements"
import Banner from "../layouts/Banner"
import Experience from "../layouts/Experience"
import Offer from "../layouts/Offer"
import Project from "../layouts/Project"
import Review from "../layouts/Review"
import Trial from "../layouts/Trial"


const Home = () => {
    return (
        <div className="font-Lato">
        <Banner/>
        <Experience/>
        <Offer/>
        <Project/>
        <Achievements/>
        <Review/>
        <Trial/>
        </div>
    )
}

export default Home