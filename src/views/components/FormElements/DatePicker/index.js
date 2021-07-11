import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import FormHelperText from '@material-ui/core/FormHelperText';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: '100%',
    marginTop: '10px',
    // marginBottom: '10px',
  },
  root: {
    width: '100%',
  },
  textField: {
    width: 200,
  },
}));

export default function MaterialUIPickers(props) {
  const [selectedDate, setSelectedDate] = React.useState(null);
  const classes = useStyles();
  const handleDateChange = async (date) => {
    if (props.validate && date !== '') {
      await setSelectedDate(date);
      props.setValue(props.id, date, {  [Object.keys(props.validate)[0]]: true });
    } else {
      await setSelectedDate(date);
      props.setValue(props.id, date, {  [Object.keys(props.validate)[0]]: false });
    }
  };

  useEffect(() => {
    setSelectedDate(props.value);
  }, [props.value]);

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form className={classes.container} noValidate>
        <KeyboardDatePicker
          className={classes.root}
          margin="normal"
          id="date-picker-dialog"
          label={props.title}
          format="dd/MM/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          disableFuture={props.type==='normal'?false:true}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </form>
      {props.validate && !props.validate[Object.keys(props.validate)[0]]&&
          <FormHelperText id="standard-helper-text">*Required</FormHelperText>        
      } 
    </MuiPickersUtilsProvider>
  );
}
