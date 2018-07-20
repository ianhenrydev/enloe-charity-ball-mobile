import * as React from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ProgressBarAndroid, Platform, ProgressViewIOS, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { PRIMARY_COLOR } from './Constants';
import Card from './Components/Card';

const selected = {selected: true, selectedColor: PRIMARY_COLOR}

export default class CalendarScreen extends React.Component<{}> {
  render() {
    return ( 
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20}}>Event Calendar</Text>
        <Calendar
          style={styles.scrollView}
          markedDates={{'2018-10-12': selected,'2018-10-13': selected,'2018-10-14': selected,'2018-10-15': selected,'2018-11-27': selected,'2018-11-30': selected,
          '2018-12-01': selected,'2018-12-02': selected,'2018-12-03': selected,'2018-12-04': selected,'2018-12-05': selected,'2018-12-06': selected,'2018-12-07': selected,'2018-12-08': selected,}}
          minDate={'2018-07-01'}
          maxDate={'2018-12-31'}
        />
        <ScrollView style={styles.scrollView}>
          <Card title='Oct 12-14'>
            <Text>Oct 12-14: Charity Ball Season Kickoff @ Student Council Fall Retreat</Text>
          </Card>
          <Card title='Oct 15'>
            <Text>Oct 15: Ticket Sales Open</Text>
          </Card>
          <Card title='Nov 27'>
            <Text>Nov 27: Giving Tuesday (Tentative date for twitter takeover)</Text>
          </Card>
          <Card title='Nov 30'>
            <Text>Nov 30: Space Jam</Text>
          </Card>
          <Card title='Dec 1'>
            <Text>Dec 1: ECB+VAE Art Auction</Text>
          </Card>
          <Card title='Dec 2-7'>
            <Text>Dec 2-7: Charity Week</Text>
          </Card>
          <Card title='Dec 8'>
            <Text>Dec 8: Charity Ball and Check Presentation @ Marbles Kids Museum</Text>
          </Card>
          <View style={{height: 30}}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  calendar: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    padding: 20,
  },
  dateText: {
    fontSize: 22,
    marginBottom: 10,
  }
});
