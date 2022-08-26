import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import LoadingScreen from '../shared/LoadingScreen'
import { getAllLyrics } from '../../api/lyrics'
import messages from '../shared/AutoDismissAlert/messages'

// lyricsIndex should make a request to the api
// To get all lyrics
// Then display them when it gets them

// style for our card container
// const cardContainerStyle = {
//     display: 'flex',
//     flexFlow: 'row wrap',
//     justifyContent: 'center'
// }

const LyricsIndex = (props) => {
    const [lyrics, setLyrics] = useState(null)
    const [error, setError] = useState(false)

    const { msgAlert } = props

    //console.log('Props in LyricsIndex', props)

    useEffect(() => {
        ///console.log(props)
        getAllLyrics()
        //.then(res => console.log(res))
               .then(res => setLyrics(res.data.lyrics))
               //.catch(err => console.log(err))
            .catch(err => {
                msgAlert({
                    heading: 'Error Getting Lyrics',
                    message: messages.getLyricsFailure,
                    variant: 'danger',
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    // If lyrics haven't been loaded yet, show a loading message
    if (!lyrics) {
        return <LoadingScreen />
    } else if (lyrics.length === 0) {
        return <p>No lyrics. Add some.</p>
      }

     const lyricCards = lyrics.map(lyric => (
    //     <Card style={{ width: '30%', margin: 5}} key={lyric._id }>
    <Card bg={'secondary'} text={'Warning'} style={{ width: 'fit-content', margin: '15px', justifyContent: 'center' }} key={lyric._id }>
            <Card.Header>{ lyric.artist }</Card.Header>
            <Card.Body>
                <Card.Text >
                    <Link to={`/lyrics/${lyric._id}`}>View { lyric.title }</Link>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        //<div style={ cardContainerStyle }>
            <>
            { lyricCards }
            </>
       // </div>
    )
    
}

export default LyricsIndex