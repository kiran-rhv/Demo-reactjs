import React from "react";
import { Card, Button } from "react-bootstrap";
import "./style.css";
import paint from "../../assets/images/paint.jpg";
import PageHeader from "./Header";
import PageFooter from "./Footer";

const CardItem = () => {
  return (
    <div>
      <PageHeader />
      <div className="cardStyle">
        <Card>
          <Card.Img className="cardImage" variant="top" src={paint} />
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
      <PageFooter />
    </div>
  );
};

export default CardItem;
