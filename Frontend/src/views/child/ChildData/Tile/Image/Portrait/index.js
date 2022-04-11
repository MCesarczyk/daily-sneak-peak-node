import { useSelector } from "react-redux";
import { useFetchData } from "../../../../../../assets/utils/useFetchData";
import { selectChildData } from "../../../../childSlice";
import { StyledImage } from "./styled";

const Portrait = () => {
  const child = useSelector(selectChildData);
  const picture = useFetchData(child?.avatarUrl);

  return (
    <StyledImage src={picture} />
  )
};

export default Portrait;