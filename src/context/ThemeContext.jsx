import {

  createContext,
  useContext,
  useEffect,
  useState

} from "react";

const ThemeContext =
  createContext();

export function ThemeProvider({

  children

}) {

  const [theme,
    setTheme] =
    useState(

      localStorage.getItem(
        "pulsehr-theme"
      ) || "dark"
    );

  /* APPLY */

  useEffect(() => {

    localStorage.setItem(
      "pulsehr-theme",
      theme
    );

    if (theme === "light") {

      document.documentElement.classList.add(
        "light"
      );

    } else {

      document.documentElement.classList.remove(
        "light"
      );
    }

  }, [theme]);

  return (

    <ThemeContext.Provider
      value={{

        theme,
        setTheme

      }}
    >

      {children}

    </ThemeContext.Provider>
  );
}

export function useTheme() {

  return useContext(
    ThemeContext
  );
}