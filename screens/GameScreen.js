import { View, Text, StyleSheet, Alert } from 'react-native'
import colors from '../constans/colors'
import { useState, useEffect } from 'react'
import PrimaryButton from '../components/PrimaryButton';
import GameOverScreen from './GameOverScreen';


export default function GameScreen({ chosenNumber, gameOverHandle }) {
    const [rounds, setRounds] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [minBound, setMinBound] = useState(1);
    const [maxBound, setMaxBound] = useState(99);

    function handleUserDirection(direction) {
        if (direction === 'correct') {
            gameOverHandle(rounds);
            return;
        }
        if ((direction === 'lower' && chosenNumber > currentGuess) ||
            (direction === 'higher' && chosenNumber < currentGuess)
        ) {
            Alert.alert('Hey sweetie🙄', "That's not right ...let's play fair okay?",
                [{ text: "Okay", style: "cancel" }]);
            return;
        }
        if (direction === 'lower') {
            setMaxBound(currentGuess - 1);
        } else if (direction === 'higher') {
            setMinBound(currentGuess + 1);
        }
        const nextGuess = Math.floor((maxBound + minBound) / 2);
        setCurrentGuess(nextGuess);
        setRounds((preve) => [...preve, { round: preve.length + 1, guess: nextGuess }])

    }

    useEffect(() => {
        const firstGuess = Math.floor(Math.random() * (99 - 1 + 1) + 1);
        setCurrentGuess(firstGuess);
        setRounds([{ round: 1, guess: firstGuess }]);
    }, [])
    return (
        <View style={{
            flex: 1,
            alignContent: 'center',
            justifyContent: 'center',
            backgroundColor: 'transparent'

        }}>
            <Text style={styles.text}>{currentGuess}</Text>
            <PrimaryButton onPress={() => handleUserDirection('lower')} >Lower</PrimaryButton>
            <PrimaryButton onPress={() => handleUserDirection('higher')} >Higher</PrimaryButton>
            <PrimaryButton onPress={() => handleUserDirection('correct')} >Correct</PrimaryButton>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center"
    }
})
