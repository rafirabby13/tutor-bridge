import { useEffect, useState } from "react";
import HistoryLeftCard from "./HistoryLeftCard.jsx";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetch("./history.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setHistory(data);
      });
  }, []);
  return (
    <div>
      <div className="md:w-3/5">
        <h2 className="text-xl md:text-4xl font-bold  mb-4 p-2 md:p-6 shadow-md shadow-blue-400">
          Our History
        </h2>
        <p className="text-sm md:text-lg  md:mb-12 p-2">
          Since our founding in 1998, we have grown from a small initiative into
          a global platform that connects learners with expert tutors worldwide.
          Our journey reflects a commitment to quality education, innovation,
          and collaboration with top institutions.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-1 md:gap-5">
        {history.map((history, i) => (
          <HistoryLeftCard key={i} history={history}></HistoryLeftCard>
        ))}
      </div>
    </div>
  );
};

export default History;
