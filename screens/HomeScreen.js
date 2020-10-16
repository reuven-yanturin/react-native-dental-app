import React from 'react'
import styled from 'styled-components/native'
import { Ionicons } from '@expo/vector-icons'
import { Appointment, SectionTitle } from '../components'
import { SectionList, View, Text } from 'react-native'

const DATA = [
  {
    title: '11 September',
    data: [
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin 2',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: false,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: false,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      }
    ],
  },
  {
    title: '12 September',
    data: [
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: true,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: false,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      },
      {
        time: '12:30',
        diagnosis: 'Developer, Wittix',
        active: false,
        user: {
          fullName: 'Reuven Yanturin',
          avatar: 'https://sun9-17.userapi.com/impf/c849228/v849228087/f0743/VUOIioBMPsM.jpg?size=50x0&quality=88&crop=0,77,585,585&sign=7e90f4c770777c1583d3b2cab6e085c1&ava=1'
        }
      }
    ],
  }
]

export const HomeScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Patients',
    headerTintColor: '#2A86FF',
    headerStyle: {
      elevation: 0.8,
      shadowOpacity: 0.8
    }
  })

  const openPatient = (item) => navigation.navigate('Patient', {item})

  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => (
          <Appointment openPatient={openPatient} item={item} />
        )}
        renderSectionHeader={({section: {title}}) => (
          <SectionTitle>{title}</SectionTitle>
        )}
      />

      <PlusButton
        style={{
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.5,
          elevation: 8
        }}
      >
        <Ionicons name="ios-add" size={36} color="white" />
      </PlusButton>
    </Container>
  )
}

const PlusButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  width: 64px;
  height: 64px;
  background-color: #2A86FF;
  position: absolute;
  right: 15px;
  bottom: 15px;
`
const Container = styled.View`
  flex: 1;
  background-color: #fff;
`