import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Item } from "src/interface/interface";
import { ISearchResultsListProps } from "src/interface/search";
import {
  useStarbucksService,
  useStarbucksServiceByName,
} from "src/service/starbuck";

export const useStarbucksData = (
  selectedOptions?: string[],
  searchResults?: ISearchResultsListProps[],
  input: string = ""
) => {
  console.log(searchResults);
  const [currentPage, setCurrentPage] = useState(1);

  const navigate = useNavigate();

  const handleCardClick = (id: number) => {
    navigate(`/detail?id=${encodeURIComponent(id)}`);
  };

  const handleCard = (name: string) => {
    navigate(`/detail?name=${encodeURIComponent(name)}`);
  };
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const starbucksData = useStarbucksService();

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
    handleCard,
    handlePageChange,
  };
};
