import * as React from 'react'
import { Linking, Image, FlatList, ListViewDataSource, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

interface IState {
  dataSource: ListViewDataSource
}

const IMAGES = [
  {
    image: require('../../../assets/gallery/v1.jpg'),
    link: 'https://youtu.be/0IwUbHWWEWo',
    title: 'The IGNITE program'
  },
  {
    image: require('../../../assets/gallery/v2.jpg'),
    link: 'https://www.youtube.com/watch?v=Y_t1wRKliic',
    title: 'Enloe Charity Ball 2017'
  },
  {
    image: require('../../../assets/gallery/v3.jpg'),
    link: 'https://www.youtube.com/watch?v=JeZme-nFGN4',
    title: 'Enloe HS Charity Ball 2017'
  },
  { image: require('../../../assets/gallery/1.jpg') },
  { image: require('../../../assets/gallery/2.jpg') },
  { image: require('../../../assets/gallery/3.jpg') },
  { image: require('../../../assets/gallery/4.jpg') },
  { image: require('../../../assets/gallery/5.jpg') },
  { image: require('../../../assets/gallery/6.jpg') },
  { image: require('../../../assets/gallery/7.jpg') },
  { image: require('../../../assets/gallery/8.jpg') },
  { image: require('../../../assets/gallery/9.jpg') },
  { image: require('../../../assets/gallery/10.jpg') },
  { image: require('../../../assets/gallery/11.jpg') }
]

export default class GalleryScreen extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20 }}>Gallery</Text>
        <FlatList data={IMAGES} renderItem={this.renderItem} keyExtractor={(item, index) => `item${index}`} />
      </View>
    )
  }

  private renderItem = ({ item }: any) => {
    return (
      <View style={{ margin: 10 }}>
        {item.title && <Text style={{ fontSize: 18 }}>{item.title}</Text>}
        <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }} onPress={() => Linking.openURL(item.link)} disabled={!item.link}>
          <Image style={{ flex: 1, height: 250 }} resizeMode="contain" source={item.image} />
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10
  },
  item: {
    width: 160,
    height: 160,
    borderWidth: 1,
    borderColor: '#424242',
    margin: 5
  }
})
