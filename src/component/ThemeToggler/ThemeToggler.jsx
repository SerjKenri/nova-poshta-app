import React, { useState, useEffect } from "react";
import { useTheme } from "../../core/theme/ThemeContext";
import { Switch } from "@mui/material";
import { red } from "@mui/material/colors";
import { alpha, styled } from "@mui/material/styles";

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
      <PinkSwitch size={toggleSize} onClick={toggleTheme} />
    </>
  );
};

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: red[600],
    "&:hover": {
      backgroundColor: alpha(red[600], theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: red[600],
  },
}));

export default ThemeToggler;
