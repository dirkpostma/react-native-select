import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';
import { View } from 'react-native';

interface Props<T, K extends string | number> {
  items: T[];
  keyExtractor: (item: T) => K;
  labelExtractor: (item: T) => string;
  onSubmit: (selectedKeys: K[]) => void;
  renderItem: (props: RenderItemProps<K>) => React.ReactNode;
  multiselect: boolean;
  defaultSelectedKeys?: K[];
  submitOnSelect?: boolean;
}

interface RenderItemProps<K extends string | number> {
  key: K;
  label: string;
  onPress: () => void;
  selected: boolean;
}

export const Select = <T, K extends string | number>({
  items,
  keyExtractor,
  labelExtractor,
  onSubmit,
  renderItem,
  multiselect = false,
  defaultSelectedKeys = [],
  submitOnSelect = true,
}: Props<T, K>) => {
  const [selectedItems, setSelectedItems] = useState<K[]>([]);

  useEffect(() => {
    setSelectedItems(defaultSelectedKeys);
  }, [setSelectedItems, defaultSelectedKeys, multiselect]);

  const toggleItem = (item: T) => {
    const key = keyExtractor(item);
    const isSelected = selectedItems.includes(key);

    let newSelectedItems: K[];
    if (!multiselect) {
      newSelectedItems = isSelected ? [] : [key];
      if (submitOnSelect) {
        onSubmit(newSelectedItems);
      }
    } else {
      newSelectedItems = isSelected
        ? selectedItems.filter((k) => k !== key)
        : [...selectedItems, key];
    }

    setSelectedItems(newSelectedItems);
  };

  return (
    <View>
      {items.map((item) =>
        renderItem({
          key: keyExtractor(item),
          label: labelExtractor(item),
          onPress: () => toggleItem(item),
          selected: selectedItems.includes(keyExtractor(item)),
        })
      )}

      <Button
        title="Submit"
        onPress={() => onSubmit(selectedItems)}
        disabled={submitOnSelect && !multiselect}
      />
    </View>
  );
};
