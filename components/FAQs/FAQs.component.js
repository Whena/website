import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import BottomLiner from '../BottomLiner/BottomLiner.component';

import styles from './FAQs.styles';

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

function BoostPlayFAQs({ header, questions }) {
  const classes = styles();
  
  return (
    <Container maxWidth="lg">
      <Typography variant="h3" className={classes.headerContainer}>
        <span className={classes.header}>{header}</span>
        <BottomLiner />
      </Typography>
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={12} md={8}>
          <div className={classes.questionBox}>
            {questions.map((faq) => (
              <QuestionBox
                question={faq.title_or_question}
                details={faq.answer_or_description}
                key={faq.title_or_question}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

export default BoostPlayFAQs;
