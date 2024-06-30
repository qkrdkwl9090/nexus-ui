import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { ToastProvider, useToast } from './index';

export default {
  title: 'Messages/Toast',
  component: ToastProvider,
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    )
  ],
  argTypes: {
    position: {
      control: {
        type: 'select',
        options: ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center']
      }
    },
    type: {
      control: {
        type: 'select',
        options: ['info', 'success', 'warning', 'error']
      }
    },
    message: { control: 'text' },
    duration: { control: 'number' },
    closable: { control: 'boolean' }
  }
} as Meta;

const positions: ('top-left' | 'top-right' | 'top-center' | 'bottom-left' | 'bottom-right' | 'bottom-center')[] = [
  'top-left',
  'top-right',
  'top-center',
  'bottom-left',
  'bottom-right',
  'bottom-center'
];

const types: ('info' | 'success' | 'warning' | 'error')[] = ['info', 'success', 'warning', 'error'];

const DefaultExample = () => {
  const addToast = useToast();

  return (
    <button
      className="bg-primary-50 text-white rounded-md p-3"
      onClick={() => addToast({ message: 'Default toast' })}
      style={{ margin: '5px' }}
    >
      Show Default Toast
    </button>
  );
};

const PositionExample = () => {
  const addToast = useToast();

  return (
    <div>
      {positions.map((position) => (
        <button
          className="bg-primary-50 text-white rounded-md p-3"
          key={position}
          onClick={() => addToast({ message: `Toast at ${position}`, position })}
          style={{ margin: '5px' }}
        >
          Show Toast at {position}
        </button>
      ))}
    </div>
  );
};

const TypeExample = () => {
  const addToast = useToast();

  return (
    <div>
      {types.map((type) => (
        <button
          className="bg-primary-50 text-white rounded-md p-3"
          key={type}
          onClick={() => addToast({ message: `${type} toast`, type })}
          style={{ margin: '5px' }}
        >
          Show {type} Toast
        </button>
      ))}
    </div>
  );
};

export const Default: StoryFn = () => <DefaultExample />;
export const Position: StoryFn = () => <PositionExample />;
export const Type: StoryFn = () => <TypeExample />;
