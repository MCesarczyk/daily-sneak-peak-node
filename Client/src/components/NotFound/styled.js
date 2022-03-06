import styled from "styled-components";
import background from "../../assets/images/notFound.jpg";

export const NotFoundWrapper = styled.div`
  padding: 2rem;
`

export const NotFoundImage = styled.div`
  width: 100%;
  padding-top: 67%;
  background-color: ${({ theme }) => theme.color.background};
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

export const NotFoundMessage = styled.h4`
  text-align: center;
`