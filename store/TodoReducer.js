import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  tasks: [],
  completetask: [],
};

const TodoReducer = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    updateTasks(state, action) {
      state.tasks = action.payload;
    },
    completedTasks(state, action) {
      const taskId = action.payload;
      state.tasks = state.tasks.filter((tasks) => taskId != tasks.id);
      const completeTask = state.tasks.find((taks) => taskId === taks.id);
      if (completeTask) {
        state.completetask.push(completeTask);
      }
      console.log(state.completetask);
    },
    UpdatedTrash(state, action) {
      state.tasks = state.tasks.filter((task) => task.id != action.payload);
    },
  },
});
export const { updateTasks, UpdatedTrash, completedTasks } =
  TodoReducer.actions;
export default TodoReducer.reducer;
