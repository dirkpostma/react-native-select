import React, { useState } from 'react';

interface Props<T> {
  items: T[];
  keyExtractor: (item: T) => string | number;
  labelExtractor: (item: T) => string;
  onSelect: (selectedItems: T[]) => void;
  renderItem: (props: RenderItemProps) => React.ReactNode;
}

interface RenderItemProps {
  key: string | number;
  label: string;
  onPress: () => void;
  selected: boolean;
}

export const Select = <T,>({
  items,
  keyExtractor,
  labelExtractor,
  onSelect,
  renderItem,
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
      {items.map((item) =>
        renderItem({
          key: keyExtractor(item),
          label: labelExtractor(item),
          onPress: () => toggleItem(item),
          selected: selectedItems.some(
            (selectedItem) => keyExtractor(selectedItem) === keyExtractor(item)
          ),
        })
      )}
    </>
  );
};
