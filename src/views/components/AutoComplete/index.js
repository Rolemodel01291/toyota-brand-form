/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function Playground(props) {
  const defaultProps = {
    options: props.data,
    getOptionLabel: (option) => option.title,
  };

  const [value, setValue] = React.useState(props.value);
  useEffect(() => {
    setValue(props.value);
  }, [props.value]);
  const handleChange = (event, value) => {
    if (props.validate) {
      props.setValue(props.id, value, {
        [Object.keys(props.validate)[0]]: !!value,
      });
    } else {
      props.setValue(props.id, value);
    }
  };

  return (
    <div style={{ width: '100%' }}>
      <Autocomplete
        {...defaultProps}
        // id={props.title}
        value={value}
        debug
        onChange={handleChange}
        renderInput={(params) => (
          <TextField {...params} label={props.title} margin="normal" />
        )}
      />
      {props.validate && !props.validate[Object.keys(props.validate)[0]] && (
        <FormHelperText id="standard-helper-text">*Required</FormHelperText>
      )}
    </div>
  );
}
