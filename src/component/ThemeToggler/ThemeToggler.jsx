import { useTheme } from "../../core/theme/ThemeContext";
import { Switch } from "@mui/material";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <>
      <Switch defaultChecked color="secondary" onClick={toggleTheme} />
    </>
  );
};

export default ThemeToggler;
