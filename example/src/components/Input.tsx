import styled from 'styled-components'

const Input = styled.input.attrs({type: 'number'})`
  border: 1px solid black;

  font-size: 16px;
  padding: 4px 8px;
  width: 160px;
  box-sizing: border-box;

  &:focus {
    box-shadow: 0 0 0 5px hsla(0, 0%, 10%, 0.4);
  }
`

export default Input;
