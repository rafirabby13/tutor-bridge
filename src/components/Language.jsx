import { useEffect, useState } from "react";
import LanguageCard from "./LanguageCard.jsx";

const Language = () => {
     const [language, setLanguage]= useState([])
    
        useEffect(()=>{
            fetch('./language.json')
            .then(res=>res.json())
            .then(data=>{
                // console.log(data);
                setLanguage(data.slice(0,18))
            })
        },[])
    return (
        <div>
            <div className="grid grid-cols-3 gap-4">
                {
                    language.map(lnguage=><LanguageCard
                    key={lnguage.id}
                    lnguage={lnguage}
                    ></LanguageCard>)
                }
            </div>
        </div>
    );
};

export default Language;