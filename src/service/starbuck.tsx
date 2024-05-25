import { useEffect, useState } from "react";
import { fetchStarbucksData } from "src/api/api.route";
import { Item } from "src/interface/interface";

export const useStarbucksService = () => {
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
  
    return starbucksData;
  };