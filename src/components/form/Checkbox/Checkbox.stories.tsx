import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Checkbox, { CheckboxProps } from './index';

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    autoFocus: { control: 'boolean' },
    checked: { control: 'boolean' },
    className: { control: 'text' },
    disabled: { control: 'boolean' },
    id: { control: 'text' },
    inputId: { control: 'text' },
    invalid: { control: 'boolean' },
    name: { control: 'text' },
    readOnly: { control: 'boolean' },
    required: { control: 'boolean' },
    tooltip: { control: 'text' },
    unstyled: { control: 'boolean' },
    width: { control: 'number' },
    height: { control: 'number' },
    rounded: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn<CheckboxProps> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  checked: false,
  disabled: false,
  readOnly: false,
  required: false,
  invalid: false,
  unstyled: false,
  tooltip: 'Default checkbox'
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  tooltip: 'Checked checkbox'
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  tooltip: 'Disabled checkbox'
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readOnly: true,
  tooltip: 'Read-only checkbox'
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  tooltip: 'Invalid checkbox'
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  className: 'm-4 p-2 bg-red-50 border border-red-500',
  tooltip: 'Custom class checkbox'
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  unstyled: true,
  tooltip: 'Unstyled checkbox'
};

export const WithAutoFocus = Template.bind({});
WithAutoFocus.args = {
  autoFocus: true,
  tooltip: 'Auto-focused checkbox'
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  tooltip: 'Required checkbox'
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  width: 90,
  height: 90,
  tooltip: 'Custom size checkbox'
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  tooltip: 'Rounded checkbox'
};
