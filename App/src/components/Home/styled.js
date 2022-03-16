import styled from "styled-components";

export const OuterWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: ${({theme}) => theme.breakpoint.xxl};
  margin: 0 auto;
`;

export const InnerWrapper = styled.div`
  flex-grow: 1;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
`;