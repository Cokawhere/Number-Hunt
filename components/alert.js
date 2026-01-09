import { View, Text, Modal, StyleSheet } from 'react-native';
import colors from '../constans/colors';
import PrimaryButton from './PrimaryButton';

export default function CustomAlert({ visible, title, message, onConfirm, onCancel }) {
    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={styles.overlay}>
                <View style={styles.alertBox}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.message}>{message}</Text>

                    <View style={styles.buttons}>
                        <PrimaryButton onPress={onCancel}>Cancel</PrimaryButton>
                        <PrimaryButton onPress={onConfirm}>OK</PrimaryButton>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.05)', justifyContent: 'center', alignItems: 'center' },
    alertBox: { backgroundColor: '#fff', padding: 24, borderRadius: 20, width: '89%', elevation: 20 },
    title: { fontSize: 24, fontWeight: 'bold', color: colors.primary, textAlign: 'center', marginBottom: 10 },
    message: { fontSize: 18, textAlign: 'center', marginBottom: 20, color: '#333' },
    buttons: { flexDirection: 'row', justifyContent: 'space-around' },
});