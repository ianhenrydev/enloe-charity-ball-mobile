import * as React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import AboutScreen from '../screens/AboutScreen'
import CalendarScreen from '../screens/CalendarScreen'
import GalleryScreen from '../screens/GalleryScreen'
import { PRIMARY_COLOR } from '../Constants'
import { Ionicons } from '@expo/vector-icons'

export default createBottomTabNavigator(
  {
    About: AboutScreen,
    Calendar: CalendarScreen,
    Gallery: GalleryScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'About') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
        } else if (routeName === 'Calendar') {
          iconName = 'ios-calendar'
        } else if (routeName === 'Gallery') {
          iconName = 'md-photos'
        }
        return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: PRIMARY_COLOR
    }
  }
)
