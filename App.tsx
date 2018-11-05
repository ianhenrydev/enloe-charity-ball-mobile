import * as React from 'react'
import { SafeAreaView } from 'react-native'
import Navigator from './src/navigation/Navigator'

export default class App extends React.Component<{}> {
  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <Navigator />
      </SafeAreaView>
    )
  }
}
