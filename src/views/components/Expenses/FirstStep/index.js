import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { expenses } from '../../../utils/questions';
import PriceInput from '../../FormElements/PriceInput';

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
  { value: 'ANZSIC Division Titles', id: 'ANZSIC_division_title' },
];

function FirstStep(props) {
  const classes = useStyles();
  const history = useHistory();
  const [values, setValues] = React.useState({
    food_groceries: false,
    home_utilities_whitegoods_repairs: false,
    public_schooling_higher_education: false,
    personal_health_care_pet_care: false,
    clothing_footwear_dependents: false,
    communication_connectivity: false,
    insurance_house_contents: false,
    homewares_appliances_furnishings: false,
    clothing_footware_adult: false,
    lifestyle_recreation_alcohol_sports: false,
    subscription_member_export_fee: false,
    vehicles: false,
    transport: false,
    insurance_motor: false,
    insurance_health_personal: false,
    child_spousal_maintenance: false,
    private_schooling_tuition: false,
    gambling_tobaco: false,
    primary_home_land_tax_body_corp: false,
    investment_second_property_expenses: false,
    expenses_other: false,
  });
  // useEffect(()=>{
  //     let temp={}
  //     expenses.map(item=>{
  //         setValues({...temp, [item.id]:false})
  //     })
  // })

  const setValue = (key, value) => {
    setValues({ ...values, [key]: value });
  };

  const before = () => {
    history.push('/income');
  };

  const next = () => {
    localStorage.setItem('@expenses', 'true');
    history.push('./assets');
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <h4 style={{ textAlign: 'center' }}>
        Please provide details of your typical monthly expenses. The more detail
        and accuracy you can provide the easier it will be for us to assess your
        application.
      </h4>
      {expenses.map((item, index) => {
        return (
          <PriceInput
            key={index}
            setValue={setValue}
            title={item.title}
            id={item.id}
            next={next}
            before={before}
          />
        );
      })}
      {/* <ButtonGroup before={before} next={next} /> */}
    </>
  );
}

export default FirstStep;
