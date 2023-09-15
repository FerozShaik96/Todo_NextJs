import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  tasks: [],
  completedtask: [],
};

const TodoReducer = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    updateTasks(state, action) {
      console.log(action.payload);
      console.log((state.tasks = action.payload));
      state.tasks = action.payload;
    },
    completedTasks(state, action) {
      state.tasks = state.tasks.filter(
        (tasks) => state.tasks[action.payload].task != tasks.task,
      );
      state.completedtask = state.tasks.find(
        (tasks) => state.tasks[action.payload].task === tasks.task,
      );
      //   const remainingTask = state.tasks.filter(
      //     (tasks) => action.payload != tasks._id,
      //   );
      t; //   const completedtask = state.tasks.find(
      //     (tasks) => action.payload === tasks._id,
      //   );
    },
    UpdatedTrash(state, action) {
      state.tasks = state.tasks.filter(
        (task) => task.task != state.tasks[action.payload].task,
      );
      //   state.tasks = state.tasks.filter((task) => task._id != action.payload);
    },
  },
});
export const { updateTasks, UpdatedTrash, completedTasks } =
  TodoReducer.actions;
export default TodoReducer.reducer;
