import { StyleSheet, View, ImageBackground } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  let screen = <StartGameScreen pickedNumerHendler={pickedNumberHandler} />
  if (userNumber) {
    screen = <GameScreen chosenNumber={userNumber} />
  }

  return (
    <LinearGradient colors={['#f5f5f5ff', '#f02323fe']} style={{ flex: 1, }}>
      <ImageBackground source={require('./assets/dice.jpeg')} resizeMode='cover'
        style={{ flex: 1, }} imageStyle={{ opacity: .6 }} >
        <SafeAreaView style={{ flex: 1, }}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

