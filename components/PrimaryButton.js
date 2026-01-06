import { View, Text, StyleSheet, Pressable } from 'react-native'

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonContainer}>
            <Pressable onPress={onPress} style={({ pressed }) => [
                styles.buttonPressable,
                pressed && styles.pressStyle,
            ]} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
        borderRadius: 20,
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        overflow: 'hidden',
    },
    buttonPressable: {
        backgroundColor: '#f02323fe',
        height: 50,
        width: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    pressStyle: {
        borderRadius: 10,
        overflow: 'hidden',
        height: 50,
        width: 150,
        borderRadius: 20,
        backgroundColor: '#f36060ff'
    }
})
