import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [
    {
      id: 0,
      name: "Rahul",
      email: "rahul@email.com",
      password: "12345678",
      confirmPassword: "12345678",
      gender: "Male",
      country: "India",
    },
  ],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      let newId = 1;
      while (state.data.find((user) => user.id === newId)) {
        newId++;
      }
      state.data.push({ ...action.payload, id: newId });
    },

    deleteUser: (state, action) => {
      const userIndex = state.data.findIndex(
        (user) => user.id === action.payload
      );
      // Handle user not found
      if (userIndex === -1) {
        console.log("User with Id", action.payload, "not found");
        return state;
      }
      // Efficiently remove the task using splice
      state.data.splice(userIndex, 1); // Remove single element at the index
    },

    updateUser: (state, action) => {
      const { id, ...updateUserDetails } = action.payload;
      const userIndex = state.data.findIndex((user) => user.id === id);

      if (userIndex !== -1) {
        // Update existing user data using spread operator
        state.data[userIndex] = {
          ...state.data[userIndex],
          ...updatedUserFields,
        };
      } else {
        console.log("User with Id", id, "not found for update");
      }
    },
  },
});

export const { addUser, deleteUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
