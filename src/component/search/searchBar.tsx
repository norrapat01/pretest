import { useStarbucksData } from "../menu/helper";
import { useState } from "react";
import { fetchStarbucksDataByName } from "src/api/api.route";
import style from "./SearchBar.module.css";
interface SearchBarProps {
  setResults: (results: any[]) => void; // Define the type of the setResults prop
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState<string>("");

  let data;
  const fetchData = async (value: string) => {
    try {
      if (value === "") {
        setResults([]);
      } else {
        data = await fetchStarbucksDataByName(value);
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

  const { starbucksData } = useStarbucksData(undefined, undefined, input);
  return (
    <div className={style.inputWrapper}>
      <input
        className={style.input}
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
