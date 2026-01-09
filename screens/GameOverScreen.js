import { View, Text, Image, StyleSheet } from "react-native";
import colors from "../constans/colors";
import PrimaryButton from "../components/PrimaryButton";

export default function GameOverScreen({ rounds, returnToHome, userNumber }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.imageStyle}
                    resizeMode="cover"
                    source={require("../assets/7.jpeg")}
                />
            </View>
            <Text style={styles.subtitle}>
                Your phone needed
                <Text style={{ color: "black" }}> {rounds.length}</Text>
                rounds to guess the number{" "}
                <Text style={{ color: "black" }}>{userNumber}</Text>
            </Text>
            <PrimaryButton onPress={returnToHome} morestyle={styles.buttonMargin}>
                Start a New Game
            </PrimaryButton>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    subtitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 15,
        width: "99%",
        padding: 5,
        textAlign: "center",
        color: colors.white,
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 100,
        overflow: "hidden",
        marginTop: "20%",
    },
    imageStyle: {
        width: "100%",
        height: "100%",
        borderRadius: 200,
    },
    buttonMargin: {
        width: 200,
        height: 50,
        marginTop: "50%",
        borderRadius: 10,
    },
});
