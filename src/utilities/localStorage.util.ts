export enum LOCAL_STORAGE_ITEMS {
  USER = "user",
}
export const persistLocalStorage = <T>(key: LOCAL_STORAGE_ITEMS, value: T) => {
  localStorage.setItem(LOCAL_STORAGE_ITEMS.USER, JSON.stringify({ ...value }));
};
export const clearLocalStorage = (key: LOCAL_STORAGE_ITEMS) => {
  localStorage.removeItem(key);
};
