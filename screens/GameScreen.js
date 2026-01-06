import { View, Text, StyleSheet } from 'react-native'

export default function GameScreen({ chosenNumber, }) {
    return (
        <View>
            <Text style={styles.text}>{chosenNumber}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        color: "black",
        fontSize: 33,
        fontWeight: "bold",
        alignContent: 'center',
        justifyContent: 'center',
    }
})
