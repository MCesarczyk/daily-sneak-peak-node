import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  clearGroupData,
  deleteGroupData,
  fetchGroupData,
  selectGroupData,
  selectGroupGotoList,
  selectGroupState
} from "../groupSlice";
import Tile from "../../../components/Tile";

const GroupDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const state = useSelector(selectGroupState);
  const group = useSelector(selectGroupData);
  const gotoList = useSelector(selectGroupGotoList);

  useEffect(() => {
    if (gotoList === true) {
      navigate('/groups');
    }
  }, [gotoList])

  useEffect(() => {
    dispatch(fetchGroupData(id));

    return (() => {
      dispatch(clearGroupData());
    });
  }, []);

  return (
    <Tile
      state={state}
      componentsState={{
        notFound: !group,
        errorMessage: "Sorry... no group data found.",
        loading: group && Object.entries(group).length === 0
      }}
      avatarUrl={group?.avatarUrl}
      headingData={{
        title: group?.name,
        subtitle: group?.description,
        titleLabel: "group name: ",
        subtitleLabel: "description: "
      }}
      footerData={{
        buttonLabel: "Delete group",
        onDeleteWarning: `You're about to delete group: ${group?.name}`,
        onActionCall: () => dispatch(deleteGroupData(group?.id)),
        popupFormType: 'editGroup'
      }}
    />
  );
};

export default GroupDetails;