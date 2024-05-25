import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "src/interface/interface";
import { useStarbucksService } from "src/service/starbuck";

export const useStarbucksData = (selectedOptions?: string[] ) => {
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/detail?id=${id}`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const starbucksData = useStarbucksService(selectedOptions);

  const itemsPerPage = 12;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = starbucksData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(starbucksData.length / itemsPerPage);

  return {
    starbucksData: currentItems,
    currentPage,
    totalPages,
    handleCardClick,
    handlePageChange,
  };
};
