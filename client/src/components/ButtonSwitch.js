import React,{useState,useEffect} from "react";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "../contexts/ThemeContext";
import luna from "./luna.ico";
import DarkModeToggle from "react-dark-mode-toggle";

export default function Switches() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });
  const [isDarkMode, setIsDarkMode] = useState(() => false);

  const handleChange = (event) => {
    //setState({ ...state, [event.target.name]: event.target.checked });
    toggleFunction();
    if (toggle) { document.body.style.background="#161616"; }
    if (!toggle) { document.body.style.background="white"; }
  };

  useEffect(() => {
    toggleFunction();
    if (!toggle) { document.body.style.background="#161616"; }
    if (toggle) { document.body.style.background="white"; }
  }, [isDarkMode]);

  return (
    <div className="btnswitch">
      {/* <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      /> */}
      <DarkModeToggle
      onChange={setIsDarkMode}
      checked={isDarkMode}
      size={60}
      name="checkedB"
      />
      
      <div className="separator"> &nbsp;</div>
    </div>
  );
}
