import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BottomLiner from '../BottomLiner/BottomLiner.component';
import { Constants } from '../../constants';

import styles from './BoostPlayFAQs.styles';

const QuestionBox = ({ question, details }) => {
  const classes = styles();

  return (
    <ExpansionPanel className={classes.expansionPanel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="center">
          <Grid item>
            <Typography className={classes.heading}>
              <span>{question}</span>
            </Typography>
          </Grid>
        </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography>{details}</Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default function BoostPlayFAQs() {
  const classes = styles();
  const { BOOSTPLAY_FAQ, FAQ_BOOSTPRENEUR } = Constants;

  return (
    <Container maxWidth="lg">
      <Typography variant="h3" className={classes.headerContainer}>
        <span className={classes.header}>{BOOSTPLAY_FAQ.HEADER}</span>
        <BottomLiner />
      </Typography>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={8}>
          <div className={classes.questionBox}>
            {FAQ_BOOSTPRENEUR.map((faq, index) => (
              <QuestionBox
                question={faq.QUESTION}
                details={faq.ANSWER}
                key={faq.QUESTION}
              />
            ))}
            {/* <QuestionBox question={BOOSTPLAY_FAQ.QUESTION_1} details="HEHEHEH" />
            <QuestionBox question={BOOSTPLAY_FAQ.QUESTION_2} details="HEHEHEH2" />
            <QuestionBox question={BOOSTPLAY_FAQ.QUESTION_3} details="HEHEHEH3" />
            <QuestionBox question={BOOSTPLAY_FAQ.QUESTION_4} details="HEHEHEH4" /> */}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}
