// import React, { useState } from 'react'
// import { Modal } from 'react-bootstrap'
// import LyricForm from '../shared/LyricForm'
// import { updateLyricSuccess, updateLyricFailure } from '../shared/AutoDismissAlert/messages'

// const EditLyricModal = (props) => {
//     const { 
//         user, show, handleClose, 
//         updateLyric, msgAlert, triggerRefresh
//     } = props

//     const [lyric, setLyric] = useState(props.lyric)

//     console.log('Lyric in edit modal', lyric)

//     const handleChange = (e) => {
//         setLyric(prevLyric => {
//             let updatedValue = e.target.value
//             const updatedArtist = e.target.artist

//             console.log('this is the input type', e.target.type)

//             if (e.target.type === 'number') {
//                 // this is looking at the input type, and changing it from the default, which is a string, into an actual number
//                 updatedValue = parseInt(e.target.value)
//             }

//         })
//     }

//     const handleSubmit = (e) => {
//         // e equals the event
//         e.preventDefault()

//         updateLyric(user, lyric)
//             // if we're successful in the modal, we want the modal to close
//             .then(() => handleClose())
//             // send a success message to the user
//             .then(() => {
//                 msgAlert({
//                     heading: 'Oh No!',
//                     message: updateLyricSuccess,
//                     variant: 'success'
//                 })
//             })
//             // if everything is successful, we need to trigger our refresh for the show page
//             // this is that setUpdated function in showLyric component
//             // updated is in ShowLyric's useEffect's dependency array
//             // changes to the updated boolean cause ShowLyric's useEffect to run again.
//             .then(() => triggerRefresh())
//             // if there is an error, tell the user about it
//             .catch(() => 
//                 msgAlert({
//                     heading: 'Oh No!',
//                     message: updateLyricFailure,
//                     variant: 'danger'
//                 })
//             )
//     }

//     return (
//         <Modal show={show} onHide={handleClose}>
//             <Modal.Header closeButton />
//             <Modal.Body>
//                 <LyricForm 
//                     lyric={Lyric}
//                     handleChange={handleChange}
//                     handleSubmit={handleSubmit}
//                     heading="Update Lyric"
//                 />
//             </Modal.Body>
//         </Modal>
//     )
// }

// export default EditLyricModal 