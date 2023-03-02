import { createSlice, current } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
import { clearLocalStorage, LOCAL_STORAGE_ITEMS, persistLocalStorage } from "../../utilities";

export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

const initialState = localStorage.getItem(LOCAL_STORAGE_ITEMS.USER)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS.USER) as string)
  : EmptyUserState;


/**
 * El name va igual que en la  interfaz del store
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      persistLocalStorage<UserInfo>(LOCAL_STORAGE_ITEMS.USER, action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...current(state), ...action.payload };
      persistLocalStorage<UserInfo>(LOCAL_STORAGE_ITEMS.USER, result);

      return result;
    },
    resetUser: () => {
      clearLocalStorage(LOCAL_STORAGE_ITEMS.USER);
      return EmptyUserState;
    },
  },
});

export const { createUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
