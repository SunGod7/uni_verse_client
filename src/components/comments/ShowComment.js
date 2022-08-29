import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditCommentModal from './EditCommentModal'
import { deleteComment } from '../../api/comments'

const ShowComment = (props) => {
    // destructure some props
    const { comment, lyric, user, msgAlert, triggerRefresh } = props

    // here's where we'll put a hook to open the edit comment modal when we get there
    const [editModalShow, setEditModalShow] = useState(false)

    
    

    // calls this to destroy a comment
    const destroyComment = () => {
        deleteComment(user, lyric._id, comment._id)
            .then(() => 
                msgAlert({
                    heading: 'Comment Deleted',
                    message: 'no comment?',
                    variant: 'success'
                }))
            .then(() => triggerRefresh())
            .catch(() => 
                msgAlert({
                    heading: 'Error!',
                    message: 'Something went wrong!',
                    variant: 'danger'
                }))
    }

    return (
        <>
            <Card className="m-2">
                <Card.Header>{comment.artist}</Card.Header>
                <Card.Body>
                    <small>{comment.note}</small><br/>
                    
                </Card.Body>
                <Card.Footer>
{/*                     
                     {
                        user && user._id === lyric.owner._id
                        ?  */}
                        <>
                            <Button 
                                variant="warning"
                                onClick={() => setEditModalShow(true)}
                            >
                                Edit Comment
                            </Button>
                            <Button 
                                onClick={() => destroyComment()} 
                                variant="danger"
                            >
                                Delete Comment
                            </Button>
                        </>
                         {/* :
                    null
                 }   */}
                </Card.Footer>
            </Card>
            <EditCommentModal
                user={user}
                lyric={lyric}
                comment={comment}
                show={editModalShow}
                handleClose={() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={triggerRefresh}
            />
        </>
    )
}

export default ShowComment