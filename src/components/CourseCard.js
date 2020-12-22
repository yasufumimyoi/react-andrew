import React from 'react';
import { useHistory } from 'react-router-dom';
import { coursesStyles } from '../style/style';
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from '@material-ui/core';

const CourseCard = ({ title, subtitle, image, path }) => {
  const classes = coursesStyles();
  const history = useHistory();
  const handleEachCoursesRouter = (path) => {
    history.push(path);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography
          variant="body2"
          component="p"
          className={classes.description}
        >
          {subtitle}
        </Typography>
        <img alt="React" src={image} width="300" height="200" />
      </CardContent>
      <CardActions className={classes.button}>
        <Button
          color="black"
          onClick={() => handleEachCoursesRouter(path)}
          size="large"
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export { CourseCard };