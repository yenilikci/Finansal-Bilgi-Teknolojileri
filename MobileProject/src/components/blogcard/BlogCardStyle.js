import { StyleSheet } from "react-native";
import { borderBottomColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default StyleSheet.create({
    card: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: '#707070',
        flexDirection: 'row',
        display: 'flex',
        borderRadius: 15,
        marginLeft: 7,
        marginRight: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 20,
            height: 30,
        },
        shadowOpacity: 0.9,
        shadowRadius: 3.84,
        elevation: 20,
    },
    text: {
        color: '#000',
        fontSize: 14,
        marginTop: 15,
    },
    title: {
        color: '#ddd',
        backgroundColor: '#000',
        textAlign: 'center',
        borderRadius: 15,
        padding: 10,
        fontSize: 20,
        borderColor: '#ddd',
        borderWidth: 2
    },
    newsTitle: {
        marginTop: 5,
        alignSelf:'flex-end',
        fontSize: 14,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        fontWeight: 'bold'
    }
})