import { StyleSheet } from "react-native";

export default StyleSheet.create({
    card: {
        backgroundColor: '#333333',
        flexDirection: 'row',
        display: 'flex',
        marginTop: 10,
        borderRadius: 15,
        marginLeft: 7,
        marginRight: 7,
    },
    title: {
        color: '#fff'
    },
    subtitle: {
        color: '#ddd'
    },
    stockMarketName: {
        color: '#ddd',
        backgroundColor: '#000',
        width: 100,
        textAlign: 'center',
        borderRadius: 15,
        padding: 10
    }
})