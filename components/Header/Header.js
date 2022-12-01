import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Lean Coffee Board</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: #d8a47f;
  display: flex;
  justify-content: center;
  align-items: center;
`;
