import { useState, useEffect } from 'react'//
//import { Image } from "react-bootstrap";
import { useParams, useNavigate } from 'react-router-dom'//, 
// useParams will allow us to see our parameters
// useNavigate will allow us to navigate to a specific page

import { Container, Card, Button } from 'react-bootstrap'

import LoadingScreen from '../shared/LoadingScreen'
import { getOneLyric, updateLyric, removeLyric } from '../../api/lyrics'
//import { getOneLyric } from '../../api/lyrics'
import messages from '../shared/AutoDismissAlert/messages'
import EditLyricModal from './EditLyricModal'
import NewCommentModal from '../comments/NewCommentModal'
import ShowComment from '../comments/ShowComment'

// We need to get the Lyric's id from the parameters
// Then we need to make a request to the api
// Then we need to display the results in this component

// we'll use a style object to lay out the comment cards
// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }

const ShowLyric = (props) => {
    const [lyric, setLyric] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [commentModalShow, setCommentModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()
    // useNavigate returns a function
    // we can call that function to redirect the user wherever we want to

    const { user, msgAlert } = props
    // console.log('user in props', user)
    // console.log('the Lyric in showLyric', lyric)
    // destructuring to get the id value from our route parameters

    useEffect(() => {
        getOneLyric(id)
            //.then(res => console.log(res))
            .then(res => setLyric(res.data.lyric))
            .catch(err => {
                msgAlert({
                    heading: 'Error getting Lyric',
                    message: messages.getLyricsFailure,
                    variant: 'danger'
                })
                navigate('/')
                //navigate back to the home page if there's an error fetching
            })
    }, [updated])
    //}, [])
    // here we'll declare a function that runs which will remove the Lyric
    // this function's promise chain should send a message, and then go somewhere
    const removeTheLyric = () => {
        removeLyric(user, lyric._id)
            // on success send a success message
            .then(() => {
                msgAlert({
                    heading: 'Success',
                    message: messages.removeLyricSuccess,
                    variant: 'success'
                })
            })
            // then navigate to index
            .then(() => { navigate('/') })
            // on failure send a failure message
            .catch(err => {
                msgAlert({
                    heading: 'Error removing Lyric',
                    message: messages.removeLyricFailure,
                    variant: 'danger'
                })
            })
    }
    let commentCards
    if (lyric) {
        if (lyric.comments.length > 0) {
            commentCards = lyric.comments.map(comment => (
                <ShowComment
                    key={comment._id}
                    comment={comment}
                    lyric={lyric}
                    user={user}
                    msgAlert={msgAlert}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
    }

    if (!lyric) {
        return <LoadingScreen />
    }


    return (
        <>
            <Container className="fluid">
                <Card bg={'warning'} text={'dark'} border={"dark"} style={{ width: 'fit-content', margin: '15px', justifyContent: 'center' }}>
                    <Card.Header>{lyric.artist}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <div><small>Artist: {lyric.artist}</small></div>
                            <div><small>Title: {lyric.title}</small></div>
                            <div><small>
                                Lyric: {lyric.lyrics}
                            </small></div>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Button onClick={() => setCommentModalShow(true)}
                            className="m-2" variant="info"
                        >
                            Give {lyric.artist} a comment!
                        </Button>

                        {
                            lyric.owner && user && lyric.owner === user._id
                                ?
                                <>


                                    <Button onClick={() => setEditModalShow(true)}
                                        className="m-2"
                                        variant="success"
                                    >
                                        Edit Lyrics
                                    </Button>
                                    <Button onClick={() => removeTheLyric()}
                                        className="m-2"
                                        variant="danger"
                                    >
                                        DELETE {lyric.artist}
                                    </Button>
                                </>
                        :
                                 null
                         } 
                    </Card.Footer>
                </Card>
            </Container>
            <Container>
                {commentCards}
            </Container>
            <EditLyricModal
                user={user}
                lyric={lyric}
                show={editModalShow}
                updateLyric={updateLyric}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setEditModalShow(false)}
            />
            <NewCommentModal
                lyric={lyric}
                show={commentModalShow}
                user={user}
                msgAlert={msgAlert}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setCommentModalShow(false)}
            />

        </>
    )
}

export default ShowLyric