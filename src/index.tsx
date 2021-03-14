import { useEffect, useState } from 'react';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

const createStyle = (style = {}) => {
  return StyleSheet.create({ __main: style }).__main;
};

export const useDynamicStyle = (
  dynamicStyle: () => ViewStyle | ImageStyle | TextStyle,
  deps: React.DependencyList | undefined
) => {
  const [style, setStyle] = useState(() => {
    return createStyle(dynamicStyle());
  });

  useEffect(() => {
    setStyle(createStyle(dynamicStyle()));
  }, deps);

  return style;
};
