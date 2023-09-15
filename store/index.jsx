import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './TodoReducer';
const store = configureStore({
  reducer: {
    todoReducer: TodoReducer,
  },
});
export default store;
