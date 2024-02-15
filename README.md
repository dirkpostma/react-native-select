# @dirkpostma/react-native-select

Component to select items from a list for React Native. The input can be a list of any type of objects.

## Installation

```sh
npm install @dirkpostma/react-native-select
```

## Usage

```js
import { Select } from '@dirkpostma/react-native-select';

// ...

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
];

// ...

<Select
    items={people}
    keyExtractor={(person) => person.id}
    labelExtractor={(person) => person.name}
    onSelect={setSelectedPeople}
    renderItem={({ key, label, onPress, selected }) => (
        <Pressable key={key} onPress={onPress}>
            <Text>{selected ? '✅ ' : '🔲 '} {label}</Text>
        </Pressable>
    )}
/>

```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

