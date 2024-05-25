// Sidebar.jsx

import { useStarbucksData } from "../menu/helper";
import React, { useState } from "react";
import { FormCheck, Button, ListGroup } from "react-bootstrap";
import { useStarbucksService } from "src/service/starbuck";

interface Filter {
  name: string;
  options: string[];
}

const Sidebar: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const handleFilterChange = (filterName: string, option: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: prevFilters[filterName]
        ? prevFilters[filterName].includes(option)
          ? prevFilters[filterName].filter((v) => v !== option)
          : [...prevFilters[filterName], option]
        : [option],
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };
  const starbucksData = useStarbucksService(Object.values(filters).flat());

  const filterOptions: Filter[] = [
    {
      name: "Categories",
      options: ["Whole Bean", "Ground Coffee", "Espresso"],
    },
    { name: "Roast", options: ["Blonde", "Medium", "Dark"] },
    { name: "Caffeine", options: ["Decaf", "Regular"] },
  ];

  return (
    <div style={{ width: "200px" }} className="sidebar">
      <h3>Filters</h3>
      <div className="filter-groups">
        {filterOptions.map((filter, index) => (
          <div key={index} className="filter-group">
            <h4 style={{ textAlign: "left", margin: "0" }}>{filter.name}</h4>
            <hr />
            <ListGroup variant="flush">
              {filter.options.map((option, idx) => (
                <ListGroup.Item key={idx} className="no-border">
                  <div className="checkbox-wrapper">
                    <FormCheck
                      type="checkbox"
                      label={option}
                      checked={filters[filter.name]?.includes(option)}
                      onChange={() => handleFilterChange(filter.name, option)}
                    />
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        ))}
      </div>
      <Button variant="secondary" onClick={clearFilters}>
        Clear Filters
      </Button>
    </div>
  );
};

export default Sidebar;
