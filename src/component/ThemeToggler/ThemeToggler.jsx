import React, { useState, useEffect } from "react";
import { useTheme } from "../../core/theme/ThemeContext";
import { Switch } from "@mui/material";

const ThemeToggler = () => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSize = size.width > 376 ? "normal" : "small";

  return (
    <>
      <Switch
        defaultChecked
        size={toggleSize}
        color="secondary"
        onClick={toggleTheme}
      />
    </>
  );
};

export default ThemeToggler;
