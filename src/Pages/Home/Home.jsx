import { Outlet } from "react-router-dom";
import Banner from '../../components/Banner.jsx'
import Language from '../../components/Language.jsx'
import History from '../../components/History.jsx'
import Feedback from '../../components/Feedback.jsx'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Language></Language>
            <History></History>
            <Feedback></Feedback>
            <Outlet/>
        </div>
    );
};

export default Home;