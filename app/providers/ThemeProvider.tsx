"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type ThemeMode = "light" | "dark";

type ThemeContextValue = {
  mode: ThemeMode;
  accent: string;
  setMode: (next: ThemeMode) => void;
  setAccent: (value: string) => void;
  toggleMode: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "blogfly-theme";

const getInitialMode = (): ThemeMode => {
  if (typeof window === "undefined") {
    return "light";
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as { mode: ThemeMode };
      if (parsed.mode) {
        return parsed.mode;
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  } 

//   const prefersDark =
//   window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? true;

// return prefersDark ? "dark" : "light";


  // Default to light mode, ignore system preferences
  return "light";
};

const getInitialAccent = (): string => {
  if (typeof window === "undefined") {
    return "#7c3aed";
  }

  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      const parsed = JSON.parse(stored) as { accent: string };
      if (parsed.accent) {
        return parsed.accent;
      }
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  return "#7c3aed";
};

const applyTheme = (mode: ThemeMode, accent: string) => {
  const root = document.documentElement;
  const isLight = mode === "light";

  root.dataset.theme = mode;
  root.style.setProperty("--background", isLight ? "#f8fafc" : "#0f172a");
  root.style.setProperty("--surface", isLight ? "#ffffff" : "#111827");
  root.style.setProperty("--card", isLight ? "#f1f5f9" : "#1f2937");
  root.style.setProperty("--foreground", isLight ? "#212623" : "#e2e8f0");
  root.style.setProperty("--muted", isLight ? "#64748b" : "#94a3b8");
  root.style.setProperty("--border-color", isLight ? "#e2e8f0" : "#1f2937");
  root.style.setProperty("--primary", accent);
  root.style.setProperty("--secondary", isLight ? "#38bdf8" : "#22d3ee");
  root.style.setProperty("--accent", accent);
  root.style.setProperty("--header-bg-color", isLight ? "#212623" : "#0f172a");
  root.style.setProperty("--header-text-color", isLight ? "#e2e8f0" : "#f8fafc");
  root.style.setProperty("--footer-bg-color", isLight ? "#212623" : "#0f172a");


};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setModeInternal] = useState<ThemeMode>(() => getInitialMode());
  const [accent, setAccentInternal] = useState(() => getInitialAccent());

  useEffect(() => {
    applyTheme(mode, accent);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ mode, accent }));
  }, [mode, accent]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeInternal(next);
  }, []);

  const setAccent = useCallback((value: string) => {
    setAccentInternal(value);
  }, []);

  const toggleMode = useCallback(() => {
    setModeInternal((current) => (current === "light" ? "dark" : "light"));
  }, []);

  const value = useMemo(
    () => ({ mode, accent, setMode, setAccent, toggleMode }),
    [mode, accent, setMode, setAccent, toggleMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

