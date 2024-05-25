// SearchResult.tsx (or SearchResult.ts)
import React from "react";

interface SearchResultProps {
  result: string; // Assuming result is of type string
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => { 
  const handleClick = () => {
    alert(`You selected ${result}!`);
  };

  return (
    <div className="search-result" onClick={handleClick}>
      {result}
    </div>
  );
};

export default SearchResult;
