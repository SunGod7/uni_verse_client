import { Form, Button } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import axios from 'axios'


// const handleSubmit = (e) => {
//     e.preventDefault()

//     console.log(`\nsubmitted value:\n${searchValue}`)

//     axios.get(`https://api.lyrics.ovh/v1/?q=${searchValue}`)
//         .then((res) => {
//             const data = res.data.items
//             // console.log(data)
            
//             handleViewBooksInModal(data)
            
//         })
//         .catch(err => console.log(err))
// }

// export default FilterIndexForm