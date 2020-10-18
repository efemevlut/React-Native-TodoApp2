import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import {main} from "./styles"
import TodoInput from "./components/TodoInput"
/**
 * #303e45
 * #a7b6bd
 * #4a636e
 * #ff9b31
 */
const Main = () => {
    return (
        <SafeAreaView style={main.container}>
            <View style={main.banner}>
                <Text style={main.todoText}>TODO</Text>
                <Text style={main.todoCount}>10</Text>
            </View>
            <TodoInput 
                onTodoEnter={todoText => alert(todoText)}
            />
        </SafeAreaView>
    );
}
export default Main;