/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar.jsx";
import Banner from "../../components/Banner.jsx";
import Stats from "../../components/Stats.jsx";
import Language from "../../components/Language.jsx";
import Feedback from "../../components/Feedback.jsx";
import History from "../../components/History.jsx";

const Home = () => {
  return (
    <div>
      {/* <Banner/>
            <Stats/>
            <Language/>
            <Feedback/> */}
      <History />
      <Outlet />
    </div>
  );
};

export default Home;
