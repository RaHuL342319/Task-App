import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
export const appStore = configureStore({
  reducer: {
    task: taskReducer,
  },
});
