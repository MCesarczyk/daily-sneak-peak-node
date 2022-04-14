import { useFetchData } from "../../../../../assets/utils/useFetchData";
import { ImageOuterWrapper, ImageWrapper, StyledImage } from "./styled";
import { NoPicture } from "./NoPicture";

const Avatar = ({ url }) => {
  const picture = useFetchData(url);

  return (
    <ImageOuterWrapper>
      <ImageWrapper>
        {(url === '' || url === undefined) ? <NoPicture /> : <StyledImage src={picture} />}
      </ImageWrapper>
    </ImageOuterWrapper>
  )
};

export default Avatar;