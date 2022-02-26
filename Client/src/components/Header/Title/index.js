import styled from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.elementText};
  font-size: 1.5rem;
  line-height: 1.3;
  font-weight: 700;
  margin: 1rem 0;

  &:hover {
    color: ${({ theme }) => theme.color.muted};
  }
`