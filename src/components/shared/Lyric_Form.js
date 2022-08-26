// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import { useNavigate } from 'react-router-dom'

// import messages from './AutoDismissAlert/messages';
// import { createLyric, removeLyric } from '../../api/lyrics';


// const LyricForm = (props) => {
//     const { 
//         user, 
//         msgAlert, 
//         lyric, 
//         setUpdateTaggedLyrics,
//      } = props

//     const navigate = useNavigate()

//     // this form will conditionally render a button based on whether the lyric exists on the index page (FilterIndexForm.js) or not

//         // if lyric does NOT exist in FilterIndexForm (and therefore does NOT exist in the database) this component will render as a 'Tag' button (linked to the hidden form element in side the 'div below)
//         // if lyric DOES exist in FilterIndexForm (and therefore DOES exist in the database) this component will render as an 'Untag' button (linked to a 'delete' route by importing 'books.js')

//     // this allows all creation or deletion for a single lyric document in our database to be tied into one reuseable, shareable component that only takes up the space of one little button

//     const onTagClick = (e) => {
//         e.preventDefault()
//         // console.log('Here is the lyric you are creating:')
//         // console.log(lyric)

//         createLyric(user, lyric)
//         // promise handling for createLyric here:
//             // send a success message to the user
//             .then(setUpdateTaggedLyrics)
//             .then(() => {
//                 msgAlert({
//                     heading: 'Nice!',
//                     message: messages.createLyricSuccess,
//                     variant: 'success'
//                 })
//             })
//             // if there is an error, tell the user about it
//             .catch(() => {
//                 msgAlert({
//                     heading: 'Oh no...',
//                     message: messages.createLyricFailure,
//                     variant: 'danger'
//                 })
//             })

//         setUpdateTaggedLyrics()

//     }

//     const onUntagClick = (e) => {
//         e.preventDefault()

//         removeLyric(user, lyric._id)
//             // on success, send a success message
//             // .then(() => {
//             //     msgAlert({
//             //         heading: 'Success',
//             //         message: messages.removeLyricSuccess,
//             //         variant: 'success'
//             //     })
//             // })
//             // then navigate to index
//             .then(setUpdateTaggedLyrics)
//             .then(() => {
//                 navigate('/')
//             })
//             // on failure, send a failure message
//             .catch(err => {
//                 navigate('/')
//                 // navigate back to home page if there's an error fetching
//                 msgAlert({
//                     heading: 'Error removing lyric',
//                     message: messages.removeLyricFailure,
//                     variant: 'danger'
//                 })
//             })

//         setUpdateTaggedLyrics()
        
//     }

//     return (
//       <>
//         { lyric.owner && user && lyric.owner._id === user.id
//         ?
//             <Form onSubmit={(e) => {
//                 onUntagClick(e)
//             }}>

//                 <Button
//                     variant="danger"
//                     type="submit"
//                     style={{ marginRight: '10px' }}
//                     >
//                         Untag
//                 </Button>

//             </Form>
//         :   
//             <Form onSubmit={(e) => {
//                 onTagClick(e)
//             }}>

//                 <Button 
//                     variant="outline-light" 
//                     type="submit"
//                     style={{ marginRight: '10px' }}
//                     >
//                         Tag
//                 </Button>

//             </Form>
//         }
//       </>
//     );
// }

// export default LyricForm