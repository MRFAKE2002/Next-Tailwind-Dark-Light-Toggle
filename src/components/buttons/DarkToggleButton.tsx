"use client";

//! Libraries
import React, { useEffect, useState } from "react";

//! Type
type Props = {};

function DarkToggleButton({}: Props) {
  //! useState

  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  //! Custom Function

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  //! useEffect

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setIsDarkMode(JSON.parse(savedTheme));
    } else {
      const webDefaultTheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setIsDarkMode(webDefaultTheme);
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  //! JSX

  return (
    <button
      className="fixed top-3 lg:top-4 right-3 lg:right-4 w-9 h-9 lg:w-10 lg:h-10 rounded-full flex justify-center items-center shadow-lg bg-amber-500 text-neutral-950 hover:bg-amber-600 transition-colors z-10"
      onClick={toggleDarkMode}
    >
      <i
        className={`bx bx-${isDarkMode ? "sun" : "moon"} text-lg lg:text-xl`}
      ></i>
    </button>
  );
}

export default DarkToggleButton;
