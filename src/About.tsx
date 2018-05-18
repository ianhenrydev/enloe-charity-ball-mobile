import * as React from 'react';
import { Alert, ActivityIndicator, Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ProgressBarAndroid, Platform, ProgressViewIOS, ScrollView, Linking } from 'react-native';
import firebase from 'firebase';
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCWfpor5IAdpqZtQiEWbYMh3525Cpt8tJs",
  authDomain: "enloe-charity-ball.firebaseapp.com",
  databaseURL: "https://enloe-charity-ball.firebaseio.com",
  projectId: "enloe-charity-ball",
  storageBucket: "",
  messagingSenderId: "540378669019"
};

type IState = {
  donationTotal: number;
  message: string;
  loading: boolean;
}

export default class About extends React.Component<{}, IState> {
  state = {
    donationTotal: 0,
    message: "",
    loading: false,
  };

  componentDidMount() {
    this.setState({ loading: true });
    firebase.initializeApp(firebaseConfig);
    console.log(`Firebase Initialized SDK: ${firebase.SDK_VERSION}`);
    const firestore = firebase.firestore();
    firestore.settings({ timestampsInSnapshots: true })
    firestore.collection("info").doc('about').get().then((doc) => {
      if (doc.exists) {
        this.setState({donationTotal: doc.get('donation_total'), message: doc.get('message'), loading: false});
      } else {
          console.log("No such document!");
          this.setState({ loading: false });
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });
  }

  render() {
    const percent = this.state.donationTotal / 150000;
    return ( 
      <View style={styles.container}>
        <ScrollView style={styles.scrollView}>
            <Text style={styles.titleText}>Enloe Charity Ball 2018</Text>
            <View style={styles.messageCard}>
              { this.state.loading ? <ActivityIndicator color="#0000ff" /> : <Text style={styles.normalText}>{this.state.message}</Text>}
            </View>
            <Text style={styles.normalText}>What? Enloe's 13th annual Charity Ball</Text>
            <Text style={styles.normalText}>When? December 9, 2017 from 7-11 PM</Text>
            <Text style={styles.normalText}>Where? Marbles Kids Museum in Downtown Raleigh</Text>
            <Text style={styles.normalText}>Who? Enloe High School partnering with the Raleigh-Wake Partnership to end Homelessness</Text>
            <Image style={styles.image} source={require('../assets/partnership-end-homelessness.png')}/>
            <Text style={styles.normalText}>Why? To help us raise $150,000 for the Raleigh-Wake Partnership to end Homelessness</Text>
            <Text style={styles.normalText}>How? Buy your ticket or donate online by clicking here</Text>
            <Text style={styles.normalText}>Our teams worked on several facets during Charity Ball season. Updates on 2018 teams coming soon!</Text>
            <Text style={styles.normalText}>There were also several fundraising events we plan and host for Charity Ball. Learn about them here.</Text>
            <Text style={styles.normalText}>Members of student council and the community also collaborate on an Enloe Charity Ball Blog.</Text>
            <Text style={styles.normalText}>To inspire and impact our community through innovative, student-led solutions</Text>
            <Text style={styles.normalText}>We are alive with purpose.</Text>
            <TouchableOpacity onPress={this.openBlog} style={styles.button}>
              <Text style={styles.buttonText}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openTwitter} style={styles.button}>
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>
        </ScrollView>
        <View style={styles.donationView}>
          { this.state.loading ? 
            <ActivityIndicator size="large" color="#0000ff" /> :
            <View>
              <Text style={styles.donationText}>{`$${this.state.donationTotal}`}</Text>
              { (Platform.OS === 'ios') ? <ProgressViewIOS progress={percent}/> : <ProgressBarAndroid styleAttr='Horizontal' progress={percent} indeterminate={false} color='#43a047'/>}
              <TouchableOpacity onPress={this.donate} style={styles.button}>
                <Text style={styles.buttonText}>Donate Now</Text>
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    );
  }

  private donate = () => {
    Alert.alert(
      'Coming Soon',
      'The donation portal will be online soon',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
  }

  private openBlog = () => {
    Linking.openURL('https://enloecharityball.wordpress.com/')
  }
  private openTwitter = () => {
    Linking.openURL('https://twitter.com/EHSCharityBall')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 250,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  scrollView: {
    padding: 20,
    flex: 1,
  },
  messageCard: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000',
    padding: 5,
    justifyContent: 'center',
    marginBottom: 10,
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
    padding: 5,
    borderTopWidth: 1,
    borderColor: '#424242',
  },
  donationText: {
      alignSelf: 'center',
      fontSize: 22,
  },
  loading: {

  },
  button: {
    backgroundColor: '#43a047',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#43a047',
    margin: 10,
    alignItems: 'center',
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
