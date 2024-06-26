import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { fetchStarbucksData } from "src/api/api.route";
import { Item } from "src/interface/interface";
import Detail from "./menu/detail/detail";
import Sidebar from "./side-bar/side-bar";
import Menu from "./menu/menu";
import SearchBar from "./search/searchBar";
import SearchResults from "./search/searchList";



const ResponsiveContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchResults, setSearchResults] = useState<any[]>([]); // State to hold search results

  const handleSearch = (results: any[]) => {
    setSearchResults(results);
  };

  
  return (
    <>
      <SearchBar setResults={handleSearch} />
      <SearchResults results={searchResults} />
      <Container fluid>
        <div className="detail">
          <div className="row">
            <div className="col">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Card className="border-0 h-auto d-flex justify-content-center px-4 py-5 pt-5">
                  <Row>
                    <Col
                      md={3}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <Sidebar />
                    </Col>
                    <Col md={9}>
                      <Menu />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12}>{/* <Detail /> */}</Col>
                  </Row>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ResponsiveContainer;
