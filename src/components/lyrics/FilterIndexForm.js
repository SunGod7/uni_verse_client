// import './FilterIndexForm.css'
// import { Button } from 'react-bootstrap'
// //import { Form, Button, } from 'react-bootstrap'
// import { useState, useEffect } from 'react'
// import messages from '../shared/AutoDismissAlert/messages'
// import axios from 'axios'
// import { getAllLyrics } from '../../api/lyrics'
// import CrudLyric from './CrudLyric'
// import LyricListModal from './LyricListModal'


// const FilterIndexForm = (props) => {

//     const { user, msgAlert } = props

//      const [artist, setArtist] = useState('')
//      const [title, setTitle] = useState('')
//     // const [lyrics, setLyrics] = useState('')
//     const [lyrics, setLyrics] = useState(null)
//     //const [searchValue, setSearchValue] = useState({ artistist: '', title: '' })
//     const [lyricsToView, setLyricsToView] = useState([])
//     const [createLyricModalShow, setCreateLyricModalShow] = useState(false)
//     const [showLyricViewModal, setShowLyricViewModal] = useState(false)
//     const [lyricInViewModal, setLyricInViewModal] = useState({})
//     const [updateTaggedLyrics, setUpdateTaggedLyrics] = useState(true)

//     // console.log('\ncurrent search value:\n', searchValue)
//     // console.log('\ncurrent lyrics to view:\n', lyricsToView)

//     // console.log('lyric being viewed:',lyricInViewModal)

//     const lyricToShow = (e) => {
//         // console.log(e.target.id)
//         const lyricArtist = e.target.id
//         const lyricTitle = e.target.id
//         setLyricInViewModal(() => {
//             let viewedLyric = lyricsToView.filter(lyric => lyric.artist === lyricArtist && lyric.title === lyricTitle)

//             if (lyrics.filter(lyric => lyric.artist === lyricArtist).length > 0) {
//                 console.log('Viewed lyric was in database')
//                 viewedLyric = lyrics.filter(lyric => lyric.artist === lyricArtist)
//                 // console.log('This is the lyric in database:')
//                 // console.log(viewedLyric[0])
//             } else {
//                 console.log('Viewed lyric was NOT in database, only in lyricsToView')
//                 // console.log('This was the lyric in lyricsToView:')
//                 // console.log(viewedLyric[0])
//             }



//             return (
//                 viewedLyric[0]
//             )
//         })
//         setShowLyricViewModal(true)
//     }



//     useEffect(() => {
//         //console.log('use effect works')
//         console.log('props:\n', props)
//         getAllLyrics()
//             .then(res => {
//                 setLyrics(res.data.lyrics)
//                 return
//             })
//             .catch(err => {
//                 msgAlert({
//                     heading: 'Error getting lyrics',
//                     message: messages.getLyricsFailure,
//                     variant: 'danger'
//                 })
//             })
//     }, [updateTaggedLyrics])

//     // show a prompt to Tag lyrics if no lyrics exist, or an error message if database cannot be connected to
//     if (!lyrics) {
//         return (
//             <h1
//                 style={{ fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black' }}>
//                 Error connecting to database...
//             </h1>

//         )
//     }


//     const handleChange = (e) => {
//         //setartist({ artistist: e.target.value })

//         setArtist(() => {
//         let updatedArtist = e.target.value

//         return (updatedArtist)
//          })
//          setTitle(() => {
//             let updatedTitle = e.target.value
    
//             return (updatedTitle)
//              })
//     }

//     const handleViewLyricsInModal = (data) => {
//         setCreateLyricModalShow(true)
//         setLyricsToView(() => {
//             return (data.map(lyric => {

//                 return ({
//                     title: lyric.title,
//                     artist: lyric.artist ? lyric.artist.map((artist, i) => {
//                         if (i === 0) return artist
//                         else return ', ' + artist
//                     }) : null

//                 })
//             }))
//         })
//     }




//     const handleSubmit = (e) => {
//         e.preventDefault()


//         //console.log(`\nsubmitted value:\n${searchValue}`)
//         console.log(`\nsubmitted value:\n${artist}/${title}`)

