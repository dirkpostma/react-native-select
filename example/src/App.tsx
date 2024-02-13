import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Select } from 'react-native-select';

export default function App() {
  return (
    <View style={styles.container}>
      <Select />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
