import styled from "styled-components";

export const UploaderWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    justify-content: center;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`

export const FileInput = styled.input`
  display: none;
`