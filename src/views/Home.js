import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { GetPosts } from "../components/API";
import Cards from "../components/Cards";
import Row from "react-bootstrap/Row";

const Home = () => {
  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    GetPosts()
      .then((res) => {
        if (res.status === 200) {
          let data = res.data;
          setCardData(data);
          console.log(data);
        } else if (res.status !== 200) {
          console.log("Status 200 not found");
        }
      })
      .catch((err) => {
        console.warn("Catching from calling HOME --> " + err);
      });
  }, []);
  return (
    <>
      <Container>
        <Row className="gy-5">
          {cardData.map((element, index) => {
            return (
              <Cards key={index} title={element.title} desc={element.body} />
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
