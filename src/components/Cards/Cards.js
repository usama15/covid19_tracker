import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
// Card component imports
import Countup from "react-countup";
// count up numbers
import cx from 'classnames';
// multiple style classnames

import styles from './Cards.module.css';

export const Cards = ({
  data: { confirmed, recovered, deaths, lastUpdate },
  // destructure data that I need from 'data'
}) => {
  if (!confirmed) {
    return 'Loading...';
  }
  // if the numbers are NOT confirmed, return loading
  // wrap everything in a container and define the theme for the content(Typography, xs, md, spacing)
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography variant='h5' component='h2'>
              <Countup
                start={0}
                end={confirmed.value}
                duration={2.75}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Number of infected cases of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography variant='h5' component='h2'>
              <Countup
                start={0}
                end={recovered.value}
                duration={2.75}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Number of recoveries of COVID-19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography variant='h5' component='h2'>
              <Countup
                start={0}
                end={deaths.value}
                duration={2.75}
                separator=','
              />
            </Typography>
            <Typography color='textSecondary'>
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant='body2' component='p'>
              Number of deaths of COVID-19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

