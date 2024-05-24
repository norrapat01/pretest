import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { fetchStarbucksDataById } from "src/api/api.route";
import { Item } from "src/interface/interface";

const Detail: React.FC = () => {
  const [starbucksData, setStarbucksData] = useState<Item | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchStarbucksDataById(1);
        const data = response[0];
        setStarbucksData(data);
      } catch (error) {
        console.error("Error fetching Starbucks data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="detail">
        <Card.Body>
          <Row>
            <Col md={5}>
              <div className="text-center">
                <Card.Img src={starbucksData?.image_url} />
              </div>
            </Col>
            <Col md={7}>
              <div>
                <Card.Title className="fs-6">{starbucksData?.name}</Card.Title>
              </div>
              <div>
                <Card.Title className="fs-6">
                  {starbucksData?.description}
                </Card.Title>
              </div>
              <div>
                <h3>Coffee Detail</h3>
                <Card.Text>Region: {starbucksData?.region}</Card.Text>
                <Card.Text>Weight: {starbucksData?.weight}</Card.Text>
                <Card.Text>Roast Level: {starbucksData?.roast_level}</Card.Text>
              </div>
              <div>
                <Card.Text>Price: ${starbucksData?.price}</Card.Text>
                <Card.Text>Stock: {starbucksData?.stock}</Card.Text>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </div>
    </>
  );
};

export default Detail;
