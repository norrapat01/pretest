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
        <div className="row">
          <div className="col">
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  border: "none",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 100px",
                }}
              >
                <Card.Body style={{ flex: 1 }}>
                  <Row>
                    <Col md={5}>
                      <div style={{ marginRight: "10px" }}>
                        {" "}
                        <Card.Img src={starbucksData?.image_url} />
                      </div>
                    </Col>
                    <Col md={7}>
                      <div>
                        <Card.Title className="fs-6">
                          {starbucksData?.name}
                        </Card.Title>
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
                        <Card.Text>
                          Roast Level: {starbucksData?.roast_level}
                        </Card.Text>
                        {/* <Card.Text>
        Flavor Profile: {starbucksData?.flavor_profile.join(", ")}
      </Card.Text>
      <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
        Grind Options: {starbucksData?.grind_option.join(", ")}
      </div> */}
                      </div>
                      <div>
                        <Card.Text>Price: ${starbucksData?.price}</Card.Text>
                        <Card.Text>Stock: {starbucksData?.stock}</Card.Text>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
