// import { ToastContainer, Toast, Button, Form } from "react-bootstrap"
// import { useState } from "react"
// import { updateLyric } from "../../api/lyrics"

// const ReasonTagged = (props) => {
//     const {
//         user,
//         msgAlert,
//         lyricInViewModal
//     } = props

//     const [lyricToEdit, setLyricToEdit] = useState({
//         id: null,
//         reasonTagged: lyricInViewModal.reasonTagged,
//         showEditBox: false
//     })

//     console.log('Lyric we are editing: ', lyricToEdit)

//     const openTextBox = (e) => {
//         setLyricToEdit((prev) => {
//             return {id: lyricInViewModal._id, reasonTagged: prev.reasonTagged, showEditBox: true}
//         })
//     }

//     const closeTextBox = (e) => {
//         setLyricToEdit((prev) => {
//             return {id: null, reasonTagged: lyricInViewModal.reasonTagged, showEditBox: false}
//         })
//     }

//     const handleChange = (e) => {
//         setLyricToEdit((prev) => {
//             let updatedTextBoxValue = e.target.value

//             return {
//                 id: prev.id,
//                 reasonTagged: updatedTextBoxValue,
//                 showEditBox: prev.showEditBox
//             }
//         })
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault()

//         lyricInViewModal.reasonTagged = lyricToEdit.reasonTagged

//         updateLyric(user, lyricInViewModal)
//             // on success, send a success message
//             // .then(() => {
//             //     msgAlert({
//             //         heading: 'Success',
//             //         message: messages.removeLyricSuccess,
//             //         variant: 'success'
//             //     })
//             // })
//             // then navigate to index
//             // .then(setUpdatedCommentList)
//             // .then(() => {
//             //     navigate('/')
//             // })
//             // on failure, send a failure message
//             .then(setLyricToEdit({
//                     id: null,
//                     reasonTagged: lyricInViewModal.reasonTagged,
//                     showEditBox: false
//                 })
//             )
//             .catch(err => {
//                 // navigate('/')
//                 // navigate back to home page if there's an error fetching
//                 msgAlert({
//                     heading: 'Error setting reason Tagged',
//                     message: "Couldn't edit that for you...",
//                     variant: 'danger'
//                 })
//             })
//     }

//     return (
//         <>
//         {lyricInViewModal.owner
//         ?
//             <ToastContainer className="m-auto">
//                 <Toast>
//                     <Toast.Header closeButton={false}>

//                         {!user
//                         ?
//                             <strong
//                                 className="me-auto"
//                                 style={{margin: 0, padding: '0 5px'}}
//                                 >
//                                     Why'd they Tag it?
//                             </strong>
//                         :
//                             user._id === lyricInViewModal.owner
//                             ?
//                             <>
//                                 <strong
//                                     className="me-auto"
//                                     style={{margin: 0, padding: '0 5px'}}
//                                     >
//                                         Reason you Tagged
//                                 </strong>
//                                 {lyricToEdit.showEditBox 
//                                 ?
//                                     null
//                                 :
//                                     <Button 
//                                         variant="danger"
//                                         onClick={openTextBox}
//                                         style={{height: 'fit-content', margin: 0, padding: '3px 7px'}}
//                                         >
//                                             Edit
//                                     </Button>
//                                 }
                                
//                             </>
//                             :
//                                 <strong
//                                     className="me-auto"
//                                     style={{margin: 0, padding: '0 5px'}}
//                                     >
//                                         Why'd they Tag it?
//                                 </strong>
//                         }

//                     </Toast.Header>

//                     <Toast.Body style={{color: 'black'}}>
//                         {lyricInViewModal.reasonTagged && user && user._id === lyricInViewModal.owner
//                         ?
//                             <>
//                             {lyricToEdit.showEditBox
//                             ?
//                                 null
//                             :
//                                 <h6>"{lyricInViewModal.reasonTagged}"</h6>
//                             } 
//                             </>
//                         :
//                             !lyricInViewModal.reasonTagged && user && user._id === lyricInViewModal.owner
//                             ?
//                                 <>
//                                     {lyricToEdit.showEditBox
//                                     ?
//                                         null
//                                     :
//                                         <h6>Tell everyone why you Tagged it here</h6>
//                                     }
                                        
//                                 </>
//                             :
//                                 <>
//                                     {lyricToEdit.reasonTagged
//                                     ?
//                                         <h6>"{lyricToEdit.reasonTagged}"</h6>
//                                     :
//                                         <>
//                                         {!user
//                                         ?
//                                             <h6>No reason...<br/>Sign up to ask them why they Tagged in the comment section!</h6>
//                                         :
//                                             <h6>No reason...<br/>Ask them why they Tagged in the comment section below!</h6>
//                                         }
                                            
//                                         </>
                                        
//                                     }
                                    
//                                 </>
//                         }
                            
//                         {lyricToEdit.showEditBox 
//                         ?
//                             <Form onSubmit={handleSubmit}>

//                                 <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
//                                     <Form.Control
//                                         placeholder="Tell us why you Tagged it..."
//                                         value={lyricToEdit.reasonTagged}
//                                         name="reasonTagged"
//                                         type="text"
//                                         onChange={handleChange}
//                                         as="textarea"
//                                         rows={3}
//                                     />
//                                 </Form.Group>

//                                 <Button
//                                     type="submit"
//                                     variant="success"
//                                     style={{marginRight: '10px'}}
//                                     >
//                                         Confirm
//                                 </Button>

//                                 <Button
//                                     variant="danger"
//                                     onClick={closeTextBox}
//                                     >
//                                         Cancel
//                                 </Button>

//                             </Form>
//                         :
//                             null
//                         }
                        
//                     </Toast.Body>

//                 </Toast>
//             </ToastContainer>
//         :
//             null
//         }
//         </>
//     )
// }

// export default ReasonTagged