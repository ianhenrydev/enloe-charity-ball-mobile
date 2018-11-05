import * as React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Card from '../../components/Card'

export default class CalendarScreen extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20 }}>Event Calendar</Text>
        <ScrollView style={styles.scrollView}>
          <Card title="Aug 15">
            <Text style={styles.dateText}>Charity Reveal @ HQ Raleigh</Text>
          </Card>
          <Card title="Oct 12-14">
            <Text style={styles.dateText}>Charity Ball Season Kickoff @ Student Council Fall Retreat</Text>
          </Card>
          <Card title="Oct 15">
            <Text style={styles.dateText}>Ticket Sales Open</Text>
          </Card>
          <Card title="Nov 27">
            <Text style={styles.dateText}>Giving Tuesday (Tentative date for twitter takeover)</Text>
          </Card>
          <Card title="Nov 30">
            <Text style={styles.dateText}>Space Jam</Text>
          </Card>
          <Card title="Dec 1">
            <Text style={styles.dateText}>ECB+VAE Art Auction</Text>
          </Card>
          <Card title="Dec 2-7">
            <Text style={styles.dateText}>Charity Week</Text>
          </Card>
          <Card title="Dec 8">
            <Text style={styles.dateText}>Charity Ball and Check Presentation @ Marbles Kids Museum</Text>
          </Card>
          <View style={{ height: 30 }} />
        </ScrollView>
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
