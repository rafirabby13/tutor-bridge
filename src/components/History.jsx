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
            <div>
                {
                    history.map((history, i)=> <HistoryLeftCard
                    key={i}
                    history={history}
                    ></HistoryLeftCard>)
                }
            </div>
        </div>
    );
};

export default History;