import PropTypes from 'prop-types'
import './ErrorMessage.css'

const ErrorMessage = ({error}) => {
  return (
    <p>{error}</p>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string
}

export default ErrorMessage