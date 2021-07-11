import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactCodeInput from 'react-verification-code-input';
import { parseWithOptions } from 'date-fns/fp';

function ContractInput(props) {
  const history = useHistory();
  const dispatch = useDispatch();
  const sendCode = (value) => {
    // history.push('/hardship')
    // props.setValue(props.id, value);
    if (!props.validate) {
      props.setValue(props.id, value);
    } else {
      props.setValue(props.id, value, {
        [Object.keys(props.validate)[0]]: value !== '',
      });
    }
  };
  return (
    <div style={{ marginTop: '20px' }}>
      <ReactCodeInput
        values={props.value}
        fields={props.fields}
        fieldWidth={props.width}
        onComplete={sendCode}
      />
    </div>
  );
}

export default ContractInput;
