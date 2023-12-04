import styled from "styled-components";
import FadeLoader from "react-spinners/FadeLoader";
const Con = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Loading = () => {
  return (
    <Con>
      <FadeLoader />
    </Con>
  );
};
