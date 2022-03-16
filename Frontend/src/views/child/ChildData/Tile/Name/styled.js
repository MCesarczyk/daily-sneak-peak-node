import styled from "styled-components";

export const TitleFieldset = styled.div`
  grid-area: name;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
    color: ${({ theme }) => theme.color.text};
    font-weight: 700;
    font-size: 2rem;
    line-height: 1.3;
    margin-top: 0;
`;

export const SubTitle = styled.h4`
    color: ${({ theme }) => theme.color.secondaryText};
    font-weight: 500; 
    font-size: 1.5rem;
    line-height: 1.57;
    margin-top: 0;
    margin-bottom: 1rem;
`;