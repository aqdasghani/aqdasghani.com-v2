"use client";

import { createContext, useCallback, useContext, useState } from "react";

const ThemeContext = createContext({ theme: "light", toggle: () => {} });

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('aqdas-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();`;

function currentTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(currentTheme);
  const actual = currentTheme();
  if (actual !== theme) setTheme(actual);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      document.documentElement.classList.toggle("dark", next === "dark");
      try {
        localStorage.setItem("aqdas-theme", next);
      } catch (e) {
        void e;
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
