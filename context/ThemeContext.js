import { createContext,useState } from "react";

export const ThemeContext=createContext();

const ThemeProvider = ({children}) => {
    const [isDark, setIsDark] = useState(
        JSON.parse(localStorage.getItem("isDark"))
      );
  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
