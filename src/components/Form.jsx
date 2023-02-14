import styled from '@emotion/styled'
import useSelectCoin from '../hooks/useSelectCoin'
import { coinsType } from '../data/coinsType'
import { useEffect } from 'react'

const InputSubmit = styled.input`
  background-color: #4c6793;
  display: block;
  border: none;
  width: 80%;
  margin: 20px auto 0;
  padding: 8px;
  border-radius: 5px;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #385583;
  }
`

const Form = () => {
  // Using useSelectCoin custom hook
  const [coins, SelectCoin] = useSelectCoin(
    'Select the coin of your interest',
    coinsType
  )

  useEffect(() => {
    const getCryptos = async () => {
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      )
      const json = await response.json()
      console.log(json.Data)
    }

    getCryptos()
  }, [])

  return (
    <form>
      <SelectCoin />
      <InputSubmit type="submit" value="quote now" />
    </form>
  )
}
export default Form
