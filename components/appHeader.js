import { Appbar } from "react-native-paper"
import colors from "../constans/colors"
import { StyleSheet } from "react-native"

export default function AppHeader({ title, onBack }) {
    return (
        <Appbar.Header mode="center-aligned" style={styles.appbarStyle}>
            <Appbar.Content title={title} titleStyle={{ color: colors.white, fontWeight: 'bold' }} />
        </Appbar.Header>
    )
}
const styles = StyleSheet.create({
    appbarStyle: {
        backgroundColor: colors.primaryLight,
        height: 40,
    }
})
