import React, { useState } from 'react';
import { View, Button } from 'react-native';
import { useDynamicStyle } from 'react-native-dynamic-styles';

const generateNumber = () => {
  return Math.floor(Math.random() * 255);
};

const generateColor = () => {
  return `rgb(${generateNumber()}, ${generateNumber()}, ${generateNumber()})`;
};

export default function App() {
  const [color, setColor] = useState(() => generateColor());

  const style = useDynamicStyle(
    () => ({
      backgroundColor: color,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }),
    [color]
  );

  const updateColor = () => setColor(generateColor());

  return (
    <View style={style}>
      <Button title="Update color" onPress={updateColor} />
    </View>
  );
}
