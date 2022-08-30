import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import CommentForm from '../shared/CommentForm'
import { createComment } from '../../api/comments'


const NewCommentModal = (props) => {
    const { 
        user, lyric, show, handleClose, msgAlert, triggerRefresh
    } = props

    const [comment, setComment] = useState({})

    console.log('lyric in edit modal', lyric)

    const handleChange = (e) => {
        setComment(prevComment => {
            let value = e.target.value
            const name = e.target.name

            console.log('this is the input type', e.target.type)

            
          

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

        createComment(user, lyric._id, comment)
            // if we're successful in the modal, we want the modal to close
            .then(() => handleClose())
            //  success message 
            .then(() => {
                msgAlert({
                    heading: 'Oh Yeah!',
                    message: 'Great! thank you for the love!',
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
           
            .catch(() => 
                msgAlert({
                    heading: 'Oh No!',
                    message: 'Something went wrong, please try again',
                    variant: 'danger'
                })
            )
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton />
            <Modal.Body>
                <CommentForm 
                    comment={comment}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="comment on lyrics!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default NewCommentModal