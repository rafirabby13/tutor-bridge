import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Home;