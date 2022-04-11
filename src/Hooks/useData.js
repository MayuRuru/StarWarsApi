/*
import { useEffect, useState } from "react";
import { getPlanets } from "./Service/ApiCall";
import SW_API from "./Service/SW_API";

const [planets, setPlanets] = useState(SW_API);
useEffect(() => {
  getPlanets().then((res) => {
    setPlanets(res.results);
    setName(res.name);
    setDiameter(res.diameter);
    setClimate(res.climate);
    setGravity(res.gravity);
  });
}, []);

const [name, setName] = useState("");
const [diameter, setDiameter] = useState("");
const [climate, setClimate] = useState("");
const [gravity, setGravity] = useState("");

useEffect(() => {
  getPlanetsData(props.planets.results).then(() => {
    setName();
    setDiameter();
    setClimate();
    setGravity();
  });
}, [props]);

*/
