import { ImageBackground } from 'react-native';
import StartGameScreen from './screens/startGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';


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
    setRounds([]);
  }
  function gameOverHandle(roundsList) {
    setIsGameOver(true);
    setRounds(roundsList)
  }

  let screen = <StartGameScreen pickedNumerHendler={pickedNumberHandler} />
  if (userNumber && !isGameOver) {
    screen = <GameScreen chosenNumber={userNumber} gameOverHandle={gameOverHandle} />
  } else if (userNumber && isGameOver) {
    screen = <GameOverScreen rounds={rounds} returnToHome={returnToHome} userNumber={userNumber} />
  }

  return (
    <SafeAreaProvider>
      <LinearGradient colors={['#f5f5f5ff', '#f02323fe']} style={{ flex: 1, }}>
        <ImageBackground source={require('./assets/dice.jpeg')} resizeMode='cover'
          style={{ flex: 1, }} imageStyle={{ opacity: .4 }} >
          {screen}
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

