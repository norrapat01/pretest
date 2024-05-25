import { useState } from "react";
import { fetchStarbucksDataByName } from "src/api/api.route";

interface SearchBarProps {
  setResults: (results: any[]) => void; // Define the type of the setResults prop
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState<string>("");

  const fetchData = async (value: string) => {
    try {
      if (value === "") {
        setResults([]);
      } else {
        const data = await fetchStarbucksDataByName(value);
        setResults(data);
      }
    } catch (error) {
      console.error("Error fetching Starbucks data:", error);
    }
  };

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
