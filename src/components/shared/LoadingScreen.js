import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'

const LoadingScreen = () => {
    return (
        //<>
        <div style={{textAlign: 'center'}}>
          <Button variant="primary" disabled>
            <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            Loading...
          </Button>
          </div>
        //</>
      )

}
    


// const LoadingScreen = () => (
//     <div style={{textAlign: 'center'}}>
        
//         <Spinner role="status" animation="border" variant="success">
//             <span className="visually-hidden">Loading...</span>
//         </Spinner>
//     </div>
// )

export default LoadingScreen