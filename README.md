# Number Hunt 🎲

A fun and smart number guessing game built with **React Native** and **Expo**.  
The phone uses binary search to guess your secret number (1-99) in the fewest rounds possible – and it even catches you if you try to cheat😏

Perfect beginner project to showcase core React Native concepts.

## Screenshots
<table>
  <tr>
    <td align="center">
      <img src="./assets/screenshots/homescreen.png" width="300" alt="Home Screen"/>
      <br><sub><b>Home Screen</b></sub>
    </td>
    <td align="center">
      <img src="./assets/screenshots/homescreeen-alert.png" width="300" alt="Invalid Input Alert"/>
      <br><sub><b>Invalid Input Alert</b></sub>
    </td>
    <td align="center">
      <img src="./assets/screenshots/game-screen.png" width="300" alt="Game Screen"/>
      <br><sub><b>Game Screen</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="./assets/screenshots/gamescreen-alert.png" width="300" alt="Cheat Detection Alert"/>
      <br><sub><b>Cheat Detection Alert</b></sub>
    </td>
    <td align="center">
      <img src="./assets/screenshots/gameoverscreen.png" width="300" alt="Game Over Screen"/>
      <br><sub><b>Game Over Screen</b></sub>
    </td>
    <td align="center">
      <!-- Empty cell to balance if needed -->
     
    </td>
  </tr>
</table>

<p align="center"><i>Screenshots taken on Android device – clean UI with gradient & dice background 🎲</i></p>

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






