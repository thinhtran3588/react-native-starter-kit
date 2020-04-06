import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {styles} from './app.style';

const colors = ['purple', 'blue', 'green', 'pink', 'orange', 'black'];
const getRandomInt = (max: number): number => Math.floor(Math.random() * Math.floor(max));
const getRandomColor = (): string => colors[getRandomInt(colors.length)];

export const App = (): JSX.Element => {
  const [color, setColor] = useState('');

  const setLuckyColor = (): void => {
    setColor(getRandomColor());
  };

  const [randomColor, setRandomColor] = useState('purple');
  useEffect(() => {
    const changeColorInterval = setInterval(() => {
      setRandomColor(getRandomColor());
    }, 1000);
    return () => {
      clearInterval(changeColorInterval);
    };
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Random colors:</Text>
        <Text style={[styles.colorText, {color: randomColor}]}>{randomColor}</Text>
        <Button title='Get your lucky color today' onPress={setLuckyColor} />
        {Boolean(color) && <Text style={[styles.colorText, {color}]}>{color}</Text>}
      </View>
    </SafeAreaView>
  );
};
