import styled from "styled-components";

export const ImageOuterWrapper = styled.div`
  grid-area: image;
  width: 10rem;

  @media(max-width: ${({ theme }) => theme.breakpoint.sm}) {
    width: 16rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 100%;
  display: block;
  overflow: hidden;
  aspect-ratio: 1;
  border-radius: 1rem;
`;

export const StyledImage = styled.img`
  width: 100%;
  display: block;
  aspect-ratio: 1;
`;