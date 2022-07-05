import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes/colors";
export const styles = StyleSheet.create({
    containerKeyboard: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        height: 300,
        width: '80%',
        maxWidth: 400,
        padding: 15,
        margin: 15,
        borderColor: colors.primary,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: colors.white,
    },
    label: {
        fontSize: 14,
        fontFamily: "Lato-Bold",
        marginVertical: 5,
    },
    title: {
        fontSize: 18,
        fontFamily: 'Lato-Bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    propmt: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    propmtMessage: {
        fontSize: 14,
        fontFamily: 'Lato-Regular',
        color: colors.text,
        marginRight: 15
    },
    propmtButton: {
        fontSize: 14,
        fontFamily: 'Lato-Bold',
        color: colors.primary,
        textAlign: 'center',
    }
});