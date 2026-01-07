import { View, Text, FlatList, StyleSheet } from 'react-native'
import Guess from '../components/guess'
import colors from '../constans/colors';
import PrimaryButton from '../components/PrimaryButton';

export default function GameOverScreen({ rounds, returnToHome }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Over 🎉</Text>
            <Text style={styles.subtitle}>I guessed your number in {rounds.length} rounds</Text>
            <FlatList data={rounds} renderItem={({ item }) => {
                return <Guess rounds={item} />;
            }}>
            </FlatList>
            <PrimaryButton onPress={returnToHome}>Home</PrimaryButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginVertical: 20,
        color: colors.white,
        textAlign: "center",
        backgroundColor: colors.primaryLight,
        margin: 10,
        padding: 5,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 12,
        width: '90%'
    },
    subtitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 15,
        backgroundColor: colors.white,
        width: '99%',
        padding:5,
        borderRadius:10,
        textAlign:'center'
    },
});