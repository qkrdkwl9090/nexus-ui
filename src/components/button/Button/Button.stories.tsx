import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './index';

export default {
  title: 'Button/Button',
  component: Button,
  argTypes: {
    severity: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'secondary', 'info', 'danger']
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    rounded: {
      control: 'boolean'
    },
    text: {
      control: 'boolean'
    },
    raised: {
      control: 'boolean'
    },
    disabled: {
      control: 'boolean'
    },
    outlined: {
      control: 'boolean'
    },
    unstyled: {
      control: 'boolean'
    },
    visible: {
      control: 'boolean'
    }
  }
} as Meta;

const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Primary Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: false,
  disabled: true,
  outlined: false,
  unstyled: false,
  visible: true
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: true,
  text: false,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: true
};

export const TextButton = Template.bind({});
TextButton.args = {
  label: 'Text Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: true,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: true
};

export const RaisedButton = Template.bind({});
RaisedButton.args = {
  label: 'Raised Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: true,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: true
};

export const OutlinedButton = Template.bind({});
OutlinedButton.args = {
  label: 'Outlined Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: false,
  disabled: false,
  outlined: true,
  unstyled: false,
  visible: true
};

export const VariousSizes = Template.bind({});
VariousSizes.args = {
  label: 'Large Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'large',
  rounded: false,
  text: false,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: true
};

export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  label: 'Custom Class Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: true,
  className: 'w-full'
};

export const UnstyledButton = Template.bind({});
UnstyledButton.args = {
  label: 'Unstyled Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: true,
  visible: true
};

export const InvisibleButton = Template.bind({});
InvisibleButton.args = {
  label: 'Invisible Button',
  onClick: () => alert('Button clicked!'),
  severity: 'primary',
  size: 'medium',
  rounded: false,
  text: false,
  raised: false,
  disabled: false,
  outlined: false,
  unstyled: false,
  visible: false
};
