const colors = {
    primary: '#f02323fe',
    primaryLight: '#ea0e0eb2',
    white: '#fffffffe',
    redTransparent: '#f36060ff',
}
export default colors;



// const [currentGuess, setCurrentGuess] = useState(50); // أول guess دايمًا 50
// const [minBound, setMinBound] = useState(1);
// const [maxBound, setMaxBound] = useState(99);
// const [rounds, setRounds] = useState(0);

// function handleUserDirection(direction) {

//     if (direction === 'correct') {
//         Alert.alert("I Got It! 🎉", `Your number was ${chosenNumber}. I guessed it in ${rounds + 1} rounds! 🔥`);
//         return;
//     }
//     if (
//         (direction === 'lower' && currentGuess < chosenNumber) ||
//         (direction === 'higher' && currentGuess > chosenNumber)
//     ) {
//         Alert.alert("Don't Lie! 😏", "You know that's wrong... Play fair!", [{ text: "Sorry", style: "cancel" }]);
//         return;
//     }

//     if (direction === 'lower') {
//         setMaxBound(currentGuess - 1);
//     } else if (direction === 'higher') {
//         setMinBound(currentGuess + 1);
//     }

//     const nextGuess = Math.floor((minBound + maxBound) / 2);
//     setCurrentGuess(nextGuess);
//     setRounds(rounds + 1);
// }