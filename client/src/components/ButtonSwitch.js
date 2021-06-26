import React from "react";
import Switch from "@material-ui/core/Switch";
import { ThemeContext } from "../contexts/ThemeContext";
import luna from "./luna.ico";

export default function Switches() {
  const { toggle, toggleFunction } = React.useContext(ThemeContext);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    toggleFunction();
  };

  return (
    <div>
      <Switch
        checked={state.checkedB}
        onChange={handleChange}
        color="primary"
        name="checkedB"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
      DarkMode
    </div>
  );
}
