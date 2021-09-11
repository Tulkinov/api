import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
`;
export const Cart = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 8px;
  border: 1px solid blue;
  width: 200px;
  height: 280px;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const Title = styled.div`
  padding: 5px;
  text-align: center;
`;
export const Loding = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  margin: 20px;
  /* transform: rotate(360deg); */
  animation: rota 2s linear;
  @keyframes rota {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
