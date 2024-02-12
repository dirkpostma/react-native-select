import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { multiply } from 'react-native-select';

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [result, setResult] = React.useState<number | undefined>();

  React.useEffect(() => {
    const calculate = async () => {
      const result = await multiply(3, 7);
      setResult(result);
      setLoading(false);
    };

    calculate();
  }, []);

  return (
    <View style={styles.container}>
      {loading && <Text>Loading...</Text>}
      {!loading && <Text>Result: {result}</Text>}
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
