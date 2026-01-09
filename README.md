# Number Hunt 🎲

A fun and smart number guessing game built with **React Native** and **Expo**.  
The phone uses binary search to guess your secret number (1-99) in the fewest rounds possible – and it even catches you if you try to cheat😏

Perfect beginner project to showcase core React Native concepts.

## Screenshots

![Start Screen](./assets/screenshots/homescreen.png)
![Start Screen Alert](./assets/screenshots/homescreeen-alert.png)
![Game Screen](./assets/screenshots/game-screen.png)
![Game Screen alert](./assets/screenshots/game-screen's-alert.png)
![Game Over Screen](./assets/screenshots/gameoverscreen.png)

## Features 

- Beautiful UI with LinearGradient + dice ImageBackground (opacity for cool effect)
- Binary search algorithm for optimal guessing
- Cheat detection (alert if you lie about higher/lower)
- Tracks guess history and shows rounds count on Game Over
- Custom reusable components (PrimaryButton, Guess item, Alert, Appbar)


## Key Concepts Demonstrated (Great for Beginners!)

This simple app covers essential React Native fundamentals:

- **State Management**: useState for userNumber, rounds, bounds, currentGuess
- **Conditional Rendering**: Switch between StartGameScreen, GameScreen, GameOverScreen in App.js
- **Props & Callbacks**: Passing handlers like pickedNumberHandler, gameOverHandle
- **Custom Components**: PrimaryButton with Pressable + pressed state, Guess list item
- **Styling**: StyleSheet, shadows, elevation, LinearGradient, ImageBackground
- **User Input & Validation**: TextInput with number-pad, Alert for invalid input
- **Lists**: FlatList for guess history in GameOverScreen
- **Side Effects**: useEffect for initial random guess

## Tech Stack

- React Native
- Expo (expo-linear-gradient)
- Pure JavaScript (no external state libraries)

