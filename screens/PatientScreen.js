import React from 'react'
import styled from 'styled-components/native'
import GrayText from '../ui/GrayText'
import { TouchableOpacity, Text, View } from 'react-native'
import Button from '../ui/Button'
import { Foundation } from '@expo/vector-icons'

export const PatientScreen = ({ navigation, route }) => {
  navigation.setOptions({
    headerTitle: 'Card Patient',
    headerTintColor: '#2A86FF',
    headerStyle: {
      elevation: 0.8,
      shadowOpacity: 0.8
    }
  })

  const { item } = route.params

  return (
    <Container>
      <PatientName>{ item.user.fullName }</PatientName>
      <GrayText>053 637-31-86</GrayText>
      <PatientButtons>
        <ButtonView>
          <Button>Formula of teeth</Button>
        </ButtonView>
        <PhoneButtonView>
          <Button color={'#84D269'}><Foundation name="telephone" size={24} color="white" /></Button>
        </PhoneButtonView>
      </PatientButtons>

      <PatientAppointments>
        <PatientAppointmentTitle>Appointments</PatientAppointmentTitle>

        <PatientAppointment>
          <Button>Butto2n</Button>
        </PatientAppointment>
      </PatientAppointments>
    </Container>
  )
}

const PatientAppointment = styled.View`
  background: #fff;
  border-radius: 10px;
  padding: 20px;
`
const PatientAppointmentTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
`
const PatientAppointments = styled.View`
  background: #f8fafd;
  margin: 0 -25px;
  padding: 25px;
  flex: 1;
`
const ButtonView = styled.View`
  flex: 1;
  margin-right: 10px;
`
const PhoneButtonView = styled.View`
  width: 45px;
`
const PatientButtons = styled.View`
  flex-direction: row;
  margin: 20px 0;
`
const PatientName = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 24px;
  line-height: 30px;
`
const Container = styled.View`
  flex: 1;
  padding: 25px;
  background-color: #fff;
`