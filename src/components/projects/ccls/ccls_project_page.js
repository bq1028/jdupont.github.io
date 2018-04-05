import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { emphasize } from 'material-ui/styles/colorManipulator';
import ExpansionPanel, { ExpansionPanelDetails, ExpansionPanelSummary } from 'material-ui/ExpansionPanel';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

import BlogHelmet from '../../blog_helmet';
import { fullRowWidth, contentRowWidths } from '../../../style/dimensions';
import { topLevelGridStyles } from '../../../style/grid_styles';

const styles = theme => ({
  content: {
    ...topLevelGridStyles(theme),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  titleRow: {
    padding: `${2 * theme.spacing.unit}px ${theme.spacing.unit}px ${2 * theme.spacing.unit}px ${2 * theme.spacing.unit}px`,
    background: emphasize(theme.palette.primary[300], 0.26),
    display: 'flex',
  },
  text: {
    color: theme.palette.background.default,
    alignSelf: 'center',
  },
  titleAction: {
    marginLeft: 'auto',
  },
  noTopPadding: {
    paddingTop: '0px !important',
  },
});

const CCLSProjectPage = (props) => {
  const { classes } = props;

  return (
    <Grid container className={classes.content}>
      <BlogHelmet pageTitle="CCLS Android App" />
      <Grid item {...fullRowWidth}>
        <Grid container justify="center">
          <Grid item {...contentRowWidths}>
            <Paper>
              <Grid container>
                <Grid item {...fullRowWidth} component="div" className={classes.noTopPadding}>
                  <div className={classes.titleRow}>
                    <Typography className={classes.text} variant="headline">Browse by tags</Typography>
                  </div>
                </Grid>
                <Grid item {...fullRowWidth} className={classes.searchBox}>
                  <Typography>
                    Some text here
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item {...contentRowWidths}>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography className={classes.heading}>General settings</Typography>
                <Typography className={classes.secondaryHeading}>I am an expansion panel</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

CCLSProjectPage.propTypes = {
  /* eslint-disable react/forbid-prop-types */
  classes: PropTypes.object.isRequired,
  /* eslint-enable react/forbid-prop-types */
};

export default withStyles(styles)(CCLSProjectPage);
