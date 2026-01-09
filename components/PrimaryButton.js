import { View, Text, StyleSheet, Pressable } from 'react-native'
import colors from '../constans/colors'

export default function PrimaryButton({ children, onPress, morestyle }) {
    return (
        <View style={[styles.buttonContainer, morestyle,]}>
            <Pressable onPress={onPress} style={({ pressed }) => [

                pressed && [styles.pressStyle,],
            ]} >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}
const styles = StyleSheet.create({
    buttonContainer: {
        margin: 10,
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        overflow: 'hidden',
        backgroundColor: colors.primary,
        height: 50,
        width: 150,
        borderRadius: 20,
        padding: 10,

    },

    buttonText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    pressStyle: {
        opacity: 0.5,
        borderRadius: 20,
    }
})
