import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector, shallowEqual } from 'react-redux';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import PrivateRoute from '../utils/hoc/PrivateRoute';
import FirstPage from '../pages/FirstPage';
import VerifyEmail from '../pages/Authentication/VerifyEmail';
import VerifyCode from '../pages/Authentication/VerifyCode';
import BeginApplication from '../pages/BeginApplication';
import ReasonApplying from '../pages/ReasonApplying';
import LoanCommercial from '../pages/LoanCommercial';
import BackgroundHardship from '../pages/BackgroundHardship';
import ProposalAssistance from '../pages/ProposalAssistance';
import Preview from '../pages/Preview';
import Income from '../pages/Income';
import Expenses from '../pages/Expenses';
import Assets from '../pages/Assets';
import Liabilities from '../pages/Liabilities';
import Submit from '../pages/Submit';
import AlreadySubmitted from '../pages/AlreadySubmitted';
import faq from '../pages/FAQ';
import { BEGIN_APPLICATION_PAGE } from '../../utilities/constants';

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

function Router() {
  return (
     <MuiThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" component={VerifyEmail} />
        <Route exact path="/authentication" component={VerifyEmail} />
        <Route exact path="/verify_code" component={VerifyCode} />
        <Route
          exact
          path={BEGIN_APPLICATION_PAGE}
          component={BeginApplication}
        />
        <Route exact path="/reason_applying" component={ReasonApplying} />
        <Route exact path="/loan_commercial" component={LoanCommercial} />
        <Route
          exact
          path="/background_hardship"
          component={BackgroundHardship}
        />
        <Route
          exact
          path="/proposal_assistance"
          component={ProposalAssistance}
        />
        <Route exact path="/review_submit" component={Preview} />
        <Route exact path="/income_expenses" component={Income} />
        <Route exact path="/expenses" component={Expenses} />
        <Route exact path="/assets" component={Assets} />
        <Route exact path="/liabilities" component={Liabilities} />
        <Route exact path="/faq" component={faq} />
        <Route exact path="/submit" component={Submit} />
        <Route exact path="/submitted" component={AlreadySubmitted} />
      </Switch>
     </MuiThemeProvider>
  );
}

export default Router;
