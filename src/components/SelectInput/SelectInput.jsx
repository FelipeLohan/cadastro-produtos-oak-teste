import styled from "styled-components";
import PropTypes from "prop-types";

const Select = styled.select`
  padding: 8px;
  border: 1px solid #64759c;
  border-radius: 6px;
  outline: none;
`;

const SelectInput = ({ value, onChange }) => {
  return (
    <>
      <Select value={value} onChange={onChange} required name="Disponivel para venda?">
        <option value="">Disponivel para venda?</option>
        <option value="Sim">Sim</option>
        <option value="Não">Não</option>
      </Select>
    </>
  );
};

SelectInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
};

export { SelectInput };
