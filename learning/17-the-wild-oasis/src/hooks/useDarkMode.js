import { createContext, useContext } from "react";

export const DarkModeContext = createContext();

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  if (!context) throw new Error("use DarkModeContext outside the scope");
  return context;
}
