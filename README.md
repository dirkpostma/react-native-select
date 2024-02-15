# @dirkpostma/react-native-select

Component to select items from a list for React Native. The input can be a list of any type of objects.

<img src="/screenshots/example.png" width="320" alt="Project Screenshot">

## Installation

```sh
npm install @dirkpostma/react-native-select
```

## Usage

```js
import React, { useState } from 'react';
import Select from '@dirkpostma/react-native-select'; 

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
];

const App = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  return (
    <Select
      items={people}
      keyExtractor={(person) => person.id}
      labelExtractor={(person) => person.name}
      onSelect={setSelectedPeople}
      multiselect={true}
      renderItem={({ key, label, onPress, selected }) => (
        <Pressable
          key={key}
          onPress={onPress}
          style={{ 
            padding: 10, 
            borderBottomWidth: 1,
            borderColor: selected ? 'blue' : 'lightgray'
          }}
        >
          <Text>{label}</Text>
        </Pressable>
      )}
    />
  );
};

```

## Properties

| Property          | Type                     | Required | Description                                                                                                                 |
| ----------------- | ------------------------ | -------- | --------------------------------------------------------------------------------------------------------------------------- |
| `items`           | T[]                      | Yes      | An array of objects representing the selectable options.                                                                    |
| `keyExtractor`    | (item: T) => string \| number  | Yes      | A function used to extract a unique key for each item in the list.                                                         |
| `labelExtractor`  | (item: T) => string        | Yes      | A function to extract the label to be displayed for each item.                                                             |
| `onSelect`        | (selectedItems: T[]) => void | Yes      | A callback function invoked when the selection changes. Provides an array of the currently selected items.                     |
| `renderItem`      | (props: RenderItemProps) => React.ReactNode | Yes      | A function that renders each item in the list. See below for `RenderItemProps` details.                                    |
| `multiselect`     | boolean                      | No       | Determines whether the select component allows single-select (default: `false`) or multi-select behavior.                     |

**`RenderItemProps` Interface**

| Property  | Type          | Description                                               |
| --------- | ------------- | --------------------------------------------------------- |
| `key`     | string \| number | The unique key of the item being rendered.                |
| `label`   | string        | The display label of the item.                            |
| `onPress` | () => void    | Function to be called when the item is pressed or selected. |
| `selected`| boolean       | Indicates whether the item is currently selected.          |



## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

