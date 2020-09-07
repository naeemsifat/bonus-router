import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        maxWidth: '80%',
    },
    media: {
        height: 140,
    },
});


const Post = (props) => {
    const { title, body, id } = props.post;
    const classes = useStyles();
    const style = {
        marginBottom: '20px',
        padding: '20px',
        borderRadius: '10px'
    }
    return (

        <Card className={classes.root} style={style}>
            <CardActionArea>

                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Title of id {id}: {title}
                    </Typography>
                    <Typography variant="body2" color="primary" component="h3">
                        Post: {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Link to ={`/post/${id}`} style={{textDecoration:'none'}}>
                    <Button variant="contained" color="primary">
                        See details
                    </Button>
                </Link>
            </CardActions>
        </Card>

    );
};

export default Post;