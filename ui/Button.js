import React from 'react'
import styled from 'styled-components/native'

export default ({ children, color }) => (
  <Button color={color} onPress={() => console.log(2)}>
    <ButtonText>{ children }</ButtonText>
  </Button>
)

const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 45px;
  border-radius: 30px;
  background: ${props => props.color};
`
Button.defaultProps = {
  color: '#2A86FF'
}

const ButtonText = styled.Text`
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #ffffff;
`