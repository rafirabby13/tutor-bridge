/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import StatCard from "./StatCard.jsx";

const Stats = () => {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("./stats.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setStats(data);
      });
  }, []);
  return (
    <div className="">
        <div className="w-3/5 ">
        <h2 className="text-4xl font-bold  mb-4 p-6 shadow-md shadow-blue-400">
          Why Choose Us?
        </h2>
        <p className="text-lg  mb-12 p-2">
          Join thousands of learners who have unlocked their potential with our platform.
          Our experienced tutors and comprehensive subject offerings make learning easier and more effective.
        </p>
        </div>
      
      <div className="flex  flex-wrap justify-between">
        {stats.map((stat, i) => (
          <StatCard key={i} stat={stat}></StatCard>
        ))}
      </div>
    </div>
  );
};

export default Stats;
