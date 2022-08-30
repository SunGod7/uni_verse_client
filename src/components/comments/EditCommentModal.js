import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import { updateComment } from '../../api/comments'


const EditCommentModal = (props) => {
    const { 
        user, lyric, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [comment, setComment] = useState(props.comment)
    //const [comment, setComment] = useState('')
    const handleChange = (e) => {
        
        // setComment((prev) => {
        //     let updatedComment = e.target.value

        //     return {
        //         id: prev.id,
        //         note: updatedComment,
                
        //     }
        // })



        setComment(prevComment => {
            let value = e.target.value
            const name = e.target.name

            const updatedComment = {
                [name]: value
            }
            return {
                ...prevComment,
                ...updatedComment
            }
        })
    }

    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        updateComment(user, lyric._id, comment)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Great! The comment is better than ever!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
            // if there is an error, tell the user about it
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, please try again',
                    variant: 'danger'
                })
            )
    }
///comment modal
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <CommentForm 
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Update this Comment!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditCommentModal