import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { clearChildData, fetchChildData, selectChildGotoList } from "../childSlice";
import Tile from "./Tile";

const ChildData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gotoList = useSelector(selectChildGotoList);
  console.log("childData connected");

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
    <Tile />
  );
};

export default ChildData;