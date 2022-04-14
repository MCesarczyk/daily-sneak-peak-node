import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  clearChildData,
  deleteChildData,
  fetchChildData,
  selectChildData,
  selectChildGotoList
} from "../childSlice";
import Tile from "./Tile";

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
    <Tile
      child={child}
      headingData={{
        title: `${child?.name} ${child?.surname}`,
        subtitle: child?.group
      }}
      footerData={{
        buttonLabel: "Delete child",
        onDeleteWarning: `You're about to delete ${child?.name} ${child?.surname}`,
        onActionCall: () => dispatch(deleteChildData(child?.id)),
        popupFormType: 'editChild'
      }}
    />
  );
};

export default ChildData;