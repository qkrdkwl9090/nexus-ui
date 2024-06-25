import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ScrollPanel, { ScrollPanelProps } from './ScrollPanel';

export default {
  title: 'Panel/ScrollPanel',
  component: ScrollPanel,
  argTypes: {
    hidden: { control: 'boolean' },
    thin: { control: 'boolean' },
    color: { control: 'color' },
    bgColor: { control: 'color' }
  }
} as Meta;

const Template: StoryFn<ScrollPanelProps> = (args) => <ScrollPanel {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div>
      <p>Scrollable Content Line 1</p>
      <p>Scrollable Content Line 2</p>
      <p>Scrollable Content Line 3</p>
      <p>Scrollable Content Line 4</p>
      <p>Scrollable Content Line 5</p>
      <p>Scrollable Content Line 6</p>
      <p>Scrollable Content Line 7</p>
      <p>Scrollable Content Line 8</p>
      <p>Scrollable Content Line 9</p>
      <p>Scrollable Content Line 10</p>
    </div>
  ),
  style: { height: '150px', border: '1px solid #ccc' },
  className: '',
  hidden: false,
  thin: false,
  color: '#555',
  bgColor: '#F5F5F5'
};

export const CustomScroll = Template.bind({});
CustomScroll.args = {
  children: (
    <div>
      <p>Scrollable Content Line 1</p>
      <p>Scrollable Content Line 2</p>
      <p>Scrollable Content Line 3</p>
      <p>Scrollable Content Line 4</p>
      <p>Scrollable Content Line 5</p>
      <p>Scrollable Content Line 6</p>
      <p>Scrollable Content Line 7</p>
      <p>Scrollable Content Line 8</p>
      <p>Scrollable Content Line 9</p>
      <p>Scrollable Content Line 10</p>
    </div>
  ),
  style: { height: '150px', border: '1px solid #ccc' },
  className: '',
  hidden: false,
  thin: true,
  color: '#007BFF',
  bgColor: '#E9ECEF'
};

export const ThinScroll = Template.bind({});
ThinScroll.args = {
  children: (
    <div>
      <p>Scrollable Content Line 1</p>
      <p>Scrollable Content Line 2</p>
      <p>Scrollable Content Line 3</p>
      <p>Scrollable Content Line 4</p>
      <p>Scrollable Content Line 5</p>
      <p>Scrollable Content Line 6</p>
      <p>Scrollable Content Line 7</p>
      <p>Scrollable Content Line 8</p>
      <p>Scrollable Content Line 9</p>
      <p>Scrollable Content Line 10</p>
    </div>
  ),
  style: { height: '150px', border: '1px solid #ccc' },
  className: '',
  hidden: false,
  thin: true,
  color: '#D62929',
  bgColor: '#F5F5F5'
};
