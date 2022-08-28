import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const CommentForm = (props) => {
    const {comment, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label htmlFor="name">Note</Form.Label>
                <Form.Control
                    placeholder="comment here"
                    name="note"
                    type="text"
                    as="textarea"
                    rows={3}
                    value={ comment.note }
                    onChange={ handleChange }
                />
                
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default CommentForm

