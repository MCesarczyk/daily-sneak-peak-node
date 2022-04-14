import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postChildData, selectChildData, updateChildData } from "../../../child/childSlice";
import { selectDialogOpen, selectDialogType } from "../../dialogSlice";
import ChildFormFieldset from "./Fieldset";

const ChildForm = () => {
  const dispatch = useDispatch();
  const apiData = useSelector(selectChildData);
  const type = useSelector(selectDialogType);
  const open = useSelector(selectDialogOpen);

  const [child, setChild] = useState({
    name: '',
    surname: '',
    group: '',
    avatar: ''
  });

  const fetchApiChild = () => {
    if (Object.keys(apiData).length > 0) {
      setChild(apiData);
    }
  };

  useEffect(() => {
    if (type === 'editChild') {
      fetchApiChild();
    }
  }, [type, open, apiData]);

  const onFinish = () => {
    type === 'addChild' && dispatch(postChildData(child));
    type === 'editChild' && dispatch(updateChildData(child));
  };

  return (
    <ChildFormFieldset
      title="Personal data"
      child={child}
      setChild={setChild}
      onFinish={onFinish}
    />
  );
};

export default ChildForm;