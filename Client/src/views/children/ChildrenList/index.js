import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { clearChildrenList, fetchChildrenList } from '../childrenSlice';
import { Space } from '../../../components/Space';
import ListView from './List';

const ChildrenList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChildrenList());

    return (() => {
      dispatch(clearChildrenList());
    });
  }, []);

  return (
    <Space>
      <ListView />
      <Space
        vertical
        justify="start"
      >
      </Space>
    </Space>
  );
};

export default ChildrenList;