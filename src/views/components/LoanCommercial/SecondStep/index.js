import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import divisions from '../../../utils/divisions';
import ButtonGroup from '../../ButtonGroup';
import SelectBox from '../../FormElements/SelectBox';
import TextInput from '../../FormElements/TextInput';
import { useSelector } from 'react-redux';
import { getCovidData } from '../../../utils';

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '100%',
  },
  formRegisterControl: {
    width: '100%',
  },
  root: {
    '& .MuiTextField-root': {
      marginTop: '32px',
      maxWidth: '415px',
      width: '415px',
      minWidth: '200px',
    },
  },
  button: {
    width: '100%',
    '& .MuiButtonBase-root': {
      width: '100%',
      borderRadius: '20px',
    },
  },
  color: {
    backgroundColor: '#eb0a1e',
  },
  option: {
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

const menuData = [
  { value: 'Married', id: 'married' },
  { value: 'Single', id: 'single' },
  { value: 'de-facto', id: 'de-facto' },
];

const abnData = [{ value: 'ANZSIC codes', id: 'ANZSIC_codes' }];

const employmentData = [
  { value: 'Full-time', id: 'full_time' },
  { value: 'Part-time', id: 'part_time' },
  { value: 'Contract', id: 'contract' },
  { value: 'Self-employed', id: 'self_employed' },
  { value: 'Retired (Self funded)', id: 'retired' },
  { value: 'Pension', id: 'pension' },
  { value: 'Government Benefits', id: 'government_benefits' },
  { value: 'Casual', id: 'casual' },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const userData = useSelector((store) => store.user);
  const covid = getCovidData(userData);
  const [values, setValues] = React.useState({
    married: false,
    dependant_number: false,
    primary_employment: false,
    primary_employer_name: false,
    primary_employer_ABN: false,
    primary_employer_division: false,
    primary_employer_subdivision: false,
  });
  const [divisionMenu, setDivisionMenu] = React.useState([]);
  const [subDivisionMenu, setSubDivisionMenu] = React.useState([]);
  useEffect(() => {
    let temp = [];
    divisions.map((item) => {
      temp.push({ id: item.id, value: item.value });
    });
    setDivisionMenu(temp);
    if (values.primary_employer_division) {
      divisions.map((item) => {
        if (item.id === values.primary_employer_division) {
          setSubDivisionMenu(item.children);
        }
      });
    }
  }, [values.primary_employer_division]);
  const handleRadioChange = (event) => {
    setValues({ ...values, isLoanCommercial: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const handleRegisterRadioChange = (event) => {
    setValues({ ...values, isCompanyRegistered: event.target.value });
    localStorage.setItem('covid', event.target.value);
  };

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const setDivision = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const setSubDivision = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    props.before();
  };
  const next = () => {
    localStorage.setItem('@loan_commercial', 'true');
    if (covid !== 'true') {
      history.push('/income');
    } else {
      history.push('/background_hardship');
    }

    // props.next()
  };

  return (
    <>
      <h1 style={{ paddingLeft: '50px', paddingRight: '50px' }}>
        Personal Information
      </h1>
      <SelectBox
        title="Marital Status"
        items={menuData}
        setValue={setValue}
        id="married"
        value={values.married}
      />
      <TextInput
        title="Number of dependants"
        setValue={setValue}
        id="dependant_number"
      />
      <SelectBox
        title="Most recent primary employment"
        items={employmentData}
        setValue={setValue}
        id="primary_employment"
        value={values.primary_employment}
      />
      <SelectBox
        title="Most recent employer industry"
        items={abnData}
        setValue={setValue}
        id="primary_employer_ABN"
      />
      <h5>Which industry are your employer?</h5>
      <SelectBox
        items={divisionMenu}
        id="primary_employer_division"
        title="Select division"
        setValue={setDivision}
        value={values.primary_employer_division}
      />
      {subDivisionMenu.length > 0 ? (
        <>
          <h5>Which industry are your employer in?</h5>
          <SelectBox
            items={subDivisionMenu}
            id="primary_employer_subdivision"
            title="Select subdivision"
            setValue={setSubDivision}
            value={values.primary_employer_subdivision}
          />
        </>
      ) : (
        <>
          <h5>Which industry are your employer in?</h5>
          <SelectBox
            items={divisionMenu}
            id="primary_employer_division"
            title="Select division"
            setValue={setDivision}
            value={values.primary_employer_division}
          />
        </>
      )}

      <ButtonGroup before={before} next={next} />
    </>
  );
}

export default FirstStep;
