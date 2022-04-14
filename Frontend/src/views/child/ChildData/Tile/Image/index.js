import { NoPicture } from "./NoPicture";
import { ImageOuterWrapper, ImageWrapper } from "./styled";
import Portrait from "./Portrait";

const Image = ({ child }) => (
  <ImageOuterWrapper>
    <ImageWrapper>
      {(child?.avatarUrl === '' || child?.avatarUrl === undefined) ? <NoPicture /> : <Portrait />}
    </ImageWrapper>
  </ImageOuterWrapper>
);

export default Image;