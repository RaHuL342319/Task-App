// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   data: [
//     {
//       id: 1,
//       title: "Learn ReactJS",
//       description:
//         "It is Important to Get a Project, because it is trending in Web Development.",
//       dueDate: "2024-06-22",
//       isCompleted: false,
//     },
//     {
//       id: 2,
//       title: "Learn ReactJS",
//       description:
//         "It is Important to Get a Project, because it is trending in Web Development.",
//       dueDate: "2024-06-22",
//       isCompleted: false,
//     },
//     {
//       id: 3,
//       title: "Learn ReactJS",
//       description:
//         "It is Important to Get a Project, because it is trending in Web Development.",
//       dueDate: "2024-06-22",
//       isCompleted: true,
//     },
//   ],
// };

// // create slice
// const taskSlice = createSlice({
//   name: "task",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       // Enforce unique IDs by generating a new one if needed
//       let newId = 1;
//       while (state.data.find((task) => task.id === newId)) {
//         newId++;
//       }

//       state.data.push({ ...action.payload, id: newId }); // Add new task with generated ID
//     },
//     removeAllTask: (state) => {
//       state.data.length = 0; // Clear the data array efficiently
//     },
//     updateTaskById: (state, action) => {
//       console.log(action.payload);
//       const taskIndex = state.data.findIndex(
//         (task) => task.id === action.payload.id
//       );

//       if (taskIndex !== -1) {
//         state.data[taskIndex] = {
//           ...state.data[taskIndex],
//           ...action.payload,
//         }; // Update task properties
//       } else {
//         console.warn(
//           "Task with ID",
//           action.payload.id,
//           "not found for update. Ignoring update."
//         );
//       }
//     },
//     deleteTaskById: (state, action) => {
//       const taskIndex = state.data.findIndex(
//         (task) => task.id === action.payload
//       );

//       // Handle task not found scenario
//       if (taskIndex === -1) {
//         console.warn("Task with ID", action.payload, "not found in state.data");
//         return state; // Return original state if task not found
//       }

//       // Efficiently remove the task using splice
//       state.data.splice(taskIndex, 1); // Remove single element at the index
//     },
//   },
// });

// export const { addTask, removeAllTask, updateTaskById, deleteTaskById } =
//   taskSlice.actions;
// export default taskSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: localStorage.getItem("Tasks")
    ? JSON.parse(localStorage.getItem("Tasks"))
    : [
        // Your initial tasks...
        {
          id: 1,
          title: "Learn ReactJS",
          description:
            "It is Important to Get a Project, because it is trending in Web Development.",
          dueDate: "2024-06-22",
          isCompleted: false,
        },
        {
          id: 2,
          title: "Learn ReactJS",
          description:
            "It is Important to Get a Project, because it is trending in Web Development.",
          dueDate: "2024-06-22",
          isCompleted: false,
        },
      ],
};

// create slice
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask: (state, action) => {
      // Enforce unique IDs by generating a new one if needed
      let newId = 1;
      while (state.data.find((task) => task.id === newId)) {
        newId++;
      }

      state.data.push({ ...action.payload, id: newId }); // Add new task with generated ID
      localStorage.setItem("Tasks", JSON.stringify(state.data)); // Update localStorage
    },
    removeAllTask: (state) => {
      state.data.splice(0,state.data.length);
      state.data.length = 0; // Clear the data array efficiently
      localStorage.removeItem("Tasks"); // Remove data from localStorage
    },
    updateTaskById: (state, action) => {
      const taskIndex = state.data.findIndex(
        (task) => task.id === action.payload.id
      );

      if (taskIndex !== -1) {
        state.data[taskIndex] = {
          ...state.data[taskIndex],
          ...action.payload,
        }; // Update task properties
        localStorage.setItem("Tasks", JSON.stringify(state.data)); // Update localStorage
      } else {
        console.warn(
          "Task with ID",
          action.payload.id,
          "not found for update. Ignoring update."
        );
      }
    },
    deleteTaskById: (state, action) => {
      const taskIndex = state.data.findIndex(
        (task) => task.id === action.payload
      );

      // Handle task not found scenario
      if (taskIndex === -1) {
        console.warn("Task with ID", action.payload, "not found in state.data");
        return state; // Return original state if task not found
      }

      // Efficiently remove the task using splice
      state.data.splice(taskIndex, 1); // Remove single element at the index
      localStorage.setItem("Tasks", JSON.stringify(state.data)); // Update localStorage
    },
  },
});

export const { addTask, removeAllTask, updateTaskById, deleteTaskById } =
  taskSlice.actions;
export default taskSlice.reducer;
