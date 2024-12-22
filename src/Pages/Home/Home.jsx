import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import Stats from "../../components/Stats.jsx";
import Language from "../../components/Language.jsx";
import Feedback from "../../components/Feedback.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Stats/>
            <Language/>
            <Feedback/>
            <Outlet/>
        </div>
    );
};

export default Home;