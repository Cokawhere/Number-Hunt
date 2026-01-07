import { View, Text, StyleSheet } from 'react-native'
import colors from '../constans/colors'

export default function Guess({ rounds }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{rounds.round}:{rounds.guess}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 26,
        fontWeight: "bold",
        color: colors.white,
        margin:'auto',
        textAlign:"center"

    },
    container: {
        borderWidth: 1,
        borderColor: '#ffffff6a',
        backgroundColor: colors.primary,
        marginVertical: 4,
        width:200,
        height:40,
    }
})
