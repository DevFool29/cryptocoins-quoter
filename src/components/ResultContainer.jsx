import styled from '@emotion/styled'
import BounceLoader from 'react-spinners/BounceLoader'

const Container = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 25px;
`

const Text = styled.p`
  color: #fff;
  font-family: sans-serif;
  font-size: 18px;
`

const Span = styled.span`
  font-weight: 900;
`

const ImgCrypto = styled.img`
  display: block;
  max-width: 350px;
  width: 50%;
  height: 50%;
  margin: auto 0;
`

const DivSpinner = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;

  @media (max-width: 400px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
`

const ResultContainer = ({ quotedValue, isLoading }) => {
  //Destructuring quotedValue into attributes of our interest
  const { PRICE, LASTUPDATE, HIGHDAY, LOWDAY, IMAGEURL, CHANGEPCT24HOUR } =
    quotedValue

  if (isLoading) {
    return (
      <DivSpinner>
        <BounceLoader color="#cddbd8" />
      </DivSpinner>
    )
  }

  return (
    <Container>
      <div>
        <Text>
          Price <br /> <Span>{PRICE}</Span>
        </Text>
        <Text>
          The highest price of the day <br /> <Span>{HIGHDAY}</Span>
        </Text>
        <Text>
          The lowest price of the day <br /> <Span>{LOWDAY}</Span>
        </Text>
        <Text>
          Variation in the last 24 hours <br /> <Span>{CHANGEPCT24HOUR}%</Span>
        </Text>
        <Text>
          Last update <br />
          <Span>{LASTUPDATE}</Span>
        </Text>
      </div>

      <ImgCrypto src={`https://cryptocompare.com/${IMAGEURL}`} alt={IMAGEURL} />
    </Container>
  )
}
export default ResultContainer
