import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSunFill, BsFillMoonFill } from "react-icons/bs";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);
  if (theme !== "dark" && theme !== "light" && !theme) {
    localStorage.setItem("theme", "dark");
  }
  if (!mounted) return null;
  if (!theme) return null;

  const changeTheme = (theme: string) => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div>
      <button onClick={() => changeTheme(theme)}>
        {theme === "light" ? <BsFillMoonFill /> : <BsSunFill />}
      </button>
    </div>
  );
}
