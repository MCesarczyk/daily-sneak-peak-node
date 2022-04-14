import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.elementText};
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 700;
  margin: 1rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`