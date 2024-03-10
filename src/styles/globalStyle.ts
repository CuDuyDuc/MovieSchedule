import { StyleSheet } from "react-native";
import COLORS from "../assets/colors/Colors";
import { FONTFAMILY } from "../../assets/fonts";


export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.HEX_BLACK
    },
    text: {
        fontFamily: FONTFAMILY.poppins_regular,
        fontSize: 16,
        color: COLORS.HEX_LIGHT_GREY
    },
    button: {
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.HEX_ORANGE,
        paddingHorizontal: 10,
        height: 56,
        flexDirection: 'row'
    },
    section: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    }, 
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})