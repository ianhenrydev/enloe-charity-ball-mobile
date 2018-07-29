import * as React from 'react';
import { Alert, ActivityIndicator, Image, Text, TextInput, TouchableOpacity, StyleSheet, View, ProgressBarAndroid, Platform, ProgressViewIOS, ScrollView, Linking } from 'react-native';
import firebase from 'firebase';
require("firebase/firestore");
import Card from './Components/Card';
import { firebaseConfig, PRIMARY_COLOR } from './Constants';

type IState = {
  donationTotal: number;
  message: string;
  loading: boolean;
}

export default class AboutScreen extends React.Component<{}, IState> {
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
    const percent = this.state.donationTotal / 200000;
    return ( 
        <ScrollView style={styles.scrollView}>
            <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20}}>Enloe Charity Ball 2018</Text>
            <View style={{ flexDirection: 'row'}}>
              <Image style={{ flex: 1, maxHeight: 200 }} resizeMode='contain' source={require('../assets/banner-smol.jpg')}/>
            </View>
            <Card title='Total Raised'>
              <Text style={{ fontSize: 18 }}>{`$${this.state.donationTotal} of $200,000 goal`}</Text>
              { (Platform.OS === 'ios') ? <ProgressViewIOS style={{ marginTop: 5, marginBottom: 5 }}progress={percent} progressTintColor={PRIMARY_COLOR}/> : <ProgressBarAndroid styleAttr='Horizontal' progress={percent} indeterminate={false} color={PRIMARY_COLOR}/>}
              <TouchableOpacity onPress={this.donate} style={styles.button}>
                <Text style={styles.buttonText}>Donate Now</Text>
              </TouchableOpacity>
            </Card>
            <Card title='Recent News'>
              { this.state.loading ? <ActivityIndicator color="#0000ff" /> : <Text style={styles.cardText}>{this.state.message}</Text>}
            </Card>
            <Card title='Mission'>
              <Text style={styles.normalText}>To inspire student leaders and impact our communities through innovative, student-lead solutions.</Text>
            </Card>
            <Card title='History'>
              <Text style={styles.normalText}>Charity Ball began in 2004. Students sold tickets for the ball and held a silent auction to raise over $2,000 for Haven House. Each year since, students have chosen a local non-profit to be the beneficiary of Enloe Student Council’s annual fundraising effort which takes place October to December. Enloe students are now preparing for the 14th Annual Charity Ball. Each class has created their own innovative events and ideas to fundraise for and get involved with our annual partner. Events like Space Jam (a concert featuring local student performers), an Art Auction, a Twitter Takeover and more have been added over the course of several years, to the Charity Ball “season.” These new ideas help students increase the fundraising goal from year to year; each consecutive Charity Ball has raised more than the last. In 2017, students raised over $180,000 for The Raleigh-Wake Partnership to End and Prevent Homelessness.</Text>
            </Card>
            <TouchableOpacity onPress={this.openBlog} style={styles.button}>
              <Text style={styles.buttonText}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.openTwitter} style={styles.button}>
              <Text style={styles.buttonText}>Twitter</Text>
            </TouchableOpacity>
            <View style={{height: 30}}/>
        </ScrollView>
    );
  }

  private donate = () => {
    Linking.openURL('https://charityball.webconnex.com/2018')
  }

  private openBlog = () => {
    Linking.openURL('https://enloecharityball.wordpress.com/')
  }
  private openTwitter = () => {
    Linking.openURL('https://twitter.com/EHSCharityBall')
  }
}

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },
  scrollView: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  normalText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 18,
  },
  donationView: {
    padding: 5,
    borderTopWidth: 1,
    borderColor: '#BDBDBD',
  },
  loading: {

  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    height: 45,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
