import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { isContractNumber } from '../../../state/ducks/user/actions';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  colorPrimary: {
    color: 'black',
  },
  root: {
    marginTop: theme.spacing(3),
    marginLeft: 0,
    marginRight: 0,
    height: '60px',
    backgroundColor: '#ebebec',
    borderRadius: '3px;',
    '&:hover': {
      background: '#fff',
      boxShadow: '1px 2px 6px 0 rgba(34,34,34,.15)',
    },
  },
}));

export default function ErrorRadios(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(true);
  const dispatch = useDispatch();
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    props.method(event.target.value, dispatch);
  };

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        aria-label="quiz"
        name="quiz"
        value={value}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="true"
          control={<Radio />}
          label="Yes"
          className={classes.root}
        />
        <FormControlLabel
          value="false"
          control={<Radio />}
          label="No"
          className={classes.root}
        />
      </RadioGroup>
    </FormControl>
  );
}
