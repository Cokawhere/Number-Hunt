import { View, TextInput, StyleSheet, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import colors from "../constans/colors";
import CustomAlert from "../components/alert";

export default function StartGameScreen({ pickedNumerHendler }) {
    const [enteredNumber, setEnteredNumber] = useState("");
    const [alertVisible, setAlertVisible] = useState(false);
    function onChangeNumberValue(inputText) {
        setEnteredNumber(inputText);
    }
    function confirmNumber() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber < 1 || chosenNumber > 99) {
            setAlertVisible(true);

            return;
        }
        pickedNumerHendler(chosenNumber);
    }
    function resetNumber() {
        setEnteredNumber("");
    }
    return (
        <>
            <CustomAlert
                visible={alertVisible}
                title="Invalid Number"
                message="Please enter a number between 1 and 99"
                onConfirm={() => setAlertVisible(false)}
                onCancel={() => setAlertVisible(false)}
            />
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={styles.textStyle}>Pick a number…</Text>
            </View>

            <View style={styles.mainView}>
                <TextInput
                    style={styles.numberInput}
                    maxLength={2}
                    keyboardType="number-pad"
                    value={enteredNumber}
                    onChangeText={onChangeNumberValue}
                />
                <View style={{ flexDirection: "row" }}>
                    <PrimaryButton onPress={resetNumber}>Reset</PrimaryButton>
                    <PrimaryButton onPress={confirmNumber}>Confirm</PrimaryButton>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    mainView: {
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
        marginTop: "5%",
        backgroundColor: colors.primaryLight,
        width: "95%",
        borderRadius: 20,
        elevation: 10,
        shadowColor: "black",
        shadowRadius: 10,
        shadowOpacity: 1,
        shadowOffset: { width: 0, height: 2 },
        marginHorizontal: 10,
    },
    numberInput: {
        color: colors.white,
        fontSize: 33,
        fontWeight: "bold",
        alignContent: "center",
        justifyContent: "center",
        width: 70,
        textAlign: "center",
        marginBottom: 8,
        borderBottomWidth: 4,
        borderBottomColor: colors.white,
    },
    textStyle: {
        marginTop: '60%',
        marginBottom: 16,
        fontSize: 23,
        fontWeight: '900',
        color: 'rgba(255, 255, 255, 1)',
        textAlign: 'center',
        fontStyle: "italic",
        shadowColor: '#df2525ff',
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 10,
        padding: '3%',
    },
});
