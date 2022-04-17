import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGroupData, selectGroupData, updateGroupData } from "../../../group/groupSlice";
import { selectDialogOpen, selectDialogType } from "../../dialogSlice";
import GroupFormFieldset from "./Fieldset";

const GroupForm = () => {
  const dispatch = useDispatch();
  const apiData = useSelector(selectGroupData);
  const type = useSelector(selectDialogType);
  const open = useSelector(selectDialogOpen);

  const [group, setGroup] = useState({
    name: '',
    description: '',
    notes: '',
    avatar: ''
  });

  const fetchApiGroup = () => {
    if (Object.keys(apiData).length > 0) {
      setGroup(apiData);
    }
  };

  useEffect(() => {
    if (type === 'editGroup') {
      fetchApiGroup();
    }
  }, [type, open, apiData]);

  const onFinish = () => {
    type === 'addGroup' && dispatch(postGroupData(group));
    type === 'editGroup' && dispatch(updateGroupData(group));
  };

  return (
    <GroupFormFieldset
      title="Group info"
      group={group}
      setGroup={setGroup}
      onFinish={onFinish}
    />
  );
};

export default GroupForm;