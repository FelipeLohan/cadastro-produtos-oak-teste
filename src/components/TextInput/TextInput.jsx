import PropTypes from "prop-types";
import styled from "styled-components";

const Input = styled.input`
  padding: 8px;
  border: 1px solid #64759C;
  border-radius: 6px;
  outline: none;
`

const TextInput = ({ placeholder, value, onChange }) => {
  return (
    <>
      <Input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required 
      ></Input>
    </>
  );
};

export { TextInput };

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,

};
