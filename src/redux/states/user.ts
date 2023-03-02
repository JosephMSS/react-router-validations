import { createSlice, current } from "@reduxjs/toolkit";
import { UserInfo } from "../../models";
enum LOCAL_STORAGE_ITEMS {
  USER = "user",
}
export const EmptyUserState: UserInfo = {
  id: 0,
  name: "",
  email: "",
};

const initialState = localStorage.getItem(LOCAL_STORAGE_ITEMS.USER)
  ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_ITEMS.USER) as string)
  : EmptyUserState;

export const setAndPersistDbUserState = (userInfo: UserInfo) => {
  localStorage.setItem(
    LOCAL_STORAGE_ITEMS.USER,
    JSON.stringify({ ...userInfo })
  );
};
export const clearLocalStorageUser = () => {
  localStorage.removeItem(LOCAL_STORAGE_ITEMS.USER);
};
/**
 * El name va igual que en la  interfaz del store
 */
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser: (state, action) => {
      setAndPersistDbUserState(action.payload);
      return action.payload;
    },
    updateUser: (state, action) => {
      const result = { ...current(state), ...action.payload };
      setAndPersistDbUserState(action.payload);
      return result;
    },
    resetUser: () => {
      clearLocalStorageUser();
      return EmptyUserState;
    },
  },
});

export const { createUser, resetUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
