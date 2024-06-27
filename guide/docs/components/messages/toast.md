---
id: toast
title: Toast
---

# Toast Component

The Toast component is used to display brief messages to the user, typically for status updates, notifications, or alerts. The messages appear and disappear with a smooth animation, enhancing user experience.

## Import

You can import the ToastProvider and useToast hook as follows:

```jsx
import { ToastProvider, useToast } from '@tony9090/nexus-ui';
```

## Usage

Here are some examples of how to use the Toast component:

### Basic Setup

Wrap your application with the ToastProvider to ensure the Toast component works properly.

```jsx
import React from 'react';
import { ToastProvider } from '@tony9090/nexus-ui';

function App() {
  return (
    <ToastProvider>
      <YourAppComponents />
    </ToastProvider>
  );
}
export default App;
```

### Showing a Toast Message

Use the useToast hook to display a toast message.

```jsx
import React from 'react';
import { useToast } from '@tony9090/nexus-ui';

const ToastExample = () => {
  const addToast = useToast();

  const notify = () => {
    addToast({ message: 'This is a toast message!', type: 'info' });
  };

  return <button onClick={notify}>Show Toast</button>;
};

export default ToastExample;
```

### Customizing Toast

You can customize the toast message with different types, durations, and positions.

```jsx
import React from 'react';
import { useToast } from '@tony9090/nexus-ui';

const CustomToastExample = () => {
  const addToast = useToast();

  const showCustomToast = () => {
    addToast({
      message: 'Success message!',
      type: 'success',
      duration: 5000,
      position: 'top-right',
      className: 'custom-toast-class'
    });
  };

  return <button onClick={showCustomToast}>Show Custom Toast</button>;
};

export default CustomToastExample;
```

## Props

The Toast component accepts the following props:

| Prop        | Type                                                                                                        | Default       | Description                                           |
| ----------- | ----------------------------------------------------------------------------------------------------------- | ------------- | ----------------------------------------------------- |
| `message`   | `string`                                                                                                    |               | The message to be displayed in the toast.             |
| `type`      | `'info'` \| `'success'` \| `'warning'` \| `'error'`                                                         | `'success'`   | The type of the toast, determining its style.         |
| `duration`  | `number`                                                                                                    | `3000`        | Duration in milliseconds before the toast disappears. |
| `position`  | `'top-left'` \| `'top-right'` \| `'top-center'` \| `'bottom-left'` \| `'bottom-right'` \| `'bottom-center'` | `'top-right'` | The position where the toast will appear.             |
| `className` | `string`                                                                                                    |               | Additional CSS classes to apply to the toast.         |

## Example

Here's an example of how to use the Toast component in a simple notification setup:

```jsx
import React from 'react';
import { ToastProvider, useToast } from '@tony9090/nexus-ui';

const NotificationExample = () => {
  const addToast = useToast();

  const showNotifications = () => {
    addToast({ message: 'Info Notification!', type: 'info', position: 'top-left' });
    addToast({ message: 'Success Notification!', type: 'success', position: 'top-center' });
    addToast({ message: 'Warning Notification!', type: 'warning', position: 'bottom-left' });
    addToast({ message: 'Error Notification!', type: 'error', position: 'bottom-right' });
  };

  return <button onClick={showNotifications}>Show Notifications</button>;
};

export default NotificationExample;
```

This example demonstrates how to display different types of notifications in various positions using the Toast component. The notifications will appear and disappear with smooth animations, providing a better user experience.
