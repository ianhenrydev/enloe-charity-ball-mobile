import * as React from 'react'
import { SafeAreaView } from 'react-native'
import Navigator from './src/navigation/Navigator'
import firebase from 'firebase'
import { firebaseConfig } from './src/FirebaseConfig'

export default class App extends React.Component<{}> {
  constructor(props: any) {
    super(props)
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: '#FAFAFA' }}>
        <Navigator />
      </SafeAreaView>
    )
  }
}
