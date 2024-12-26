/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Banner from '../../components/Banner.jsx'
import Language from '../../components/Language.jsx'
import History from '../../components/History.jsx'
import Feedback from '../../components/Feedback.jsx'
import Stats from "../../components/Stats.jsx";
const Home = () => {
    return (
        <div className="space-y-20">
            <Banner></Banner>
            <Stats></Stats>
            <Language></Language>
            <History></History>
            <Feedback></Feedback>
            <Outlet/>
        </div>
    );
};

export default Home;