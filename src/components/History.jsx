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
      <div className="w-3/5">
        <h2 className="text-4xl font-bold  mb-4 p-6 shadow-md shadow-blue-400 history">
          Our History
        </h2>
        <p className="text-lg  mb-12 p-2">
          Since our founding in 1998, we have grown from a small initiative into
          a global platform that connects learners with expert tutors worldwide.
          Our journey reflects a commitment to quality education, innovation,
          and collaboration with top institutions.
        </p>
      </div>
      <div className="grid grid-cols-5 gap-5">
        {history.map((history, i) => (
          <HistoryLeftCard key={i} history={history}></HistoryLeftCard>
        ))}
      </div>
    </div>
  );
};

export default History;
