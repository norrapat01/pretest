// useStarbucksData.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchStarbucksData } from "src/api/api.route";
import { Item } from "src/interface/interface";

export const useStarbucksData = () => {
  const [starbucksData, setStarbucksData] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
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

  const handleCardClick = (id: number) => {
    navigate(`/detail?id=${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = starbucksData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(starbucksData.length / itemsPerPage);

  return { starbucksData: currentItems, currentPage, totalPages, handleCardClick, handlePageChange };
};
