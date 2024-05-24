import Advertise from "../component/advertise";
import ResponsiveContainer from "../component/container";
import Footer from "../component/footer";
import Navbar from "../component/navbar";
import React, { useEffect, useState } from "react";
import { fetchStarbucksData } from "src/api/api.route";
import { Item } from "src/interface/interface";

const Secret = () => {
  const [starbucksData, setStarbucksData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStarbucksData();
        setStarbucksData(data);
      } catch (error) {
        console.error("Error fetching Starbucks data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Advertise/>
      <ResponsiveContainer/>
      <Footer />
    </>
  );
};
export default Secret;
