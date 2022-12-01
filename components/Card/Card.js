import styled from "styled-components";

export default function Card({ note, author }) {
  return (
    <>
      <StyledCard>
        <h2>{note}</h2>
        <p>{author}</p>
      </StyledCard>
    </>
  );
}

const StyledCard = styled.article`
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 90%;
  padding: 10px;
`;
