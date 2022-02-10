import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
// import paint from "../../assets/images/paint.jpg";
import paint from "../../../assets/images/paint.jpg";

const ProductCardItem = () => {
  return (
    <div className="mx-3">
      <div className="container productCardStyle">
        <Card>
          <Card.Img className="productCardImage" variant="top" src={paint} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProductCardItem;
