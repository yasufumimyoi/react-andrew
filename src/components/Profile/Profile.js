import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Photo } from './Photo';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
  },
  container: {
    justifyContent: 'center',
  },
  item: {
    marginTop: '50px',
  },
});

export const Profile = ({ userName, userGender, userMessage, userImage }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleProfileEdit = () => {
    history.push('/profileEdit');
  };

  return (
    <Grid container style={{ justifyContent: 'center' }}>
      <Grid item sm={6} xs={10}>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={userImage}
            alt="profile"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {userName}
            </Typography>
            <hr />
            <Typography variant="body2" color="textSecondary" component="p">
              {userGender}
            </Typography>
            <hr />
            <Typography variant="body2" color="textSecondary" component="p">
              {userMessage}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton onClick={handleProfileEdit}>
              <AddCircleIcon color="primary" />
            </IconButton>
            <Photo color="primary" />
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};