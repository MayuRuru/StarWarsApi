import { useEffect, useState } from "react";
import API_People from "./Service/API_People";
import API_Planets from "./Service/API_Planets";
import Navbar from "./Components/Navbar/Navbar";
import Grid from "./Components/Grid/Grid";

export default function Landing() {
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  //const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPlanets() {
      let res = await fetch(API_Planets);
      let data = await res.json();
      setPlanets(data.results);
    }

    async function fetchPeople() {
      let res = await fetch(API_People);
      let data = await res.json();
      setPeople(data.results);
    }

    fetchPlanets();
    fetchPeople();
  }, []);
  console.log("planets", planets);
  console.log("people", people);

  return (
    <>
      <Navbar />
      <Grid data={people} />
    </>
  );
}
