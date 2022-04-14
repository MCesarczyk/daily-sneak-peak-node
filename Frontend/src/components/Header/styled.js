import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavButton = styled(Link)`
  display: flex;
  background-color: ${({theme})=>theme.color.primary};
  margin: 0 1px;
`