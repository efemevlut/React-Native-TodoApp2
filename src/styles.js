import { Dimensions, StyleSheet } from 'react-native';

const main = StyleSheet.create({
    container: {
        flex:1 ,
        backgroundColor: "#303e45",
    },
    banner: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center",
    },
    todoText: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#ff9b31",
    },
    todoCount: {
        fontSize: 25,
        color: "#ff9b31",

    },

});

const todo_input = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#e0e0e0",
        padding:10,
        margin:10,
        borderRadius:10,
    },
    container: {
        backgroundColor: "#a7b6bd",
        padding:10,
        margin:10,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: "#4a636e",
        padding: 10,
        margin:10,
        width: Dimensions.get("window").width/2.5,
        alignSelf: "center",
        borderRadius: 10,
    },

    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    }
})

export {main, todo_input};