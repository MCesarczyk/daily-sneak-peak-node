import styled from "styled-components";

export const Label = styled.span`
    color: ${({ theme }) => theme.color.labelText};
    font-style: italic;
    font-size: ${props => props.size || 1}rem;
    line-height: 1.57;
    margin-right: ${props => props.size || 1}rem;
    width: ${props => props.width};
    text-align: ${props => props.alignment};
`;