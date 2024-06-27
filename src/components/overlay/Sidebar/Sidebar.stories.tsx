import React, { useState } from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Sidebar from './index';

export default {
  title: 'Overlay/Sidebar',
  component: Sidebar,
  argTypes: {
    baseZIndex: { control: 'number' },
    blockScroll: { control: 'boolean' },
    closeOnEscape: { control: 'boolean' },
    dismissable: { control: 'boolean' },
    fullScreen: { control: 'boolean' },
    header: { control: 'text' },
    maskClassName: { control: 'text' },
    maskStyle: { control: 'object' },
    modal: { control: 'boolean' },
    position: {
      control: {
        type: 'select',
        options: ['left', 'top', 'right', 'bottom']
      }
    },
    visible: { control: 'boolean' }
  }
} as Meta;

const Template: StoryFn = (args) => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('left');

  const showSidebar = (pos: string) => {
    setPosition(pos);
    setVisible(true);
  };

  return (
    <div className="flex gap-4">
      <button className="px-3 py-2 bg-primary-50 rounded-md text-white" onClick={() => showSidebar('left')}>
        Show Left Sidebar
      </button>
      <button className="px-3 py-2 bg-primary-50 rounded-md text-white" onClick={() => showSidebar('top')}>
        Show Top Sidebar
      </button>
      <button className="px-3 py-2 bg-primary-50 rounded-md text-white" onClick={() => showSidebar('right')}>
        Show Right Sidebar
      </button>
      <button className="px-3 py-2 bg-primary-50 rounded-md text-white" onClick={() => showSidebar('bottom')}>
        Show Bottom Sidebar
      </button>

      <Sidebar
        {...args}
        position={position as 'left' | 'top' | 'right' | 'bottom'}
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <div>This is the sidebar content</div>
      </Sidebar>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  baseZIndex: 1000,
  blockScroll: false,
  closeOnEscape: true,
  dismissable: true,
  fullScreen: false,
  header: 'Sidebar Header',
  maskClassName: '',
  maskStyle: {},
  modal: true,
  position: 'left',
  visible: false
};
