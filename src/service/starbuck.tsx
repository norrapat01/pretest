import { useEffect, useState } from "react";
import {
  fetchStarbucksData,
  fetchStarbucksDataByOption,
} from "src/api/api.route";
import { Item } from "src/interface/interface";

export const useStarbucksService = (selectedOptions?: string[]) => {
  const [starbucksData, setStarbucksData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data;
        if (selectedOptions && Object.keys(selectedOptions).length > 0) {
          data = await fetchStarbucksDataByOption(selectedOptions);
        } else {
          data = await fetchStarbucksData();
        }
        setStarbucksData(data);
      } catch (error) {
        console.error("Error fetching Starbucks data:", error);
      }
    };

    fetchData();
  }, []);

  return starbucksData;
};
