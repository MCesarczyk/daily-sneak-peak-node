import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  clearChildData,
  fetchChildData,
  selectChildData,
  selectChildGotoList
} from "../childSlice";
import Tile from "./Tile";
import NotFound from "../../../components/NotFound";

const ChildData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const child = useSelector(selectChildData);
  const gotoList = useSelector(selectChildGotoList);

  useEffect(() => {
    if (gotoList === true) {
      navigate('/children');
    }
  }, [gotoList])

  useEffect(() => {
    dispatch(fetchChildData(id));

    return (() => {
      dispatch(clearChildData());
    });
  }, []);

  return (
    <>
      {child
        ? <Tile child={child} />
        : <NotFound message="Sorry... no child data found." />
      }
    </>
  );
};

export default ChildData;