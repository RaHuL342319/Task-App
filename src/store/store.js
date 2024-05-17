import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import userReduer from "../features/user/userSlice";
export const appStore = configureStore({
  reducer: {
    task: taskReducer,
    user: userReduer,
  },
});
