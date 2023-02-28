import { createSlice } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};
/**
 * El name va igual que en la  interfaz del store
 */
export const userSlice = createSlice({
  name: "user",
  initialState: EmptyUserState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    updateUser: (state, action) => ({ ...state, ...action.payload }),
    resetUser: () => EmptyUserState,
  },
});

export const { createUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
