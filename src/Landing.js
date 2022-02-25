import { useEffect, useState } from "react";
import API_People from "./Service/API_People";
import API_Planets from "./Service/API_Planets";

export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch(API_Planets);
      setPlanets(res.results);
    }

    async function fetchPeople() {
      let res = await fetch(API_People);
      setPeople(res.results);
    }

    setPlanets();
    setPeople();
  }, []);
  console.log("planets", planets);
  console.log("people", people);

  return <div>landing</div>;
}
