import "date-fns";
import { React } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DateInput({label, date, setFormField}) {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        margin="normal"
        id="date-picker-dialog"
        label={label}
        format="MM/dd/yyyy"
        value={date}
        onChange={(date) => setFormField('yearBuilt', date)}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
