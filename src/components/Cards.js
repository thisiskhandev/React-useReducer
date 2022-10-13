import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function Cards(props) {
  return (
    <>
      <Col lg={3} md={4} sm={12}>
        <Card className="h-100" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/150/92c952"
            height="200"
          />
          <Card.Body>
            <Card.Title>{props.title || "Card Title"}</Card.Title>
            <Card.Text>{props.desc || "Some text desc"}</Card.Text>
            <Button size="sm" variant="success" style={{ ...BtnStyles }}>
              Click to go
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

const BtnStyles = {
  position: "absolute",
  bottom: 10,
  left: 0,
  right: 0,
  margin: "auto 20px"
};
