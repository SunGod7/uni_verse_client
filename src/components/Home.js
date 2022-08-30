// import './Home.css'

// import FilterIndexForm from "./lyrics/FilterIndexForm"

// const Home = (props) => {
// 	const { msgAlert, user } = props
// 	console.log('props in home', props)

// 	return (
// 		<div className='home-page-header'>
// 			<FilterIndexForm 
// 				user={user}
// 				msgAlert={msgAlert}
// 			/>
// 		</div>
// 	)
// }

// export default Home
//import './Home.css'

import LyricsIndex from "./lyrics/LyricsIndex"

const Home = (props) => {
	//const { msgAlert, user } = props
	console.log('props in home', props)
    const { msgAlert } = {}
	return (
		// <div className='home-page-header'>

		<>
		  <h1 style={{ color: 'yellow', textAlign: 'center' }}>Welcome To The UNI-VERZE</h1>
			<LyricsIndex />
		</>
		// </div>
	)
}

export default Home
