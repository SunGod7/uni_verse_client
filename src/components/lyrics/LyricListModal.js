// import { useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import LyricForm from '../shared/LyricForm';

// style for lyric cards container
const cardContainerStyle = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center',
    maxWidth: '1000px'
}

const LyricListModal = (props) => {
    const {
        user,
        msgAlert,
        lyricsAlreadyTagged,
        lyricsToView, 
        heading,
        setShowLyricViewModal,
        setUpdateTaggedLyrics
    } = props
    
    const searchedLyrics = () => {
        // for(const lyric of lyricsToView) {
        //     for (const property in lyric) {
        //         if(property === null || property === undefined) continue
        //         else return ()
        //     }
        // }
        let lyricsAlreadyTaggedArtists = lyricsAlreadyTagged.map(lyric => lyric.artist)

      
        return lyricsToView.map((lyric, i) => {
            let filteredLyric = {}
            let undefinedProperty = false
            for (const property in lyric) {
                // console.log(property,'in index ',i,': ',lyric[property])
                if(lyric[property] === null || lyric[property] === undefined) {
                    console.log('undefined or null property:', property)
                    undefinedProperty = true
                    break
                } 
                else filteredLyric = {...filteredLyric,
                    ...(
                        <Card bg={'secondary'} text={'light'} style={{ width: 'fit-content', margin: '15px', justifyContent: 'center' }} key={i}>
                            <Card.Img variant="top" src={lyric.image} style={{ height: '250px', width: '180px' }} />
                            <Card.Body>
                                <div style={{ textAlign: 'center', display: 'flex' }}>

                                    {user && lyric.owner && lyric.owner === user._id ?
                                        <LyricForm
                                            user={user}
                                            msgAlert={msgAlert}
                                            lyric={lyric}
                                            setUpdateTaggedLyrics={setUpdateTaggedLyrics}
                                        />
                                    :
                                        null
                                    }

                                    {!lyricsAlreadyTaggedArtists.includes(lyric.artist) && user ?
                                        <LyricForm
                                            user={user}
                                            msgAlert={msgAlert}
                                            lyric={lyric}
                                            setUpdateTaggedLyrics={setUpdateTaggedLyrics}
                                        />
                                    :
                                        null
                                    }
                                    
                                    <Button 
                                        id={lyric.artist} 
                                        onClick={e => setShowLyricViewModal(e)} variant="info"
                                        style={{width: '100%', color: 'white'}}
                                        >
                                            View
                                    </Button>

                                </div>
                            </Card.Body>
                        </Card>
                    )
                } 
            }
            return undefinedProperty ? null : filteredLyric

        })
    }
    
    return (
        <>
            { heading ?
                <div style={{textAlign: 'center'}}>
                    {heading}
                </div>
            :
                null
            }
            
            <div style={cardContainerStyle} >
                {searchedLyrics()}
            </div>
        </>
    );
}

export default LyricListModal