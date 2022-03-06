import { SpinnerMessage, Spinner, SpinnerWrapper } from "./styled";

const LoaderSpinner = ({ message }) => (
  <SpinnerWrapper>
    <Spinner />
    <SpinnerMessage>{message}</SpinnerMessage>
  </SpinnerWrapper>
);

export default LoaderSpinner;