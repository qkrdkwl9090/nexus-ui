---
id: scrollPanel
title: ScrollPanel
---

# ScrollPanel Component

The ScrollPanel component is a customizable scrollable container that allows you to add custom styles and adjust the appearance of the scrollbar.

## Import

You can import the ScrollPanel component as follows:

```jsx
import { ScrollPanel } from '@tony9090/nexus-ui';
```

## Usage

Here are some examples of how to use the ScrollPanel component:

### Default ScrollPanel

```jsx
<ScrollPanel style={{ height: '150px', border: '1px solid #ccc' }}>
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
</ScrollPanel>
```

### Customized ScrollPanel

```jsx
<ScrollPanel style={{ height: '150px', border: '1px solid #ccc' }} thin={true} color="#007BFF" bgColor="#E9ECEF">
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
</ScrollPanel>
```

## Props

The ScrollPanel component accepts the following props:

| Prop        | Type            | Default     | Description                                          |
| ----------- | --------------- | ----------- | ---------------------------------------------------- |
| `style`     | `CSSProperties` | `{}`        | Custom styles to apply to the scroll panel.          |
| `className` | `string`        | `''`        | Additional CSS classes to apply to the scroll panel. |
| `children`  | `ReactNode`     |             | The content to be displayed inside the scroll panel. |
| `hidden`    | `boolean`       | `false`     | Whether to hide the scroll panel.                    |
| `thin`      | `boolean`       | `false`     | Whether to make the scrollbar thinner.               |
| `color`     | `string`        | `'#555'`    | The color of the scrollbar thumb.                    |
| `bgColor`   | `string`        | `'#F5F5F5'` | The background color of the scrollbar track.         |

## Example

Here's an example of a ScrollPanel component used in a simple layout:

```jsx
import React from 'react';
import { ScrollPanel } from '@tony9090/nexus-ui';

const ScrollPanelExample = () => (
  <ScrollPanel style={{ height: '150px', border: '1px solid #ccc' }}>
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
  </ScrollPanel>
);

export default ScrollPanelExample;
```

This example demonstrates how to use the ScrollPanel component to create a scrollable area for content, allowing for custom styles and adjusting the appearance of the scrollbar.

By using the ScrollPanel component, you can provide a more polished and user-friendly experience when displaying content that exceeds the available space.
