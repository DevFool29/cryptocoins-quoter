import styled from '@emotion/styled'
import useSelectCoin from '../hooks/useSelectCoin'
import { coinsType } from '../data/coinsType'
import { useEffect, useState } from 'react'

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
  // To fill cryptos in a state
  const [cryptos, setCryptos] = useState([])

  // Fill first select with data in coinsType.js
  const [coin, SelectCoin] = useSelectCoin(
    'Select the coin of your interest',
    coinsType
  )

  // Fill second select with data in getCryptos function
  const [crypto, SelectCrypto] = useSelectCoin(
    'Select the crypto of your interest',
    cryptos
  )

  useEffect(() => {
    const getCryptos = async () => {
      const response = await fetch(
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
      )
      const cryptosJSON = await response.json()

      //Iterate to obtain data of each element
      const cryptosArray = cryptosJSON.Data.map((crypto) => {
        // Create an object in which we can set id and name
        const cryptoObject = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        }

        return cryptoObject
      })
      setCryptos(cryptosArray)
    }

    getCryptos()
  }, [])

  return (
    <form>
      <SelectCoin />
      <SelectCrypto />
      <InputSubmit type="submit" value="quote now" />
    </form>
  )
}
export default Form
