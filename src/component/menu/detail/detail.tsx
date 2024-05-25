import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {
  fetchStarbucksDataById,
  fetchStarbucksDataByName,
} from "src/api/api.route";
import { Item } from "src/interface/interface";
import styles from "./Detail.module.css";

const Detail: React.FC = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const id = query.get("id");
  const name = query.get("name");
  const [starbucksData, setStarbucksData] = useState<Item | null>(null);

  useEffect(() => {
    const fetchDataById = async () => {
      try {
        if (id) {
          const response = await fetchStarbucksDataById(Number(id));
          const data = response[0];
          setStarbucksData(data);
        }
      } catch (error) {
        console.error("Error fetching Starbucks data by ID:", error);
      }
    };

    fetchDataById();
  }, [id]);

  useEffect(() => {
    const fetchDataByName = async () => {
      try {
        if (name) {
          const response = await fetchStarbucksDataByName(name);
          const data = response[0];
          setStarbucksData(data);
        }
      } catch (error) {
        console.error("Error fetching Starbucks data by name:", error);
      }
    };

    fetchDataByName();
  }, [name]);

  if (!starbucksData) {
    return <div>Loading product details...</div>;
  }

  const {
    image_url,
    name: productName,
    description,
    flavor_profile,
    grind_option,
    region,
    weight,
    roast_level,
    price,
    stock,
  } = starbucksData;

  return (
    <div className={styles.detailContainer}>
      <Row className="justify-content-center">
        <Col md={10}>
          <Card className={styles.detailCard}>
            <Card.Body>
              <Row>
                <Col md={5}>
                  <Card.Img
                    src={image_url}
                    alt={`${productName} Coffee`}
                    className={styles.detailImage}
                  />
                </Col>
                <Col md={7} style={{ textAlign: "left" }}>
                  <Card.Title className={styles.detailTitle}>
                    {productName}
                  </Card.Title>
                  <Card.Text className={styles.grid}>
                    {grind_option[0]}
                  </Card.Text>
                  <Card.Text className={styles.detailDescription}>
                    {description}
                  </Card.Text>
                  <h3 className={styles.detailHeading}>Coffee Detail</h3>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col md={6}>
                      <Card.Text className={styles.detailFlavor}>
                        <strong>Flavor Profile:</strong>
                        <br /> {flavor_profile.join(", ")}
                      </Card.Text>
                    </Col>
                    <Col md={6} className="text-right">
                      <Card.Text className={styles.detailGrind}>
                        <strong>Grind Options:</strong>
                        <br />
                        {grind_option.join(", ")}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Row style={{ marginBottom: "10px" }}>
                    <Col md={6}>
                      <Card.Text className={styles.detailText}>
                        <strong>Region:</strong>
                        <br />
                        {region}
                      </Card.Text>
                    </Col>
                    <Col md={6} className="text-right">
                      <Card.Text className={styles.detailText}>
                        <strong>Weight:</strong> <br />
                        {weight}
                      </Card.Text>
                    </Col>
                  </Row>
                  <Card.Text className={styles.detailText}>
                    <strong>Roast Level:</strong> {roast_level}
                  </Card.Text>
                  <Card.Text className={styles.detailPrice}>
                    Price: ${price.toFixed(2)}
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Detail;
