import "date-fns";
import { React, useState } from "react";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

export default function DateInput({label, date, setState}) {
  const [selectedDate, setSelectedDate] = useState(date);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setState(date)
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        fullWidth
        margin="normal"
        id="date-picker-dialog"
        label={label}
        format="MM/dd/yyyy"
        value={selectedDate}
        onChange={handleDateChange}
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
      />
    </MuiPickersUtilsProvider>
  );
}
