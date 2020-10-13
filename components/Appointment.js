import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

const Appointment = ({ user, active, diagnosis, time }) => (
  <GroupItem>
    <Avatar source={{ uri: user.avatar }} />

    <View style={{flex: 1}}>
      <FullName>{user.fullName}</FullName>
      <GrayText>{diagnosis}</GrayText>
    </View>
    <GroupDate active={active}>{time}</GroupDate>
  </GroupItem>
)

Appointment.defaultProps = {
  title: '11 September',
  items: []
}

const GroupItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 1px;
  border-bottom-color: #f3f3f3;
`
const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 50px;
`
const FullName = styled.Text`
  font-size: 16px;
  font-weight: 600;
`
const GrayText = styled.Text`
  font-size: 15px;
  color: #8B979F;
`
const GroupDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  border-radius: 18px;
  color: ${props => props.active ? '#FFFFFF' : '#4294FF'};
  font-size: 14px;
  padding: 4px 15px;
`

export default Appointment