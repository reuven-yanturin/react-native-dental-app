import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import GrayText from '../ui/GrayText'

const Appointment = ({ item, openPatient }) => (
  <GroupItem onPress={() => openPatient(item)}>
    <Avatar source={{ uri: item.user.avatar }} />

    <View style={{flex: 1}}>
      <FullName>{item.user.fullName}</FullName>
      <GrayText>{item.diagnosis}</GrayText>
    </View>
    <GroupDate active={item.active}>{item.time}</GroupDate>
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
const GroupDate = styled.Text`
  background: ${props => props.active ? '#2A86FF' : '#E9F5FF'};
  border-radius: 18px;
  color: ${props => props.active ? '#FFFFFF' : '#4294FF'};
  font-size: 14px;
  padding: 4px 15px;
`

export default Appointment