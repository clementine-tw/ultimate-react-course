import { useEffect } from "react";
import { DarkModeContext } from "../hooks/useDarkMode";
import { useLocalStorageState } from "../hooks/useLocalStorageState";

function DarkModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme: dark)").matches,
    "isDarkMode"
  );

  function toggleDarkMode() {
    setIsDarkMode((isDark) => !isDark);
  }

  useEffect(
    function () {
      document.documentElement.classList.add(
        isDarkMode ? "dark-mode" : "light-mode"
      );
      document.documentElement.classList.remove(
        isDarkMode ? "light-mode" : "dark-mode"
      );
    },
    [isDarkMode]
  );

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export default DarkModeProvider;
