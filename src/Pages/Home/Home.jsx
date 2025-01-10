/* eslint-disable no-unused-vars */
import { Outlet } from "react-router-dom";
import Banner from "../../components/Banner.jsx";
import Language from "../../components/Language.jsx";
import History from "../../components/History.jsx";
import Feedback from "../../components/Feedback.jsx";
import Stats from "../../components/Stats.jsx";
import { Helmet } from "react-helmet";
import Contact from "../../components/Contact.jsx";
const Home = () => {
  return (
    <div className="space-y-20  ">
      <Helmet>
        <title>Home | Tutor Bridge</title>
      </Helmet>
     
      <section className="space-y-40">
        <Stats></Stats>
        <Language></Language>
        <History></History>
        <Feedback></Feedback>
        <Contact></Contact>
        <Outlet />
      </section>
    </div>
  );
};

export default Home;
