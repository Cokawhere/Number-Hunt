import { ImageBackground } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds, setRounds] = useState([]);

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
  }
  function returnToHome() {
    setUserNumber(null);
    setIsGameOver(false);
  }
  function gameOverHandle(roundsList) {
    setIsGameOver(true);
    setRounds(roundsList)
  }

  let screen = <StartGameScreen pickedNumerHendler={pickedNumberHandler} />
  if (userNumber && !isGameOver) {
    screen = <GameScreen chosenNumber={userNumber} gameOverHandle={gameOverHandle} />
  } else if (userNumber && isGameOver) {
    screen = <GameOverScreen rounds={rounds} returnToHome={returnToHome} />
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

