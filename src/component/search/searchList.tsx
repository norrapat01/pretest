// SearchResultsList.tsx
import React from "react"; // Correct import pat
import SearchResult from "./searchResult";
import { ISearchResultsListProps } from "src/interface/search";

const SearchResultsList: React.FC<ISearchResultsListProps> = ({ results }) => {

  if (results.length == 0) {
    return (<>
    </>);
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
