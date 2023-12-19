import { StyleSheet } from "react-native";
import { colors } from "../../constants/Colors";

const styles = StyleSheet.create({
    button: (selected: string, item: string)=> ({
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        borderRadius: 13,
        marginTop: 10,
        backgroundColor: selected === item ? colors.lightBlue: colors.white,
    }),

    buttonContainer: {
        width: '100%',
    },

    introText:{
        fontSize: 25,
    },

    });

export default styles;