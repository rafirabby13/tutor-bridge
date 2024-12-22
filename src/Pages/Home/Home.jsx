import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import Stats from "../../components/Stats.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Stats/>
            <Outlet/>
        </div>
    );
};

export default Home;