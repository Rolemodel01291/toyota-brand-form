import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import theme from '../../../utilities/theme';
import {
  FAQ,
  FAQheader,
  StyledDiv,
  StyledFAQ,
  StyledFAQBannerContainer,
  StyledFAQBannerContent,
  StyledFAQContainer,
  StyledFAQContentContainer,
} from '../../styled/Containers';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontFamily: 'Toyota Type Bold',
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

function FAQs() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const brand = useSelector((store) => store.brand.brand);
  const brandInfo = useSelector((store) => store.brandInfo.brandInfo);
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  return (
    <StyledFAQContentContainer color={theme(brand).background_color} theme={brand}>
      <StyledFAQBannerContainer color={theme(brand).background_color} theme={brand}>
        <StyledFAQBannerContent theme={brand}>
          <StyledFAQ theme={brand}>
            <FAQ theme={brand}>
              <h1>FAQs</h1>
            </FAQ>
          </StyledFAQ>
        </StyledFAQBannerContent>
      </StyledFAQBannerContainer>
      <StyledFAQContainer theme={brand}>
        <h4 style={{ textAlign: 'center' }}>
          By completing your hardship application online we can quickly and
          easily review your application and get you a decision faster
        </h4>
        <FAQheader theme={brand}>{/* myToyota */}</FAQheader>

        <div className={classes.root}>
          <ExpansionPanel
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
            >
              <Typography className={classes.heading}>
                How long will the application take?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="sub_faq">
                The online application typically takes 20 minutes to complete,
                depending on your circumstances and the availability of
                documentation that you need to provide with your application. You
                can return to your form at a later date if you need more time
                but we encourage you to complete the application as quickly as
                possible.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel2'}
            onChange={handleChange('panel2')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
            >
              <Typography className={classes.heading}>
                When will I get a decision?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="sub_faq">
                Once you submit your completed application with supporting
                documents, our hardship team will review your application on a
                first come first served basis. You should have an answer within
                21 days, however, this time will vary during times of increased
                application volumes.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel3'}
            onChange={handleChange('panel3')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                What happens if my application is approved or declined?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="sub_faq">
                If your application is approved then your loan will be varied
                based on the agreed proposal and we will notify you before we
                make the change to your loan contract. If your application is
                declined then we will let you know that your application has
                been declined and what options are available to you.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel4'}
            onChange={handleChange('panel4')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
            >
              <Typography className={classes.heading}>
                What sort of documents might I need to provide?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="sub_faq">
                If you are required to provide documentation during the
                application it may be for one of two reasons. <br />
                1. To verify the reason you are applying for hardship. This
                might include a medical certificate if you have been affected
                medically or information from your employer if you have been
                affected financially (this could include payslips or a letter
                from your employer). <br />
                2. If you are required to provide income information, we will
                require documents to verify the income you had entered. This
                might include two or more payslips, bank statements, a letter
                from your employer or if you are self-employed, a tax return.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel5'}
            onChange={handleChange('panel5')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                I have a payment due soon, what should I do?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="sub_faq">
                If you can afford to, then you should attempt to pay all or some
                of the payment. However once you have submitted your application
                online, you can delay payment until a decision has been made
                about your application for hardship. If you pay by direct debit
                then you will need to contact us to suspend your direct debit
                arrangement. If your application is approved then the
                outstanding payment will be dealt with as part of the assistance
                offered to you. If your application is not approved you will be
                required to pay the outstanding amount within 14 days.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          <ExpansionPanel
            expanded={expanded === 'panel6'}
            onChange={handleChange('panel6')}
          >
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
            >
              <Typography className={classes.heading}>
                What about my privacy and the information I provide in my
                application?
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="sub_faq">
                We understand that your personal information and credit
                information is important to you and we value your trust. Our
                Privacy Policy sets out how we will manage and protect your
                information. You can access a copy of our Privacy Policy{' '}
                <a href={brandInfo.config.privacyPolicyUrl}>here</a>.
              </Typography>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <StyledDiv
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Button
            variant="contained"
            className="back"
            color="secondary"
            onClick={goBack}
          >
            Back
          </Button>
        </StyledDiv>
      </StyledFAQContainer>
    </StyledFAQContentContainer>
  );
}

export default FAQs;
