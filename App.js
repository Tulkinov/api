import React from "react";
import { Container } from "./AppStyled";
import Navbar from "./Navbar";
import Body from "./Body";

const App = () => {
  const [data, setData] = useState([]);
  const getData = (e) => {
    setData(e);
  };
  return (
    <Container>
      <Navbar data={data} />
      <Body getData={getData} />
    </Container>
  );
};
export default App;
