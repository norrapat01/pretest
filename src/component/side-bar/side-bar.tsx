import React, { useState } from 'react';
import { Card, Form, ListGroup } from 'react-bootstrap';

const Sidebar: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedItems.includes(value)) {
      setSelectedItems(selectedItems.filter(item => item !== value));
    } else {
      setSelectedItems([...selectedItems, value]);
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Header>Filter Options</Card.Header>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <Form.Check
            type="checkbox"
            label="Option 1"
            value="option1"
            checked={selectedItems.includes('option1')}
            onChange={handleCheckboxChange}
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Check
            type="checkbox"
            label="Option 2"
            value="option2"
            checked={selectedItems.includes('option2')}
            onChange={handleCheckboxChange}
          />
        </ListGroup.Item>
        <ListGroup.Item>
          <Form.Check
            type="checkbox"
            label="Option 3"
            value="option3"
            checked={selectedItems.includes('option3')}
            onChange={handleCheckboxChange}
          />
        </ListGroup.Item>
        {/* เพิ่ม checkbox อื่นๆ ตามต้องการ */}
      </ListGroup>
    </Card>
  );
};

export default Sidebar;
