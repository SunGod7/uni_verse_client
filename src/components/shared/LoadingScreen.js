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
    




export default LoadingScreen