import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputText, { InputTextProps } from './index';

export default {
  title: 'Form/InputText',
  component: InputText,
  argTypes: {
    autoFocus: { control: 'boolean' },
    className: { control: 'text' },
    invalid: { control: 'boolean' },
    keyfilter: { control: 'text' },
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    tooltip: { control: 'text' },
    unstyled: { control: 'boolean' },
    validateOnly: { control: 'boolean' },
    value: { control: 'text' },
    variant: { control: 'select', options: ['filled', 'outlined'] },
    rounded: { control: 'boolean' },
    onInput: { action: 'input' }
  }
} as Meta;

const Template: StoryFn<InputTextProps> = (args) => <InputText {...args} />;

export const Default = Template.bind({});
Default.args = {
  invalid: false,
  unstyled: false,
  validateOnly: false,
  value: '',
  variant: 'outlined',
  size: 'medium'
};

export const Invalid = Template.bind({});
Invalid.args = {
  invalid: true,
  value: '',
  variant: 'outlined',
  size: 'medium'
};

export const Unstyled = Template.bind({});
Unstyled.args = {
  unstyled: true,
  value: '',
  variant: 'outlined',
  size: 'medium'
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 'large',
  value: '',
  variant: 'outlined'
};

export const AutoFocus = Template.bind({});
AutoFocus.args = {
  autoFocus: true,
  value: '',
  variant: 'outlined',
  size: 'medium'
};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
  value: '',
  variant: 'outlined',
  size: 'medium'
};
