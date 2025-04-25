/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import StatCard from "./StatCard.jsx";
import { Fade, Slide } from "react-awesome-reveal";
import { BookOpen, Star, UserCheck, Users } from "lucide-react";

const Stats = () => {
  // const [stats, setStats] = useState([]);

  // useEffect(() => {
  //   fetch("./stats.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       // console.log(data);
  //       setStats(data);
  //     });
  // }, []);
  const stats = [
    { label: "Experienced Tutors", count: "25,000+", IconKey: UserCheck },
    { label: "5-star Reviews", count: "150,000+", IconKey: Star },
    { label: "Languages/Subjects Taught", count: "100+", IconKey: BookOpen },
    { label: "Registered Users", count: "50,000+", IconKey: Users }
  ];
  
  return (
    <div className="">
      <div className="md:w-3/5 ">
        <h2 className="text-xl md:text-4xl font-bold  mb-4 p-2 md:p-6 shadow-md shadow-blue-400">
          Why Choose Us?
        </h2>
        <p className="text-sm md:text-lg  md:mb-12 p-2">
          Join thousands of learners who have unlocked their potential with our
          platform. Our experienced tutors and comprehensive subject offerings
          make learning easier and more effective.
        </p>
      </div>

      <Slide direction="left" cascade  >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-4 ">
          {stats.map((stat, i) => (
            <StatCard key={i} stat={stat}></StatCard>
          ))}
        </div>
        </Slide>
    </div>
  );
};

export default Stats;
