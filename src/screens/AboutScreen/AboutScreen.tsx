import * as React from 'react'
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  ProgressBarAndroid,
  Platform,
  ProgressViewIOS,
  ScrollView,
  Linking
} from 'react-native'
import firebase from 'firebase'
require('firebase/firestore')
import Card from '../../components/Card/Card'
import { PRIMARY_COLOR } from '../../Constants'

type IState = {
  donationTotal: number
  message: string
  volunteerHours: number
  loading: boolean
}

export default class AboutScreen extends React.Component<{}, IState> {
  private firestore: firebase.firestore.Firestore
  constructor(props: any) {
    super(props)
    this.state = {
      donationTotal: 0,
      message: '',
      volunteerHours: 0,
      loading: false
    }
    this.firestore = firebase.firestore()
    this.firestore.settings({ timestampsInSnapshots: true })
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.firestore
      .collection('info')
      .doc('about')
      .get()
      .then(doc => {
        if (doc.exists) {
          this.setState({ donationTotal: doc.get('donation_total'), message: doc.get('message'), volunteerHours: doc.get('volunteer_hours'), loading: false })
        } else {
          console.log('No such document!')
          this.setState({ loading: false })
        }
      })
      .catch(function(error) {
        console.log('Error getting document:', error)
      })
  }

  render() {
    const percent = this.state.donationTotal / 200000
    return (
      <ScrollView style={styles.scrollView}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20 }}>Enloe Charity Ball 2018</Text>
        <View style={{ flexDirection: 'row' }}>
          <Image style={{ flex: 1, height: 200 }} resizeMode="contain" source={require('../../../assets/small-banner.jpg')} />
        </View>
        <Card title="Total Raised">
          <Text style={{ fontSize: 18 }}>{`$${this.state.donationTotal} of $200,000 goal`}</Text>
          {Platform.OS === 'ios' ? (
            <ProgressViewIOS style={{ marginTop: 5, marginBottom: 5 }} progress={percent} progressTintColor={PRIMARY_COLOR} />
          ) : (
            <ProgressBarAndroid styleAttr="Horizontal" progress={percent} indeterminate={false} color={PRIMARY_COLOR} />
          )}
          <TouchableOpacity onPress={this.donate} style={styles.button}>
            <Text style={styles.buttonText}>Donate Now</Text>
          </TouchableOpacity>
        </Card>
        <Card title="Volunteer Hours">
          <Text style={{ fontSize: 36 }}>{this.state.volunteerHours}</Text>
        </Card>
        <Card title="Recent News">
          {this.state.loading ? <ActivityIndicator color="#0000ff" /> : <Text style={styles.cardText}>{this.state.message}</Text>}
        </Card>
        <Card title="2018 Beneficiary: The Autism Society of North Carolina">
          <Text style={styles.normalText}>
            On August 15, 2018, Enloe Charity Ball was proud to announce that our beneficiary for 2018 is the Autism Society of North Carolina. The Autism
            Society, also known as ASNC, not only educates communities about autism, but also supports individuals with autism and their families. They strive
            to improve the lives of individuals with autism and also help them become more independent. The funds we plan to raise this year for ASNC will be
            going towards the creation of an IGNITE program in Raleigh.
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.autismsociety-nc.org/')} style={styles.button}>
            <Text style={styles.buttonText}>Learn More</Text>
          </TouchableOpacity>
        </Card>
        <Card title="Christmas Parade Float">
          <Text style={styles.normalText}>
            Enloe Charity Ball and The Autism Society of NC will have a float in the Raleigh Christmas Parade on November 17th. Our float is sponsored by Alamo
            Drafthouse and Cinema. Live coverage of the parade on ABC 11!
          </Text>
          <Image style={{ flex: 1, height: 150 }} resizeMode="contain" source={require('../../../assets/alamo.png')} />
        </Card>
        <Card title="Mission">
          <Text style={styles.normalText}>To inspire student leaders and impact our communities through innovative, student-lead solutions.</Text>
        </Card>
        <Card title="History">
          <Text style={styles.normalText}>
            Charity Ball began in 2004. Students sold tickets for the ball and held a silent auction to raise over $2,000 for Haven House. Each year since,
            students have chosen a local non-profit to be the beneficiary of Enloe Student Council’s annual fundraising effort which takes place October to
            December. Enloe students are now preparing for the 14th Annual Charity Ball. Each class has created their own innovative events and ideas to
            fundraise for and get involved with our annual partner. Events like Space Jam (a concert featuring local student performers), an Art Auction, a
            Twitter Takeover and more have been added over the course of several years, to the Charity Ball “season.” These new ideas help students increase the
            fundraising goal from year to year; each consecutive Charity Ball has raised more than the last. In 2017, students raised over $180,000 for The
            Raleigh-Wake Partnership to End and Prevent Homelessness.
          </Text>
        </Card>
        <Card title="House Of Swank+Enloe Charity Ball">
          <Text style={styles.normalText}>New Enloe Charity Ball merchandise created in partnership with House of Swank Clothing is on sale NOW</Text>
          <TouchableOpacity onPress={() => Linking.openURL('http://www.houseofswankclothing.com/enloe-charity-ball/')} style={styles.button}>
            <Text style={styles.buttonText}>Shop</Text>
          </TouchableOpacity>
        </Card>
        <Card title="Art With Purpose">
          <Text style={styles.normalText}>
            Enloe Charity Ball will be hosting an art experience during Charity Week (December 1-7) at the Raleigh Visual Art Exchange. The interactive exhibit
            will kick-off with a 21+ party on December 1st. Student performances on every weeknight of the experience leading up to Enloe Charity Ball on the
            8th. Check our calendar for performance schedule!
          </Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://visualartexchange.wufoo.com/forms/qqoyds3196d9oe/')} style={styles.button}>
            <Text style={styles.buttonText}>Buy Tickets</Text>
          </TouchableOpacity>
        </Card>
        <Card title="Oak City Open Mic Night">
          <Text style={styles.normalText}>
            Enloe Charity Ball will be hosting their second annual Open Mic Night at The Boys and Girls Club Teen Center on November 29th at 5pm. There will be
            performances of all kinds including poetry, stand up comedy, and live music. All of the event’s proceeds will go towards the Autism Society of North
            Carolina.
          </Text>
          <Image style={{ width: 300, height: 390, alignSelf: 'center' }} resizeMode="contain" source={require('../../../assets/openmic.jpg')} />
        </Card>
        <TouchableOpacity onPress={this.openBlog} style={styles.button}>
          <Text style={styles.buttonText}>Blog</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.openTwitter} style={styles.button}>
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/enloecharityball/?hl=en')} style={styles.button}>
          <Text style={styles.buttonText}>Instagram</Text>
        </TouchableOpacity>
        <View style={{ height: 30 }} />
      </ScrollView>
    )
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
    marginBottom: 10
  },
  scrollView: {
    padding: 20,
    flex: 1,
    backgroundColor: '#FAFAFA'
  },
  normalText: {
    fontSize: 18,
    alignSelf: 'flex-start',
    marginBottom: 10
  },
  cardText: {
    fontSize: 18
  },
  donationView: {
    padding: 5,
    borderTopWidth: 1,
    borderColor: '#BDBDBD'
  },
  loading: {},
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: PRIMARY_COLOR,
    height: 45,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5
  },
  buttonText: {
    color: '#fff',
    fontSize: 16
  }
})
