import FileUpload from "../../../../../features/FileUpload";
import { NoPicture } from "./NoPicture";
import { ImageOuterWrapper, ImageWrapper } from "./styled";
import { useFetchData } from "../../../../../assets/utils/useFetchData";

const Image = ({ child }) => {
  const picture = useFetchData(child?.avatarUrl);

  return (
    <ImageOuterWrapper>
      <ImageWrapper>
        {child?.avatarUrl ? <img src={picture} /> : <NoPicture />}
      </ImageWrapper>
      <FileUpload id={child?.id} />
    </ImageOuterWrapper>

  )
};

export default Image;