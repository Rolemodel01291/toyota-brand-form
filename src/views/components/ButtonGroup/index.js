import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { StyledDiv } from '../../../views/styled/Containers';

function ButtonGroup(props) {
  const pdfUrl = useSelector((store)=>store.brandInfo.brandInfo.config.paperFormUrl)
  const download = () => {};
  return (
    <StyledDiv>
      <Button
        variant="contained"
        className="back"
        color="secondary"
        onClick={props.before}
        id="back"
      >
        Back
      </Button>
      {props.last === 'true' ? (
        props.hidden!=='submit'&&(
        <Button
          className="preview"
          variant="contained"
          color="secondary"
          onClick={props.submit}
          id="submit"
        >
          SUBMIT
        </Button>)
      ) : props.download === 'true' ? (
        <Button
          className="preview"
          variant="contained"
          color="secondary"
          onClick={download}
          id="download"
        >
          <a
            href={pdfUrl}
            style={{
              color: '#FFFFFF',
              textDecoration: 'none',
              fontFamily: 'Toyota Type Bold 600',
            }}
          >
            download
          </a>
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          className="next"
          onClick={props.next}
          id="next"
        >
          Next
        </Button>
      )}
    </StyledDiv>
  );
}

export default ButtonGroup;
