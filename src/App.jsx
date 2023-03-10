import styled from '@emotion/styled'
import CryptoImg from './img/cryptos.png'
import Form from './components/Form'
import { useEffect, useState } from 'react'
import ResultContainer from './components/ResultContainer'

const Container = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 3rem;
  }
`
const Img = styled.img`
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 90px auto 50px;
`

const Heading = styled.h1`
  font-family: 'Sofia Sans', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 900;
  margin-top: 90px;

  &::after {
    display: block;
    content: '';
    width: 120px;
    height: 6px;
    background-color: #5bc0f8;
    margin: 5px auto 0;
  }
`

function App() {
  const [coinsSelected, setCoinsSelected] = useState({}) // This state will be filled with the coin and crypto selected
  const [quotedValue, setQuotedValue] = useState({}) // This state will be filled with the quoted value between coins
  const [isLoading, setIsLoading] = useState(false)

  // This will be executed once a user have already chosen their coin and crypto in the form and send it
  useEffect(() => {
    if (Object.keys(coinsSelected).length) {
      const quoteCrypto = async () => {
        setIsLoading(true)
        // setQuotedValue({})

        const { coin, crypto } = coinsSelected
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`

        const response = await fetch(url)
        const result = await response.json()
        setQuotedValue(result.DISPLAY[crypto][coin])
        setIsLoading(false)
      }

      quoteCrypto()
    }
  }, [coinsSelected])

  return (
    <Container>
      <Img src={CryptoImg} alt="crypto-img" />
      <div>
        <Heading>Quote your favorite crypto here instantly!</Heading>
        <Form setCoinsSelected={setCoinsSelected} />

        {/* PRICE attribute is used to check if quotedValue.PRICE is truthy or falsy */}
        {quotedValue.PRICE && (
          <ResultContainer quotedValue={quotedValue} isLoading={isLoading} />
        )}
      </div>
    </Container>
  )
}

export default App
