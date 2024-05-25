import React, { useState } from "react";
import {
  FormCheck,
  Button,
  ListGroup,
} from "react-bootstrap";

interface Filter {
  name: string;
  options: string[];
}

const Sidebar: React.FC = () => {
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const handleFilterChange = (filterName: string, option: string) => {
    const selectedOptions = filters[filterName] || [];
    const isSelected = selectedOptions.includes(option);

    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: isSelected
        ? selectedOptions.filter((v) => v !== option)
        : [...selectedOptions, option],
    }));
  };

  const clearFilters = () => {
    setFilters({});
  };

  const filterOptions: Filter[] = [
    { name: "Categories", options: ["Whole Bean", "Ground Coffee", "K-Cups"] },
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
            <hr/>
            <ListGroup variant="flush" >
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
