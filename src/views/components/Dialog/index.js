import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import StyledButton from './style';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import theme from '../../../utilities/theme';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { StyledDialog } from '../../styled/Containers';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function CustomizedDialogs(props) {
  const [open, setOpen] = React.useState(false);
  const brand = useSelector((store) => store.brand.brand);
  const { name } = useSelector((store) => store.brandInfo.brandInfo);
  useEffect(() => {
    setOpen(props.open);
  }, [props]);

  const handleClose = () => {
    props.close();
    setOpen(false);
  };

  return (
    <div>
      <StyledDialog
        theme={brand}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          <div
            style={{
              height: '68px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={theme(brand).logo} width="200px" alt="toyoda logo" />
          </div>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            If you have a loan with {name}, then by providing your email address
            you can begin an application for hardship. For privacy and security
            purposes, after submitting your email, you will be sent a code to
            that email address. You need this code to access the application
            form. The code also allows you to save and return to the form if you
            need to.
          </Typography>
          <Typography gutterBottom>
            <Link href="/faq">
              Click here for more information about the hardship application
              process and some frequently asked questions.
            </Link>
          </Typography>
          <Typography gutterBottom>
            Once your full application and any required supporting documents
            have been submitted you can expect a decision within 21 days. You do
            not need to contact us before that time unless your circumstances
            have changed. If we need more information we will contact you. If
            you don't provide the required information within 28 days then your
            application will be declined. You will be able to apply again if you
            still need to.
          </Typography>
          <Typography gutterBottom>
            If you have more than one loan with us then you only need submit one
            application, however will need to provide details of each loan (such
            as your Contract Number or registration number)
          </Typography>
        </DialogContent>
        <DialogActions>
          <StyledButton
            autoFocus
            onClick={handleClose}
            color="primary"
            theme={brand}
          >
            OK
          </StyledButton>
        </DialogActions>
      </StyledDialog>
    </div>
  );
}
