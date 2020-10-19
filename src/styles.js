import {Dimensions, StyleSheet} from "react-native";

/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */

const main = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#303e45",
    },
    banner: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        alignItems: "center"
    },
    todoText: {
        fontSize: 50,
        fontWeight: "bold",
        color: "#ff9b31",
    },
    todoCount: {
        fontSize: 25,
        color: "#ff9b31",
    },
    emptyComponent: {
        textAlign: "center",
        fontSize: 18,
        color: "white"
    }

})

const todo_input = StyleSheet.create({
    inputContainer: {
        backgroundColor: "#e0e0e0",
        margin: 5,
        borderRadius: 5,
    },
    container: {
        backgroundColor: "#a7b6bd",
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        backgroundColor: "#4a636e",
        padding: 10,
        margin: 10,
        width: Dimensions.get("window").width/2.5,
        alignSelf: "center",
        borderRadius: 8,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    }
})

const todo_card = StyleSheet.create({
    container: {
        backgroundColor: "#a7b6bd",
        padding: 5,
        margin: 5,
        borderRadius: 7,
    },
    text: {
        fontSize:18,
    }
})

export {main, todo_input, todo_card};