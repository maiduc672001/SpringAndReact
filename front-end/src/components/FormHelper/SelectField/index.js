import React from "react";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import style from "./style";
import { withStyles } from "@material-ui/core";
const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  classes,
  ...custom
}) => (
  <FormControl className={classes.formControl} error={touched && error}>
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
      value={input.value}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);
const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return null;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};
export default withStyles(style)(renderSelectField);
