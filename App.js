
import React, { useState } from 'react';
import { View, Image, StyleSheet, Button, Alert, Text, FlatList, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: '#fff',
  },
  content : {
    padding: 40,
  },
  list: {
    marginTop: 20,
  }
});

const DisplayAnImage = () => {

  const [todos, setTodos] = useState([
    {text: "React Native", key: "1"},
    {text: "VueJs", key: "2"},
    {text: "Laravel", key: "3"},

  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
        return  prevTodos.filter(todo => todo.key !=key);
    });
  };

  const submitHandler = (text) => {

    {/* Validation */}

    if(text.length > 3) {
      setTodos((prevTodos) => {
        return [
          {text: text , key: Math.random().toString() },
          ...prevTodos
        ];
      });
  
    }else {
      Alert.alert("Oops", 'Todo deve essere maggiore di 3 caratteri', [
        { text: "Comprende?"},
      ]);
    }

  };

  return (
    <TouchableWithoutFeedback onPress={() => {
        Keyboard.dismiss();
    }} >
      <View style={styles.container}>
        <Header />
        {/* Content */}
        <View style={styles.content}>
          <AddTodo  submitHandler={submitHandler} />
          {/* list */}
            <View style={styles.list}>
              <FlatList 
                  data={todos}
                  renderItem={({ item }) => (
                    <TodoItem item={item} 
                              pressHandler={pressHandler}                  
                    />
                  )}
              />
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default DisplayAnImage;