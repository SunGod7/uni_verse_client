import React from "react";
import { Modal } from "react-bootstrap";

import LyricListModal from "./LyricListModal";
import LyricViewModal from "./LyricViewModal";

const CrudLyric = (props) => {
    const {
        user, 
        show,
        lyrics,
        lyricsToView,
        lyricToShow,
        showLyricViewModal,
        setShowLyricViewModal,
        lyricInViewModal,
        handleClose, 
        setUpdateTaggedLyrics, 
        msgAlert, 
        // triggerRefresh
    } = props

    // const [showLyricListModal, setShowLyricListModal] = useState(false)
    // const [lyricsInModal, setLyricsInModal] = useState(props.lyricsToView)

    // const [showLyricViewModal, setShowLyricViewModal] = useState(false)
    // const [lyricInViewModal, setLyricInViewModal] = useState({})

    // // console.log('lyric being viewed:',lyricInViewModal)

    // const lyricToShow = (e) => {
    //     setShowLyricViewModal(true)
    //     console.log(e.target.id)
    //     const lyricArtist = e.target.id
    //     setLyricInViewModal(() => {
    //         const viewedBLyric = lyricsToView.filter(lyric => lyric.artist === lyricArtist)
    //         console.log('lyric view modal being updated to:', viewedLyric[0])
    //         return (
    //             viewedLyric[0]
    //         )
    //     })
    // }

    return (
        <>
            <Modal
                size="lg" 
                show={show} 
                onHide={() => {
                        handleClose()
                    }
                }
                backdrop={'static'}
                >
                <Modal.Header closeButton 
                style={{backgroundColor: 'rgb(177, 177, 177)'}}/>
                <Modal.Body 
                    style={{backgroundColor: 'whitesmoke'}}
                    >
                        <LyricListModal
                            user={user}
                            msgAlert={msgAlert}
                            lyricsAlreadyTagged={lyrics}
                            lyricsToView={lyricsToView}
                            setUpdateTaggedLyrics={setUpdateTaggedLyrics}
                            heading="Any of these what you're looking for?"
                            setShowLyricViewModal={lyricToShow}
                        />
                </Modal.Body>
            </Modal>

            <Modal 
                fullscreen={true}
                show={showLyricViewModal} 
                onHide={() => setShowLyricViewModal(false)}
                style={{opacity: '1'}}
                >
                <Modal.Header 
                    closeButton
                    closeVariant="white"
                    style={{backgroundColor: 'black', color: 'white'}}
                    />
                <Modal.Body
                    style={{backgroundColor: 'black', color: 'rgba(255,255,255,1'}}
                    >
                        <LyricViewModal
                            user={user}
                            lyricInViewModal={lyricInViewModal}
                            msgAlert={msgAlert}
                            setShowLyricViewModal={setShowLyricViewModal}
                        />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default CrudLyric