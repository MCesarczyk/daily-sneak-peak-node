import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { selectChildren } from "../childrenSlice";
import { useDispatch } from 'react-redux';
import { clearChildrenList, fetchChildrenList } from '../childrenSlice';
import { Space } from '../../../components/Space';
import ListView from './List';

const ChildrenList = () => {
  const children = useSelector(selectChildren);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChildrenList());

    return (() => {
      dispatch(clearChildrenList());
    });
  }, []);

  return (
    <Space>
      <ListView children={children}/>
      <Space
        vertical
        justify="start"
      >
      </Space>
    </Space>
  );
};

export default ChildrenList;