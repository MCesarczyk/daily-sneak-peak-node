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
import { NoPicture } from "../../../components/Tile/Avatar/NoPicture";

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
    // eslint-disable-next-line
  }, [gotoList])

  useEffect(() => {
    dispatch(fetchGroupData(id));

    return (() => {
      dispatch(clearGroupData());
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Tile
      state={state}
      componentsState={{
        notFound: !group,
        errorMessage: "Sorry... no group data found.",
        loading: group && Object.entries(group).length === 0
      }}
      avatarData={{
        url: group?.avatarUrl,
        placeholder: <NoPicture />
      }}
      headingData={{
        title: group?.name,
        subtitle: group?.description,
        titleLabel: "group name: ",
        subtitleLabel: "description: "
      }}
      footerData={{
        buttonLabel: "Delete group",
        onDeleteWarning: `You're about to delete group: ${group?.name}`,
        onActionCall: () => dispatch(deleteGroupData(group?.gid)),
        popupFormType: 'editGroup'
      }}
    />
  );
};

export default GroupDetails;