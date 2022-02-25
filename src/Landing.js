import { useEffect, useState } from "react";
import SW_Planets from "./Service/SW_API";
import SW_People from "./Service/SW_API";

export default function App() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch(SW_Planets);
      setPlanets(res.results);
    }

    async function fetchPeople() {
      let res = await fetch(SW_People);
      setPeople(res.results);
    }

    setPlanets();
    setPeople();
  }, []);
  console.log("planets", planets);
  console.log("people", people);

  return <div>landing</div>;
}
