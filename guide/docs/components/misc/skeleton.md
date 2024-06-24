---
id: skeleton
title: Skeleton
---

# Skeleton Component

The Skeleton component is used to display a placeholder while content is being loaded. This can improve the user experience by providing a visual indication that content is on its way.

## Import

You can import the Skeleton component as follows:

```jsx
import { Skeleton } from '@tony9090/nexus-ui';
```

## Usage

Here are some examples of how to use the Skeleton component:

### Default Skeleton

```jsx
<Skeleton />
```

### Customized Skeleton

```jsx
<Skeleton width="50%" height="30px" borderRadius="8px" animation="wave" />
```

## Props

The Skeleton component accepts the following props:

| Prop           | Type                              | Default   | Description                                              |
| -------------- | --------------------------------- | --------- | -------------------------------------------------------- |
| `width`        | `string` \| `number`              | `'100%'`  | The width of the skeleton element.                       |
| `height`       | `string` \| `number`              | `'20px'`  | The height of the skeleton element.                      |
| `borderRadius` | `string` \| `number`              | `'4px'`   | The border radius of the skeleton element.               |
| `animation`    | `'pulse'` \| `'wave'` \| `'none'` | `'pulse'` | The animation type of the skeleton element.              |
| `className`    | `string`                          | `''`      | Additional CSS classes to apply to the skeleton element. |

## Example

Here's an example of a Skeleton component used in a simple card layout:

```jsx
import React from 'react';
import { Skeleton } from '@tony9090/nexus-ui';

const CardSkeleton = () => (
  <div className="p-4 border rounded-md shadow-sm">
    <Skeleton width="100%" height="200px" borderRadius="8px" animation="wave" />
    <div className="mt-4">
      <Skeleton width="60%" height="20px" />
      <Skeleton width="40%" height="20px" className="mt-2" />
      <Skeleton width="80%" height="20px" className="mt-2" />
    </div>
  </div>
);
export default CardSkeleton;
```

This example demonstrates how to create a loading skeleton for a card layout, providing a visual placeholder while the content is being loaded.

By using the Skeleton component, you can improve the user experience by showing placeholders during content loading, keeping the interface engaging and visually appealing.
