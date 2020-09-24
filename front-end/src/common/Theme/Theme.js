import { createMuiTheme } from "@material-ui/core/styles";
const theme = createMuiTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#F44336",
    textColor: "#FFFFFF",
    defaultTextColor: "#222222  ",
    hover: "rgba(0,0,0,0.08)",
  },
  typography: {
    fontFamily: "Roboto",
  },
  shape: {
    borderRadius: 4,
    background: "#512DA8",
    textColor: "#FFFFFF",
    borderColor: "#CCCCCC",
  },
});
export default theme;
