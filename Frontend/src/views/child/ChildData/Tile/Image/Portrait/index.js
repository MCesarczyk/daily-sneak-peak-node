import { useFetchData } from "../../../../../../assets/utils/useFetchData";
import { StyledImage } from "./styled";

const Portrait = ({ child }) => {
  const picture = useFetchData(child?.avatarUrl);

  return (
    <StyledImage src={picture} />
  )
};

export default Portrait;