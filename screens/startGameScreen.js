import { View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'
import { useState } from 'react';
import colors from '../constans/colors';


export default function StartGameScreen({ pickedNumerHendler }) {
    const [enteredNumber, setEnteredNumber] = useState('');
    function onChangeNumberValue(inputText) {
        setEnteredNumber(inputText);
    }
    function confirmNumber() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
            Alert.alert("Invalid number", "Please enter a number between 1 and 99"
                , [{ text: 'OK', style: 'default' },]);
            return;
        }
        pickedNumerHendler(chosenNumber);

    }
    function resetNumber() {
        setEnteredNumber('');
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <View style={styles.mainView}>
                <TextInput style={styles.numberInput} maxLength={2}
                    keyboardType='number-pad' value={enteredNumber}
                    onChangeText={onChangeNumberValue} />
                <View style={{ flexDirection: 'row' }}>
                    <PrimaryButton onPress={resetNumber} >Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
                </View >
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainView: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 100,
        backgroundColor: colors.primaryLight,
        width: '95%',
        borderRadius: 20,
        elevation: 10,
        shadowColor: 'black',
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 10,
    },
    numberInput: {
        color: colors.white,
        fontSize: 33,
        fontWeight: "bold",
        alignContent: 'center',
        justifyContent: 'center',
        width: 70,
        textAlign: 'center',
        marginBottom: 8,
        borderBottomWidth: 4,
        borderBottomColor: colors.white,

    }
})
