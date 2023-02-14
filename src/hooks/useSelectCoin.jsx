import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: 'Sofia Sans', sans-serif;
  font-size: 20px;
  font-weight: 700;
`
const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 7px;
  margin: 5px auto 15px;
`

//Custom hook to render a label as a component, passing a parameters which are "label" and "options" as a values in the select
const useSelectCoin = (label, options) => {
  //State to set our value in "Select"
  const [state, setState] = useState('')

  //Creating a component to be render in the form
  const SelectCoin = () => (
    <>
      <Label>{label}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Select>
    </>
  )
  return [state, SelectCoin]
}
export default useSelectCoin
