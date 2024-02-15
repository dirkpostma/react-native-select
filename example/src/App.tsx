import React, { useEffect, useState } from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import { Select } from '@dirkpostma/react-native-select';

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
];

const defaultSelectedKeys = [2];

export const App = () => {
  const [isMultiSelect, setIsMultiSelect] = useState(true);
  const [submitOnSelect, setSubmitOnSelect] = useState(true);
  const [selectedPeopleKeys, setSelectedPeopleKeys] = useState<number[]>([]);

  useEffect(() => {
    setSelectedPeopleKeys(defaultSelectedKeys);
  }, [isMultiSelect]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Multiselect?</Text>
        <Switch value={isMultiSelect} onValueChange={setIsMultiSelect} />
        <Text style={styles.title}>submitOnSelect?</Text>
        <Switch
          value={submitOnSelect}
          onValueChange={setSubmitOnSelect}
          disabled={isMultiSelect}
        />
        <Text style={styles.title}>Select people:</Text>
        <View>
          <Select
            items={people}
            keyExtractor={(person) => person.id}
            labelExtractor={(person) => `${person.name} (${person.id})`}
            onSubmit={setSelectedPeopleKeys}
            defaultSelectedKeys={defaultSelectedKeys}
            multiselect={isMultiSelect}
            submitOnSelect={submitOnSelect}
            renderItem={({ key, label, onPress, selected }) => (
              <Pressable
                key={key}
                style={[styles.item, selected && styles.selectedItem]}
                onPress={onPress}
              >
                <Text>
                  {selected ? '✅ ' : '🔲 '} {label}
                </Text>
              </Pressable>
            )}
          />
        </View>

        <View>
          <Text>{JSON.stringify(selectedPeopleKeys)}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
  container: {
    padding: 16,
    gap: 16,
  },
  item: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'lightgray',
    marginBottom: 8,
  },
  selectedItem: {
    borderColor: 'gray',
  },
});

export default App;
