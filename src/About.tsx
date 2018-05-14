import * as React from 'react';
import { ActivityIndicator, Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ProgressBarAndroid, Platform, ProgressViewIOS, ScrollView } from 'react-native';

export default class About extends React.Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.titleText}>Enloe Charity Ball 2018</Text>
            <Text style={styles.normalText}>What? Enloe's 13th annual Charity Ball</Text>
            <Text style={styles.normalText}>When? December 9, 2017 from 7-11 PM</Text>
            <Text style={styles.normalText}>Where? Marbles Kids Museum in Downtown Raleigh</Text>
            <Text style={styles.normalText}>Who? Enloe High School partnering with the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>Why? To help us raise $150,000 for the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>How? Buy your ticket or donate online by clicking here`</Text>
            <Text style={styles.titleText}>Enloe Charity Ball 2018</Text>
            <Text style={styles.normalText}>What? Enloe's 13th annual Charity Ball</Text>
            <Text style={styles.normalText}>When? December 9, 2017 from 7-11 PM</Text>
            <Text style={styles.normalText}>Where? Marbles Kids Museum in Downtown Raleigh</Text>
            <Text style={styles.normalText}>Who? Enloe High School partnering with the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>Why? To help us raise $150,000 for the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>How? Buy your ticket or donate online by clicking here`</Text>
            <Text style={styles.titleText}>Enloe Charity Ball 2018</Text>
            <Text style={styles.normalText}>What? Enloe's 13th annual Charity Ball</Text>
            <Text style={styles.normalText}>When? December 9, 2017 from 7-11 PM</Text>
            <Text style={styles.normalText}>Where? Marbles Kids Museum in Downtown Raleigh</Text>
            <Text style={styles.normalText}>Who? Enloe High School partnering with the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>Why? To help us raise $150,000 for the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>How? Buy your ticket or donate online by clicking here`</Text>
        </ScrollView>
        <View style={styles.donationView}>
            <Text style={styles.donationText}>$14,324 Donated</Text>
            { (Platform.OS === 'ios') ? <ProgressViewIOS/> : <ProgressBarAndroid styleAttr='Horizontal' progress={0.4} indeterminate={false} color='#43a047'/>}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  normalText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  donationView: {
    padding: 10,  
  },
  donationText: {
      alignSelf: 'center',
      fontSize: 22,
  }
});
