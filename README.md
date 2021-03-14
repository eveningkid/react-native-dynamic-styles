# react-native-dynamic-styles

Dynamic stylesheet and styles for React Native.

```js
const [color, setColor] = useState('red');

// From unecessary style objects created at every render...
return <View style={{ backgroundColor: color }} />;

// ...to recreating a style object ONLY when dependencies have changed!
// And this time, it's not just an object but a StyleSheet reference instead :)
const style = useDynamicStyle(
  () => ({
    backgroundColor: color,
  }),
  [color]
);

return <View style={style} />;
```

⚡️ Generate optimized, dynamic styles just when you need it
⏩ Skip unecessary style object recreations
💅 Get `StyleSheet.create`d styles, even when they're dynamic

## Usage

```sh
npm install react-native-dynamic-styles
```

```js
import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDynamicStyle } from 'react-native-dynamic-styles';

export default () => {
  const [opened, setOpened] = useState(false);
  const toggle = () => setOpened(!opened);

  const style = useDynamicStyle(
    () => ({
      flex: 1,
      opacity: opened ? 1 : 0,
    }),
    [opened]
  );

  return (
    <>
      <Button title="Show/hide" onPress={toggle} />

      <View style={style}>
        <Text>This will be our secret!</Text>
      </View>
    </>
  );
};
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT © eveningkid
