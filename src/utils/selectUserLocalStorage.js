export const getUserFromLocalStorage = () =>
  localStorage.getItem("role") || null;
