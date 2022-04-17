import { ImageOuterWrapper, ImageWrapper, StyledImage } from "./styled";

const Avatar = ({ data }) => {
  const url = data?.url;

  return (
    <ImageOuterWrapper>
      <ImageWrapper>
        {(url === '' || url === undefined || url?.length === 0)
          ? data?.placeholder
          : <StyledImage src={url} />}
      </ImageWrapper>
    </ImageOuterWrapper>
  )
};

export default Avatar;