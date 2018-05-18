import * as React from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ProgressBarAndroid, Platform, ProgressViewIOS, ScrollView } from 'react-native';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

export default class CalendarScreen extends React.Component<{}> {
  render() {
    return ( 
      <View style={styles.container}>
        <Calendar
          style={styles.scrollView}
          markedDates={{'2018-05-29': {marked: true},'2018-06-12': {marked: true},'2018-10-18': {marked: true},'2018-12-07': {marked: true}}}
          minDate={'2018-05-01'}
          maxDate={'2018-12-31'}
        />
        <ScrollView style={styles.scrollView}>
            <Text style={styles.dateText}>05-29: Some event</Text>
            <Text style={styles.dateText}>06-12: Another event</Text>
            <Text style={styles.dateText}>10-18: So many events</Text>
            <Text style={styles.dateText}>12-07: 2018 Charity Ball</Text>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
