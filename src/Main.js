import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList,} from 'react-native';

import {main} from './styles';
import  {TodoInput} from "./components"


const Main = () => {

    const [list,setList] = useState([])

    function addTodo(text) {
        const element = {
            id: list.length,
            todo: text,
            isDone: false
        }

        const newArray = [...list, element]

       setList(newArray)
       console.log(newArray)
    }

  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>10</Text>
        </View>

        <FlatList 
            data={null}
            renderItem={() => null}
        />

        <TodoInput 
            onTodoEnter={todoText => addTodo(todoText)}
        />

      </View>
    </SafeAreaView>
  );
};



export default Main;
