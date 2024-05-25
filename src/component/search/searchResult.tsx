import React from "react";
import { useNavigate } from "react-router-dom";

interface SearchResultProps {
  result: string;
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const navigate = useNavigate();

  const handleCard = (name: string) => {
    navigate(`/detail?name=${name}`);
  };

  const handleClick = () => {
    handleCard(result);
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {result}
    </div>
  );
};

export default SearchResult;
