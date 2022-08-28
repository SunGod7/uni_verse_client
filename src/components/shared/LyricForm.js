import { Form, Button, Container } from 'react-bootstrap'

const LyricForm = (props) => {
    const { lyric, handleChange, heading, handleSubmit } = props


    return (
        <Container className="justify-content-center">
            <h3 style={{ color: 'yellow'}}>{heading}</h3>
            <Form onSubmit={ handleSubmit }>
                <Form.Label htmlFor="artist">Artist</Form.Label>
                <Form.Control
                    placeholder="What is your name?"
                    name="artist"
                    id="artist"
                    value={ lyric.artist }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="title">Title</Form.Label>
                <Form.Control
                    placeholder="chours title?"
                    name="title"
                    id="title"
                    value={ lyric.title }
                    onChange={ handleChange }
                />
                <Form.Label htmlFor="lyrics">Lyrics</Form.Label>
                <Form.Control
                    placeholder=" write some lyrics "
                    type="text"
                    name="lyrics"
                    id="lyrics"
                    value={ lyric.lyrics }
                    as="textarea" 
                    rows={3}
                    onChange={ handleChange }
                />
                
                <Button type="submit">Submit</Button>
            </Form>
        </Container>
    )
}

export default LyricForm