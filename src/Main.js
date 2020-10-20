import React, {useState} from 'react';
import {SafeAreaView, Text, View, FlatList, Alert} from 'react-native';

import {main} from './styles';
import {TodoInput, TodoCard} from './components';

const Main = () => {
  const [list, setList] = useState([]);

  function addTodo(text) {

    if (text.length < 2) {
        Alert.alert('OOPS!', 'Todos must be over 2 chars long', [
            {text: 'Understood'},
        ]);    
    } else {
        const element = {
          id: list.length,
          todo: text,
          isDone: false,
        };

        const newArray = [...list, element];

        setList(newArray);
    }
  }

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;
    setList(newArray);
  }

  function removeTodo(todoId){
    const newArray = [...list];
    const todoIndex = list.findIndex(t => t.id == todoId)
    newArray.splice(todoIndex, 1)
    setList(newArray)
  }

  const renderTodo = ({item}) => {
    return (
        <TodoCard 
            data={item} 
            onDone={() => doneTodo(item.id)} 
            onRemove={() => Alert.alert("Delete", "Are you sure?", [
                {text: 'Sure', onPress: () => removeTodo(item.id)},
                {text: 'Cancel'},
                ])
            }
        />
    )
  };
  return (
    <SafeAreaView style={main.container}>
      <View style={main.container}>
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <Text style={main.todoCount}>
            {list.filter((list) => list.isDone === false).length}
          </Text>
        </View>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => (
            <Text style={main.emptyComponent}>Nothing to do ...</Text>
          )}
        />

        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </View>
    </SafeAreaView>
  );
};

export default Main;
