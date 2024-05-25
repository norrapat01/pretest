// Menu.jsx
import React, { useState } from "react";
import { Col, Row, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaginationComponent from "../pagination/pagination";
import { useStarbucksData } from "./helper";

const Menu = () => {
  const {
    starbucksData,
    currentPage,
    totalPages,
    handleCardClick,
    handlePageChange,
  } = useStarbucksData();

  return (
    <div className="container">
      <Row className="justify-content-center">
        {starbucksData.map((value) => (
          <Col md={4} key={value.id}>
            <Card
              className="mb-4"
              onClick={() => handleCardClick(value.id)}
              style={{ cursor: "pointer" }}
            >
              <Card.Img
                variant="top"
                src={value.image_url}
                style={{ width: "100%", height: "12rem", objectFit: "cover" }}
              />
              <Card.Body>
                <Card.Title className="fs-6">{value.name}</Card.Title>
                <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
                  {value.grind_option[0]}
                </div>
                <Card.Text>Price: ${value.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Menu;
