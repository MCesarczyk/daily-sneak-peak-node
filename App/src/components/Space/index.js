import styled, { css } from "styled-components";

export const Space = styled.div`
  display: flex;
  align-items: ${props => props.align};
  justify-content: ${props => props.justify};

  ${({ vertical }) => vertical && css`
    flex-direction: column;
  `}
`;