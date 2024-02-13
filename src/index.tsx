import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { Text } from 'react-native';

interface Props<T> {
  items: T[];
  keyExtractor: (item: T) => string | number;
  labelExtractor: (item: T) => string;
  onSelect: (selectedItems: T[]) => void;
}

export const Select = <T,>({
  items,
  keyExtractor,
  labelExtractor,
  onSelect,
}: Props<T>) => {
  const [selectedItems, setSelectedItems] = useState<T[]>([]);

  const toggleItem = (item: T) => {
    const isSelected = selectedItems.some(
      (selectedItem) => keyExtractor(selectedItem) === keyExtractor(item)
    );

    const newSelectedItems = isSelected
      ? selectedItems.filter(
          (selectedItem) => keyExtractor(selectedItem) !== keyExtractor(item)
        )
      : [...selectedItems, item];

    setSelectedItems(newSelectedItems);
    onSelect(newSelectedItems);
  };

  return (
    <>
      {items.map((item) => (
        <Pressable
          key={keyExtractor(item)}
          style={styles.item}
          onPress={() => toggleItem(item)}
        >
          <Text>
            {selectedItems.some(
              (selectedItem) =>
                keyExtractor(selectedItem) === keyExtractor(item)
            )
              ? '✅ '
              : '🔲 '}

            {labelExtractor(item)}
          </Text>
        </Pressable>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'lightgray',
    marginBottom: 8,
  },
});
