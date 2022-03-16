import Spinner from './Spinner';

const Loader = ({ children, state, message }) => {
  switch (state) {
    case "idle":
      return null;

    case "loading":
      return (
        <Spinner message={message} />
      );

    case "success":
      return (
        <>
          {children}
        </>
      );

    default: return null;
  }
};

export default Loader;