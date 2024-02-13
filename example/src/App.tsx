import React, { useState } from 'react';

import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Select } from 'react-native-select';

interface Person {
  id: number;
  name: string;
}

const people: Person[] = [
  { id: 1, name: 'Bob' },
  { id: 2, name: 'Alice' },
];

export const App = () => {
  const [selectedPeople, setSelectedPeople] = useState<Person[]>([]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.title}>Select people:</Text>
        <Select
          items={people}
          keyExtractor={(person) => person.id}
          labelExtractor={(person) => person.name}
          onSelect={setSelectedPeople}
        />

        <View>
          <Text>{JSON.stringify(selectedPeople, null, 2)}</Text>
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
  },
});

export default App;
