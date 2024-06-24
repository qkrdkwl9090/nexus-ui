---
id: checkbox
title: Checkbox
---

# Checkbox Component

The Checkbox component is a customizable input element that allows users to select or deselect an option.

## Import

You can import the Checkbox component as follows:

```jsx
import { Checkbox } from '@tony9090/nexus-ui';
```

## Usage

Here are some examples of how to use the Checkbox component:

### Default Checkbox

```jsx
<Checkbox tooltip="Default checkbox" />
```

### Checked Checkbox

```jsx
<Checkbox checked={true} tooltip="Checked checkbox" />
```

### Disabled Checkbox

```jsx
<Checkbox disabled={true} tooltip="Disabled checkbox" />
```

### Read-Only Checkbox

```jsx
<Checkbox readOnly={true} tooltip="Read-only checkbox" />
```

### Invalid Checkbox

```jsx
<Checkbox invalid={true} tooltip="Invalid checkbox" />
```

### Custom Class Checkbox

```jsx
<Checkbox
  className="m-4 p-2 bg-red-50 border border-red-500"
  tooltip="Custom 
class checkbox"
/>
```

### Unstyled Checkbox

```jsx
<Checkbox unstyled={true} tooltip="Unstyled checkbox" />
```

### Auto-Focused Checkbox

```jsx
<Checkbox autoFocus={true} tooltip="Auto-focused checkbox" />
```

### Required Checkbox

```jsx
<Checkbox required={true} tooltip="Required checkbox" />
```

### Custom Size Checkbox

```jsx
<Checkbox width={90} height={90} tooltip="Custom size checkbox" />
```

### Rounded Checkbox

```jsx
<Checkbox rounded={true} tooltip="Rounded checkbox" />
```

## Props

The Checkbox component accepts the following props:
| Prop | Type | Default | Description |
| ------------ | -------------------------------- | ------- | --------------------------------------------------------------------------- |
| `autoFocus` | `boolean` | `false` | When present, it specifies that the component should automatically get focus on load. |
| `checked` | `boolean` | `false` | Specifies whether a checkbox should be checked or not. |
| `className` | `string` | `''` | Style class of the element. |
| `disabled` | `boolean` | `false` | When present, it specifies that the element value cannot be altered. |
| `id` | `string` | `null` | Unique identifier of the element. |
| `inputId` | `string` | `null` | Identifier of the input element. |
| `invalid` | `boolean` | `false` | When present, it specifies that the component should have invalid state style. |
| `name` | `string` | `null` | Name of the checkbox element. |
| `readOnly` | `boolean` | `false` | When present, it specifies that the value cannot be changed. |
| `required` | `boolean` | `false` | When present, it specifies that an input field must be filled out before submitting the form. |
| `tooltip` | `string` | `null` | Content of the tooltip. |
| `unstyled` | `boolean` | `false` | When enabled, it removes component related styles in the core. |
| `width` | `string` \| `number` | `20` | The width of the checkbox element. |
| `height` | `string` \| `number` | `20` | The height of the checkbox element. |
| `rounded` | `boolean` | `false` | When true, it applies a rounded style to the checkbox. |
| `onChange` | `(event: ChangeEvent<HTMLInputElement>) => void` | `null` | Callback to invoke when the checkbox value changes. |

## Example

Here's an example of a Checkbox component used in a simple form layout:

```jsx
import React, { useState } from 'react';
import { Checkbox } from '@tony9090/nexus-ui';

const CheckboxExample = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div>
      <Checkbox checked={checked} onChange={handleChange} tooltip="Checkbox example" />
      <p>The checkbox is {checked ? 'checked' : 'unchecked'}.</p>
    </div>
  );
};

export default CheckboxExample;
```

This example demonstrates how to use the Checkbox component in a form and manage its state using React hooks.
