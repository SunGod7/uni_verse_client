import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX
export const getAllComments = (lyricId) => {
    return axios(`${apiUrl}/comments/${lyricId}`)
}

// CREATE
export const createComment = (user, lyricId, note) => {
    // console.log('createComment in API was hit')
    console.log('this is the lyric id: ', lyricId)
    console.log('this is user in createComment', user)
    console.log('this is comment in createComment', note)
	return axios({
		url: `${apiUrl}/comments/${lyricId}`,
		method: 'POST',
		data: {
			note: note
           
		},
	})
}

// UPDATE
export const updateComment = (user, lyricId, updatedComment) => {
    console.log('updateComment in API was hit')
    console.log('this is updatedComment', updatedComment)
	return axios({
		url: `${apiUrl}/comments/${lyricId}/${updatedComment._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`
		},
		data: {
			note: updatedComment.note
		}
	})
}

// DELETE
export const deleteComment = (user, lyricId, commentId) => {
    console.log('deleteComment in API was hit')
	return axios({
		url:`${apiUrl}/comments/${lyricId}/${commentId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`
		}
	})
}