import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Skeleton, { SkeletonProps } from './index';

export default {
  title: 'Misc/Skeleton',
  component: Skeleton,
  argTypes: {
    width: {
      control: 'text'
    },
    height: {
      control: 'text'
    },
    borderRadius: {
      control: 'text'
    },
    animation: {
      control: 'select',
      options: ['pulse', 'wave', 'none']
    }
  }
} as Meta;

const Template: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
  width: '100%',
  height: '20px',
  borderRadius: '4px',
  animation: 'pulse'
};
