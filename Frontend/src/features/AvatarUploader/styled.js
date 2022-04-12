import styled from "styled-components";

export const UploaderWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoint.sm}) {
    justify-content: center;
  }
`

export const SliderWrapper = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`

export const Slider = styled.input`
  margin: 0.25rem 0.5rem;
  transform: translateY(-0.25rem);
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 280px;
`

export const FileInput = styled.input`
  display: none;
`