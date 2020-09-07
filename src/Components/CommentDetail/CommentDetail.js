import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

function randomNumber() {  
  return Math.round(Math.random() * (20 - 2) + 2); //Function to generate random number from 1 to 20
}

const CommentDetail = (props) => {
  const { name, body } = props.comment;
  const classes = useStyles();
  const random = randomNumber();//Calling the random number function
  const gender = (random % 2 === 0)? "men" : "women"; //Randomly selected gender
  const url = `https://randomuser.me/api/portraits/med/${gender}/${random}.jpg` //Getting the image url from randomuser.me api
  const style = {
    marginBottom: '20px',
    padding: '20px',
    borderRadius: '10px'
  }


  return (
    <Card className={classes.root} style={style}>
      <CardHeader
        avatar={
          <Avatar  src={url} />
        }
        title= {name}
        subheader={body}
      />
      
    </Card>
  );
};

export default CommentDetail;