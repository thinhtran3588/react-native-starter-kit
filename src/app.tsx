import React, {useState} from 'react';
import {SafeAreaView, Text, Button} from 'react-native';
import {styles} from './app.style';

export const App = (): JSX.Element => {
  const [showMessage, setShowMessage] = useState(false);
  const sayHello = (): void => {
    setShowMessage(true);
  };
  return (
    <SafeAreaView>
      <Button title="Say hello" onPress={sayHello} />
      {showMessage && <Text style={styles.message}>Hello world</Text>}
    </SafeAreaView>
  );
};
