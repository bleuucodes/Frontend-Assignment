import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    lists: [
      {
        name: "Things to Buy",
        todos: [
          {
            title: "Carrot",
            description: "Carrot improves eyesight.",
            id: "first"
          },
          {
            title: "Bicycle",
            description: "Bicycle makes commuting easier.",
            id: "second"
          },
        ],
      },
      {
        name: "Empty List",
        todos: []
      }
    ],
    selectedTodo: null,
  },
  reducers: {
    addList: (state, action) => {
      state.lists.push({ name: action.payload, todos: [] });
    },

    deleteList: (state, action) => {
      state.lists.splice(action.payload, 1);
    },

    addTodo: (state, action) => {
      const { listIndex, todo } = action.payload;
      state.lists[listIndex].todos.push({ ...todo, id: Date.now() });
    },

    deleteTodo: (state, action) => {
      const { listIndex, todoId } = action.payload;
      state.lists[listIndex].todos= state.lists[listIndex].todos.filter((todo) => todo.id !== todoId);
    },

    selectTodo: (state, action) => {
      state.selectedTodo = action.payload;
    },

    saveTodo: (state, action) => {
      const { listIndex, id, newTitle, newDescription } = action.payload;
      const todo = state.lists[listIndex].todos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle;
        todo.description = newDescription;
      }
    },
  },
});

export const {addList,deleteList,addTodo,deleteTodo,selectTodo,saveTodo} = todoSlice.actions;
export default todoSlice.reducer;