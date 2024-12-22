import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner/>
            <Outlet/>
        </div>
    );
};

export default Home;