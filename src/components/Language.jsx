import { useEffect, useState } from "react";
import LanguageCard from "./LanguageCard.jsx";

const Language = () => {
  const [language, setLanguage] = useState([]);

  useEffect(() => {
    fetch("./language.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setLanguage(data.slice(0, 9));
      });
  }, []);
  return (
    <div>
      <div className="w-3/5 ">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 p-6 shadow-md shadow-blue-400">
          Popular Language Tutors
        </h2>
        <p className="text-lg text-gray-600 mb-12 p-2">
          Discover highly-rated tutors for the most popular languages around the
          world. Learn from the best and achieve your language goals with ease.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {language.map((lnguage) => (
          <LanguageCard key={lnguage.id} lnguage={lnguage}></LanguageCard>
        ))}
      </div>
    </div>
  );
};

export default Language;
