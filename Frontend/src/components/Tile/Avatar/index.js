import { useFetchData } from "../../../assets/utils/useFetchData";
import { ImageOuterWrapper, ImageWrapper, StyledImage } from "./styled";

const Avatar = ({ data }) => {
  const url = data?.url;
  const picture = useFetchData(url);

  return (
    <ImageOuterWrapper>
      <ImageWrapper>
        {(url === '' || url === undefined) ? data?.placeholder : <StyledImage src={picture} />}
      </ImageWrapper>
    </ImageOuterWrapper>
  )
};

export default Avatar;