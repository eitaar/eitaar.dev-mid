interface ThemeProps {
  KEY: string;
  LIGHT: string;
  DARK: string;
  SYSTEM: string;
}

const ThemeProps = {
  KEY: "heroui-theme",
  LIGHT: "light",
  DARK: "dark",
};

export function useTheme() {
  let theme = document.documentElement.classList.contains("dark")? "dark" : "light";
  function setTheme(newTheme: string) {
    theme = newTheme;
    console.log("Setting theme to", theme);
    if (newTheme == "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem(ThemeProps.KEY, ThemeProps.DARK);
    } else if (newTheme == "light") {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem(ThemeProps.KEY, ThemeProps.LIGHT);
    }
  }

  function ToggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }
    
  return {
    theme: theme,
    setTheme,
    ToggleTheme,
  }
}