import { NotFoundImage, NotFoundMessage, NotFoundWrapper } from "./styled";

const NotFound = ({ message }) => (
  <NotFoundWrapper>
    <NotFoundMessage>
      {message}
    </NotFoundMessage>
    <NotFoundImage role="img" alt="disappointed child" />
  </NotFoundWrapper>
);

export default NotFound;