import React from 'react';
import { Divider } from '@mui/material';
import { Label } from '../../Label';
import { Space } from '../../Space';
import { SubTitle, Title, TitleFieldset } from './styled';

const Heading = ({ data }) => (
  <TitleFieldset>
    <Space>
      <Label size={0.75}>{data?.titleLabel}</Label>
      <Title>{data?.title}</Title>
    </Space>
    <Space>
      <Label size={0.75}>{data?.subtitleLabel}</Label>
      <SubTitle role="subheading">{data?.subtitle}</SubTitle>
    </Space>
    <Divider />
  </TitleFieldset>
);

export default Heading;