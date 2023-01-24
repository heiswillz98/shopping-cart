import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";

import StoreItems from "../data/item.json";

const Store = () => {
  return (
    <div>
      <h1>Store</h1>
      <Row md={3} xs={1} lg={3} className="g-3">
        {StoreItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </div>
  );
};
export default Store;
