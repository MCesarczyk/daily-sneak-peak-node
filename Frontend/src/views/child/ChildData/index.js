import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  clearChildData,
  deleteChildData,
  fetchChildData,
  selectChildData,
  selectChildGotoList,
  selectChildState
} from "../childSlice";
import Tile from "../../../components/Tile";

const ChildData = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(selectChildState);
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
      state={state}
      componentsState={{
        notFound: !child,
        errorMessage: "Sorry... no child data found.",
        loading: child && Object.entries(child).length === 0
      }}
      avatarUrl={child?.avatarUrl}
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