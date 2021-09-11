import React, { useEffect, useState } from "react";
import { Container, Cart, Img, Title, Loding } from "./BodyStyle";

export const Body = ({ getData }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json))
      // .then((res) => getData(res))
      .then(() => setIsloading(false));
  }, [getData]);
  useEffect(() => {
    getData(data);
  }, [data, getData]);
  return (
    <Container>
      {isLoading && <Loding />}
      {data.map(({ id, url, title }) => (
        <Cart key={id}>
          <Img src={url} alt="img" />
          <Title>{title}</Title>
        </Cart>
      ))}
    </Container>
  );
};
export default Body;
