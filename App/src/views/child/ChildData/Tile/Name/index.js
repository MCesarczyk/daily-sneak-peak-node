import React from 'react';
import { Divider } from '@mui/material';
import { Label } from '../../../../../components/Label';
import { Space } from '../../../../../components/Space';
import { SubTitle, Title, TitleFieldset } from './styled';

const Name = ({ name, group }) => (
  <TitleFieldset>
    <Space>
      <Label size={0.75}>name: </Label>
      <Title>{name}</Title>
    </Space>
    <Space>
      <Label size={0.75}>group: </Label>
      <SubTitle role="subheading">{group}</SubTitle>
    </Space>
    <Divider />
  </TitleFieldset>
);

export default Name;