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
`;