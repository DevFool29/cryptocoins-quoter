import styled from '@emotion/styled'
import CryptoImg from './img/cryptos.png'
import Form from './components/Form'

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
  return (
    <Container>
      <Img src={CryptoImg} alt="crypto-img" />
      <div>
        <Heading>Quote your favorite crypto here instantly!</Heading>
        <Form></Form>
      </div>
    </Container>
  )
}

export default App
