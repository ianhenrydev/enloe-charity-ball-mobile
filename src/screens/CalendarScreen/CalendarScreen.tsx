import * as React from 'react'
import { FlatList, Text, StyleSheet, View, ScrollView } from 'react-native'
import Card from '../../components/Card'
import moment from 'moment'
import firebase from 'firebase'
require('firebase/firestore')

interface Props {}

interface State {
  events: firebase.firestore.QueryDocumentSnapshot[]
  loading: boolean
}

export default class CalendarScreen extends React.Component<Props, State> {
  private firestore: firebase.firestore.Firestore
  constructor(props: Props) {
    super(props)
    this.state = {
      events: [],
      loading: false
    }
    this.firestore = firebase.firestore()
    this.firestore.settings({ timestampsInSnapshots: true })
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.firestore
      .collection('events')
      .orderBy('date')
      .get()
      .then(result => {
        this.setState({ events: result.docs })
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20 }}>Event Calendar</Text>
        <FlatList<firebase.firestore.QueryDocumentSnapshot> data={this.state.events} renderItem={this.renderItem} keyExtractor={item => item.id} />
      </View>
    )
  }

  private renderItem = ({ item }) => {
    return (
      <Card title={moment(item.get('date').toDate()).format('MMM D')}>
        <Text style={styles.dateText}>{item.get('name')}</Text>
      </Card>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  calendar: {
    flex: 1
  },
  scrollView: {
    flex: 1,
    padding: 20
  },
  dateText: {
    fontSize: 18
  }
})
