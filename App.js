import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Text, View, SectionList } from 'react-native'
import styled from 'styled-components/native'
import {Ionicons} from '@expo/vector-icons'

import {Appointment, SectionTitle} from './components'

const DATA = [
  {
    title: '11 September',
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

export default function App() {
  return (
    <Container>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <Appointment {...item} />}
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
        <Ionicons name="ios-add" size={36} color="white"/>
      </PlusButton>
    </Container>
  );
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
  margin-top: 30px;
`
