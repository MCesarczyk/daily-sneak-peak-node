import styled from "styled-components";

export const Fieldset = styled.fieldset`
  display: grid;
  grid-template-columns: auto 1fr;
  border-radius: 0.5rem;

  @media(max-width: ${({ theme }) => theme.breakpoint.md}) {
    border: none;
  }

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    grid-template-columns: 1fr;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListItem = styled.li`
  font-size: 1rem;
  line-height: 1.57;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    justify-content: center;
  }
`;