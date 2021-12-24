import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TodoStatus {
  Active = "ACTIVE",
  Completed = "COMPLETED",
}

export interface Todo {
  id: string;
  title: string;
  status: TodoStatus;
  createdAt: string;
}

export interface TodosSlice {
  todos: Todo[];
}

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    edit: (
      state,
      action: PayloadAction<{
        id: string;
        newTitle: string;
      }>
    ) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          const updatedTodo = {
            ...todo,
            title: action.payload.newTitle,
          };
          return updatedTodo;
        }
        return todo;
      });
    },
    complete: (state, action: PayloadAction<string>) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            status: TodoStatus.Completed,
          };
        }
        return todo;
      });
    },
  },
});

export const { add, remove, edit, complete } = todoSlice.actions;

export default todoSlice.reducer;