//         // if (artist === "" || title === "") {
//         //     return;
//         // }
//         //  axios.get(`cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/tracks.lyrics.get?track_id=${searchValue}page=1&page_size=10
//         //  &country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
//         axios.get(`https://api.lyrics.ovh/v1/${artist}/${title}`)
//             .then((res) => {
//                 const data = res.data
//                 console.log("this is the data", data)
//                 //setLyrics(res.data.lyrics)
//                 handleViewLyricsInModal(data)

//             })
//             .catch(err => console.log(err))
//     }
//     return (
//         <>
         
        
//             <Form
//                 onSubmit={handleSubmit}
//                 className="d-flex"
//                 style={{ maxWidth: '550px', width: '100%', padding: '10px' }}
//             >
//                     <Form.Label htmlFor="artist">Artist</Form.Label>
//                     <Form.Control
//                         id='search-artist-field'
//                         autoComplete='off'
//                         type="search"
//                         placeholder="artist here..."
//                         className="me-2"
//                         aria-label="Search the internet"
//                         value={artist}
//                         onChange={handleChange}
//                         required
//                     />
//                     <Form.Label htmlFor="title">Title</Form.Label>
//                     <Form.Control
//                         id='search-title-field'
//                         autoComplete='off'
//                         type="search"
//                         placeholder="song title..."
//                         className="me-2"
//                         aria-label="Search the internet"
//                         value={title}
//                         onChange={handleChange}
//                         required
//                     />
              


//                 <Button type='submit' style={{ whiteSpace: 'nowrap' }} variant="outline-secondary">
//                     Find Lyrics
//                 </Button>
//             </Form>
        
//             {lyrics.length === 0 ?
//                 <>
//                     <h1
//                         style={{ fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black' }}>
//                         Let's search some lyrics to add!
//                     </h1>
//                 </>
//                 :
//                 <>
//                     <h1 style={{ fontFamily: 'Times', color: 'white', textShadow: '0.25px 0.25px 4px black, -0.25px -0.25px 4px black' }}>All tagged Lyrics:</h1>

//                     <LyricListModal
//                         user={user}
//                         msgAlert={msgAlert}
//                         lyricsToView={lyrics}
//                         lyricsAlreadyTagged={lyrics}
//                         setShowLyricViewModal={lyricToShow}
//                         setUpdateTaggedLyrics={() => { setUpdateTaggedLyrics(prev => !prev) }}
//                     />

//                 </>
//             }

//             <CrudLyric
//                 user={user}
//                 lyrics={lyrics}
//                 lyricsToView={lyricsToView}
//                 show={createLyricModalShow}
//                 lyricToShow={lyricToShow}
//                 lyricInViewModal={lyricInViewModal}
//                 showLyricViewModal={showLyricViewModal}
//                 setShowLyricViewModal={setShowLyricViewModal}
//                 setUpdateTaggedLyrics={() => { setUpdateTaggedLyrics(prev => !prev) }}
//                 msgAlert={msgAlert}
//                 handleClose={() => setCreateLyricModalShow(false)}
//             />

//         </>

//     )



// }




// export default FilterIndexForm



// {/* <form
//                 onSubmit={handleSubmit}
//                 className="d-flex"
//                 style={{ maxWidth: '550px', width: '100%', padding: '10px' }}
//             >
//                      <Form.Label htmlFor="artist">Artist</Form.Label> 
//                     <input
//                         id='search-artist-field'
//                         autoComplete='off'
//                         type="search"
//                         placeholder="artist here..."
//                         className="me-2"
//                         aria-label="Search the internet"
//                         value={artist}
//                         onChange={handleChange}
//                          required
//                     />
//                      <Form.Label htmlFor="title">Title</Form.Label> 
//                     <input
//                         id='search-title-field'
//                         autoComplete='off'
//                         type="search"
//                         placeholder="song title..."
//                         className="me-2"
//                         aria-label="Search the internet"
//                         value={title}
//                         onChange={handleChange}
//                          required
//                     />
              


//                 <Button type='submit' style={{ whiteSpace: 'nowrap' }} variant="outline-secondary">
//                     Find Lyrics
//                 </Button>
//             </form> */} 





