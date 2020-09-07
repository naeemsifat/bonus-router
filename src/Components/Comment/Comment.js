import React, { useState, useEffect } from 'react';
import CommentDetail from '../CommentDetail/CommentDetail';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const Comment = (props) => {
    const postId = props.postId;
    const [commentDetails, setCommentDetails] = useState([]);//Inserting the comment detail
    const classes = useStyles();
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`; //fetching the url from jsonPlaceholder
        fetch(url)
            .then(res => res.json())
            .then(data => setCommentDetails(data))
    }, [])


    return (
        <>
            <div className={classes.root} style= {{marginBottom: '20px',borderBottom: '1px solid lightGray'}}>
                <h3 style={{textAlign: 'center'}}>Comment section:</h3>
            </div>

            <div>
                {
                    commentDetails.map(comment => <CommentDetail comment={comment} key={comment.id}></CommentDetail>)
                }
            </div>
        </>

    );
};

export default Comment;