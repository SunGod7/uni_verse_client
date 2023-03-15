import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllLyrics = () => {
    return axios(`${apiUrl}/lyrics`)
}
            
export const getOneLyric = (id) => {
    return axios(`${apiUrl}/lyrics/${id}`)
}

// CREATE
export const createLyric = (user, newLyric) => {
    console.log('createlyric in API was hit')
    // in createLyric form, we're building an object
    // when we pass that object into the api createLyric function
    // it's going to look like the lyrics in the database
    // we're going to refer to this as a newLyric, so we can just pass the entire object created by the form into an Axios request to our back-end (Lyrics API) and call it 'lyric'
    console.log('this is user', user)
    console.log('this is newLyric', newLyric)
	return axios({
		url: apiUrl + '/lyrics',
		method: 'POST',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			lyric: newLyric,
		},
	})
}

// UPDATE
export const updateLyric = (user, updatedLyric) => {
    console.log('updateLyric in API was hit')
    // inour createLyric form, we're building an object
    // when we pass that object into the api createLyric function
    // it's going to look like the lyrics in our database
    // we're going to refer to this as a newLyric, so we can just pass the entire object created by the form into an Axios request to our back-end and call it 'lyric'
    // console.log('this is user', user)
    console.log('this is updatedLyric', updatedLyric)
	return axios({
		url: `${apiUrl}/lyrics/${updatedLyric._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`
		},
		data: {
			lyric: updatedLyric
		}
	})
}

// DELETE
export const removeLyric = (user, lyricId) => {
	return axios({
		url:`${apiUrl}/lyrics/${lyricId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}
/////////////////

// // INDEX
// export const getAllLyrics = () => {
//     return axios(`${apiUrl}/lyrics`)
// }

// // READ => SHOW
// export const getOneLyric = (id) => {
//     return axios(`${apiUrl}/lyrics/${id}`)
// }

// // CREATE
// export const createLyric = (user, newLyric) => {
//     console.log('createlyric in API was hit')
//     // in our createLyric form, we're building an object
//     // when we pass that object into the api createLyric function
//     // it's going to look like the lyrics in our database
//     // we're going to refer to this as a newLyric, so we can just pass the entire object created by the form into an Axios request to our back-end (Lyrics API) and call it 'lyric'
//     console.log('this is user', user)
//     console.log('this is newLyric', newLyric)
// 	return axios({
// 		url: apiUrl + '/lyrics',
// 		method: 'POST',
// 		headers: {
// 			Authorization: `Token token=${user.token}`,
// 		},
// 		data: {
// 			lyric: newLyric,
// 		},
// 	})
// }

// // UPDATE
// export const updateLyric = (user, updatedLyric) => {
//     console.log('updateLyric in API was hit')
//     // inour createLyric form, we're building an object
//     // when we pass that object into the api createLyric function
//     // it's going to look like the lyrics in our database
//     // we're going to refer to this as a newLyric, so we can just pass the entire object created by the form into an Axios request to our back-end and call it 'lyric'
//     // console.log('this is user', user)
//     console.log('this is updatedLyric', updatedLyric)
// 	return axios({
// 		url: `${apiUrl}/lyrics/${updatedLyric._id}`,
// 		method: 'PATCH',
// 		headers: {
// 			Authorization: `Token token=${user.token}`
// 		},
// 		data: { lyric: updatedLyric }
			
// 	})
// }

// // DELETE
// export const removeLyric = (user, lyricId) => {
// 	return axios({
// 		url:`${apiUrl}/lyrics/${lyricId}`,
// 		method: 'DELETE',
// 		headers: {
// 			Authorization: `Token token=${user.token}`
// 		}
// 	})
// }