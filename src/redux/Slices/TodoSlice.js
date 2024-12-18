import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "i am default todo",
    },
  ],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id != action.payload);
    },
  },
});


export const{addTodo,removeTodo} = TodoSlice.actions;
export default TodoSlice.reducer
