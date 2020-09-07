import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: '20%',
    },
});

const PostDetail = () => {
    const { postId } = useParams();//Getting the user id by using react hook
    const [postDetail, setPostDetail] = useState({});
    const classes = useStyles();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`; //fetching the url from jsonPlaceHolder
        fetch(url)
            .then(res => res.json())
            .then(data => setPostDetail(data))
    }, [])
    const { id, title, body } = postDetail;
    const style = { //user defined css 
        marginBottom: '20px',
        padding: '20px',

    }
    return (
        <div >
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
            </Card>
            {
                <Comment postId={postId}></Comment>
            }
        </div>
    );
};

export default PostDetail;