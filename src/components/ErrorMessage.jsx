import styled from '@emotion/styled'

const Text = styled.p`
  color: white;
  background-color: #820000;
  padding: 5px;
  width: 70%;
  margin: 0 auto;
  font-family: 'Sofia sans', sans-serif;
  text-align: center;
  border-radius: 6px;
`

const ErrorMessage = () => {
  return <Text>All fields are required</Text>
}
export default ErrorMessage
