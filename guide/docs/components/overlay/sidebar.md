---
id: sidebar
title: Sidebar
---

# Sidebar Component

The Sidebar component is a versatile UI element that can be used to create side panels, which slide into view from various directions. The component includes customizable properties to tailor its behavior and appearance.

## Import

You can import the Sidebar component as follows:

```jsx
import { Sidebar } from '@tony9090/nexus-ui';
```

## Usage

Here are some examples of how to use the Sidebar component:

### Default Sidebar

```jsx
import React, { useState } from 'react';
import { Sidebar } from '@tony9090/nexus-ui';

const DefaultSidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Sidebar</button>
      <Sidebar visible={visible} onHide={() => setVisible(false)}>
        <div>This is the sidebar content</div>
      </Sidebar>
    </div>
  );
};

export default DefaultSidebar;
```

### Sidebar with Different Positions

```jsx
import React, { useState } from 'react';
import { Sidebar } from '@tony9090/nexus-ui';

const PositionSidebar = () => {
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState('left');

  const showSidebar = (pos) => {
    setPosition(pos);
    setVisible(true);
  };

  return (
    <div>
      <button onClick={() => showSidebar('left')}>Show Left Sidebar</button>
      <button onClick={() => showSidebar('top')}>Show Top Sidebar</button>
      <button onClick={() => showSidebar('right')}>Show Right Sidebar</button>
      <button onClick={() => showSidebar('bottom')}>Show Bottom Sidebar</button>

      <Sidebar visible={visible} position={position} onHide={() => setVisible(false)}>
        <div>This is the sidebar content</div>
      </Sidebar>
    </div>
  );
};

export default PositionSidebar;
```

## Props

The Sidebar component accepts the following props:

| Prop            | Type                                     | Default  | Description                                                                                   |
| --------------- | ---------------------------------------- | -------- | --------------------------------------------------------------------------------------------- |
| `baseZIndex`    | `number`                                 | `0`      | Base zIndex value to use in layering.                                                         |
| `blockScroll`   | `boolean`                                | `false`  | Whether to block scrolling of the document when sidebar is active.                            |
| `children`      | `ReactNode`                              | `null`   | Used to get the child elements of the component.                                              |
| `closeOnEscape` | `boolean`                                | `true`   | Specifies if pressing escape key should hide the sidebar.                                     |
| `dismissable`   | `boolean`                                | `true`   | Whether to dismiss sidebar on click of the mask.                                              |
| `fullScreen`    | `boolean`                                | `false`  | Adds a close icon to the header to hide the dialog.                                           |
| `header`        | `ReactNode`                              | `true`   | Custom template for the header.                                                               |
| `maskClassName` | `string`                                 | `null`   | Style class of the mask.                                                                      |
| `maskStyle`     | `CSSProperties`                          | `null`   | Inline style of the mask.                                                                     |
| `modal`         | `boolean`                                | `true`   | Whether to a modal layer behind the sidebar.                                                  |
| `position`      | `"left" \| "top" \| "bottom" \| "right"` | `"left"` | Specifies the position of the sidebar. Valid values are "left", "top", "bottom", and "right". |
| `visible`       | `boolean`                                | `false`  | Specifies the visibility of the sidebar.                                                      |
| `onHide`        | `() => void`                             | `null`   | Callback to invoke when the actions used to close the sidebar are triggered.                  |
| `onShow`        | `() => void`                             | `null`   | Callback to invoke when sidebar gets shown.                                                   |

## Example

Here's an example of a Sidebar component used in a simple application layout:

```jsx
import React, { useState } from 'react';
import { Sidebar } from '@tony9090/nexus-ui';

const SidebarExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(true)}>Show Sidebar</button>
      <Sidebar visible={visible} onHide={() => setVisible(false)} header="Sidebar Header" baseZIndex={1000} blockScroll>
        <div>This is the sidebar content</div>
      </Sidebar>
    </div>
  );
};

export default SidebarExample;
```

This example demonstrates how to use the Sidebar component with basic props to create a functional sidebar with a custom header and blocking scroll capability.
