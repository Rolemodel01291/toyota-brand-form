import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: '10px',
    marginBottom: '10px',
    minWidth: '100%',
    maxWidth: '415px',
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.value);

  const handleChange = (event) => {
    setValue(event.target.value);
    if (props.validate && event.target.value !== '') {
      props.setValue(props.id, event.target.value, {
        [Object.keys(props.validate)[0]]: true,
      });
    } else {
      props.setValue(props.id, event.target.value, {
        [Object.keys(props.validate)[0]]: false,
      });
    }
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          onChange={handleChange}
        >
          {props.items.map((item, index) => {
            return (
              <MenuItem value={item.id} key={index}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
        {props.validate && !props.validate[Object.keys(props.validate)[0]] && (
          <FormHelperText id="standard-helper-text">*Required</FormHelperText>
        )}
      </FormControl>
    </div>
  );
}
