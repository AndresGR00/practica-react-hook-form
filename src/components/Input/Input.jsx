import PropTypes from "prop-types";
import "./Input.css";

const Input = ({
  inputName,
  inputType,
  register,
  isRequired,
  requiredMessage,
  regexPattern,
  patternMessage,
  minLengthValue,
  lengthMessage,
}) => {
  return (
    <div className="input-and-label">
      <label className="label" htmlFor={inputName}>
        {inputName.charAt(0).toUpperCase() + inputName.slice(1)}
      </label>
      <input
        className="input"
        id={inputName}
        type={inputType}
        {...register(inputName, {
          required: {
            value: isRequired,
            message: requiredMessage,
          },
          pattern: {
            value: regexPattern,
            message: patternMessage,
          },
          minLength: {
            value: minLengthValue,
            message: lengthMessage,
          },
        })}
      />
    </div>
  );
};

Input.propTypes = {
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  register: PropTypes.func,
  isRequired: PropTypes.bool,
  requiredMessage: PropTypes.string,
  regexPattern: PropTypes.instanceOf(RegExp),
  patternMessage: PropTypes.string,
  minLengthValue: PropTypes.number,
  lengthMessage: PropTypes.string,
};

export default Input;
