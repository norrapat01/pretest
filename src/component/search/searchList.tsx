// SearchResultsList.tsx
import React from "react"; // Correct import pat
import SearchResult from "./searchResult";

interface Result {
  name: string;
}

interface SearchResultsListProps {
  results: Result[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({ results }) => {
  if (results.length == 0) {
    return <div>No results found.</div>;
  }
  return (
    <div className="results-list overflow-auto">
      {results.map((result, id) => (
        <SearchResult result={result.name} key={id} />
      ))}
    </div>
  );
};

export default SearchResultsList;
