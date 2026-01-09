import { View, Text, StyleSheet, Alert } from 'react-native'
import colors from '../constans/colors'
import { useState, useEffect } from 'react'
import PrimaryButton from '../components/PrimaryButton';
import CustomAlert from '../components/alert';


export default function GameScreen({ chosenNumber, gameOverHandle }) {
    const [rounds, setRounds] = useState([]);
    const [currentGuess, setCurrentGuess] = useState(0);
    const [minBound, setMinBound] = useState(1);
    const [maxBound, setMaxBound] = useState(99);
    const [alertVisible, setAlertVisible] = useState(false);


    function handleUserDirection(direction) {
        if (direction === 'correct' && chosenNumber === currentGuess) {
            gameOverHandle(rounds);
            return;
        } else if (direction === 'correct' && chosenNumber != currentGuess) {
            setAlertVisible(true);
            return;
        }
        if ((direction === 'lower' && chosenNumber > currentGuess) ||
            (direction === 'higher' && chosenNumber < currentGuess)
        ) {
            setAlertVisible(true);

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
        <>
            <CustomAlert
                visible={alertVisible}
                title='Hey sweetie'
                message="That's not right ...let's play fair okay?"
                onConfirm={() => setAlertVisible(false)}
                onCancel={() => setAlertVisible(false)}
            />
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>

                <Text style={styles.text}>{currentGuess}</Text>
                <PrimaryButton onPress={() => handleUserDirection('lower')} >Lower</PrimaryButton>
                <PrimaryButton onPress={() => handleUserDirection('higher')} >Higher</PrimaryButton>
                <PrimaryButton onPress={() => handleUserDirection('correct')} >Correct</PrimaryButton>
            </View>
        </>
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
