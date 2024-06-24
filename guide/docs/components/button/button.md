---
id: button
title: Button
---

# Button Component

The Button component is a versatile UI element that can be used in various ways to create different button styles. Each button is crafted with precision to ensure accessibility and ease of use.

## Import

You can import the Button component as follows:

```jsx
import { Button } from '@tony9090/nexus-ui';
```

## Usage

Here are some examples of how to use the Button component:

### Primary Button

```jsx
<Button label="Primary Button" severity="primary" onClick={() => alert('Button clicked!')} />
```

### Disabled Button

```jsx
<Button label="Disabled Button" severity="primary" disabled onClick={() => alert('Button clicked!')} />
```

### Rounded Button

```jsx
<Button label="Rounded Button" severity="primary" rounded onClick={() => alert('Button clicked!')} />
```

### Text Button

```jsx
<Button label="Text Button" severity="primary" text onClick={() => alert('Button clicked!')} />
```

### Raised Button

```jsx
<Button label="Raised Button" severity="primary" raised onClick={() => alert('Button clicked!')} />
```

### Outlined Button

```jsx
<Button label="Outlined Button" severity="primary" outlined onClick={() => alert('Button clicked!')} />
```

### Various Sizes

```jsx
<Button label="Small Button" severity="primary" size="small" onClick={() => alert('Button clicked!')} />
<Button label="Medium Button" severity="primary" size="medium" onClick={() => alert('Button clicked!')} />
<Button label="Large Button" severity="primary" size="large" onClick={() => alert('Button clicked!')} />
```

### With Custom Class

```jsx
<Button label="Custom Class Button" severity="primary" className="w-full" onClick={() => alert('Button clicked!')} />
```

### Unstyled Button

```jsx
<Button label="Unstyled Button" severity="primary" unstyled onClick={() => alert('Button clicked!')} />
```

## Props

The Button component accepts the following props:
| Prop | Type | Default | Description |
|------------|----------------------------|----------|------------------------------------------------------------------------------------------|
| `label` | `string` | | The label of the button. |
| `onClick` | `() => void` | | Function to call when the button is clicked. |
| `disabled` | `boolean` | `false` | Disables the button. |
| `rounded` | `boolean` | `false` | Makes the button corners rounded. |
| `severity` | `'primary' \| 'success' \| 'warning' \| 'secondary' \| 'info' \| 'danger'` | `'primary'` | The style severity of the button. |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | The size of the button. |
| `raised` | `boolean` | `false` | Adds a shadow to the button, making it appear raised. |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | The type of the button. |
| `className`| `string` | `''` | Additional CSS classes to apply to the button. |
| `icon` | `React.ReactNode` | | Icon to display inside the button. |
| `outlined` | `boolean` | `false` | Makes the button outlined. |
| `unstyled` | `boolean` | `false` | Removes default styles from the button. |
| `visible` | `boolean` | `true` | Controls the visibility of the button. |
| `text` | `boolean` | `false` | Makes the button a text button with no background or border. |

## Example

Here's an example of a Button component used in a simple form layout:

```jsx
import React, { useState } from 'react';
import { Button } from '@tony9090/nexus-ui';

const ButtonExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Button label="Click me" onClick={handleClick} severity="primary" />
      <p>You clicked {count} times.</p>
    </div>
  );
};

export default ButtonExample;
```

This example demonstrates how to use the Button component in a form and manage its state using React hooks.
