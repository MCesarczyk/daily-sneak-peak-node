import { NoPicture } from "./NoPicture";
import { ImageOuterWrapper, ImageWrapper } from "./styled";
import Portrait from "./Portrait";

const Image = ({ child }) => (
  <ImageOuterWrapper>
    <ImageWrapper>
      {child?.avatarUrl ? <NoPicture /> : <Portrait child={child} />}
    </ImageWrapper>
  </ImageOuterWrapper>
);

export default Image;