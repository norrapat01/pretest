import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { fetchStarbucksData } from "src/api/api.route";
import { Item } from "src/interface/interface";

const Menu: React.FC = () => {
  const [starbucksData, setStarbucksData] = useState<Item[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStarbucksData();
        setStarbucksData(data);
      } catch (error) {
        console.error("Error fetching Starbucks data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row">
              {starbucksData.map((value) => (
                <div className="col-md-4" key={value.id}>
                  <Card
                    style={{
                      border: "none",
                      width: "300px",
                      height: "auto",
                    }}
                  >
                    <Card.Img
                      variant="top"
                      src={value.image_url}
                      style={{ width: "auto", height: "12rem" }}
                    />
                    <Card.Body>
                      <div>
                        <Card.Title className="fs-6">{value.name}</Card.Title>
                      </div>
                      <div className="font-weight-bold rounded-5 bg-black w-auto text-white text-small">
                        {value.grind_option[0]}
                      </div>

                      <div>
                        <Card.Text>Price: {value.price}</Card.Text>
                      </div>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
