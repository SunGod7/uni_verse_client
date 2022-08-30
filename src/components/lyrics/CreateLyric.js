import { useState } from 'react'
import { createLyric } from '../../api/lyrics'
import { useNavigate } from 'react-router-dom'
import { createLyricSuccess, createLyricFailure } from '../shared/AutoDismissAlert/messages'
import LyricForm from '../shared/LyricForm'

const CreateLyric = (props) => {
    console.log('these are the props in createLyric\n', props)
    const { user, msgAlert } = props

    const navigate = useNavigate()

    const [lyric, setLyric] = useState({
        artist: '',
        title: '',
        img: '',
        lyrics: '',
    })

    console.log('this is Lyric in createLyric', lyric)

    const handleChange = (e) => {
        setLyric(prevLyric => {
            let updatedValue = e.target.value
            const updatedName = e.target.name

            console.log('this is the input type', e.target.type)

            if (e.target.type === 'number') {
                // this is looking at the input type, and changing it from the default, which is a string, into an actual number
                updatedValue = parseInt(e.target.value)
            }

            const updatedLyric = {
                [updatedName]: updatedValue
            }
            return {
                ...prevLyric,
                ...updatedLyric
            }

        })
    }


    // We'll add a handleSubmit here that makes an api request, then handles the response
    const handleSubmit = (e) => {
        // e equals the event
        e.preventDefault()

        createLyric(user, lyric)
            // if we're successful, navigate to the show page for the new Lyric
            .then(res => { navigate(`/lyrics/${res.data.lyric._id}`) })
            // send a success message to the user
            .then(() => {
                msgAlert({
                    heading: 'Hot lyrics!',
                    message: createLyricSuccess,
                    variant: 'success'
                })
            })
            // if there is an error, tell the user about it
            .catch(() =>
                msgAlert({
                    heading: 'Error getting lyrics!',
                    message: createLyricFailure,
                    variant: 'danger'
                })
            )
    }

    return (
        <LyricForm
            lyric={lyric}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Create your own lyric!"

        />
    )


}
export default CreateLyric







