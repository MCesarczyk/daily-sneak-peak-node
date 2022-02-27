import React from 'react';
import { Space } from '../../../components/Space';
import ListView from './List';

const ChildrenList = () => {
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