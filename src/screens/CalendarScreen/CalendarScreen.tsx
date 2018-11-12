import * as React from 'react'
import { ActivityIndicator, SectionList, Text, StyleSheet, View, ScrollView } from 'react-native'
import Card from '../../components/Card'
import { PRIMARY_COLOR } from '../../Constants'

interface Props {}

interface State {
  calendar: any[]
}

export default class CalendarScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      calendar: []
    }
  }

  componentDidMount() {
    const calendar = require('../../../assets/calendar.json')
    this.setState({ calendar })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20 }}>Event Calendar</Text>
        {this.state.calendar.length === 0 ? (
          <ActivityIndicator color="#fff" size="large" />
        ) : (
          <SectionList
            style={{ flex: 1 }}
            renderItem={this.renderItem}
            renderSectionHeader={this.renderSectionHeader}
            sections={this.state.calendar}
            keyExtractor={(item, index) => item + index}
            removeClippedSubviews={true}
            stickySectionHeadersEnabled
          />
        )}
      </View>
    )
  }

  private renderSectionHeader = ({ section: { title } }: any) => {
    return (
      <View>
        <Text style={{ fontSize: 18, color: '#fff', padding: 10, backgroundColor: PRIMARY_COLOR }}>{title}</Text>
      </View>
    )
  }

  private renderItem = ({ item }: any) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', margin: 10 }}>
        <View style={{ height: 50, width: 50, borderRadius: 25, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontSize: 28, color: '#000' }}>{item.date}</Text>
        </View>
        <View style={{ marginLeft: 20, marginRight: 50 }}>
          <Text style={{ fontSize: 18, color: '#000' }}>{item.name}</Text>
          {item.description && <Text style={{ fontSize: 16, color: '#000' }}>{item.description}</Text>}
        </View>
      </View>
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
