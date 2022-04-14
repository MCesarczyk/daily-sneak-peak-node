import styled from "styled-components";

export const Dialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  color: ${({ theme }) => theme.color.text};
  background-color: ${({ theme }) => theme.color.background};
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.md}) {
    width: 100%;
    border-radius: 0;
    text-align: center;
  }
`;

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