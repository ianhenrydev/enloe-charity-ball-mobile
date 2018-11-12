import * as React from 'react'
import { Image, FlatList, ListViewDataSource, Text, StyleSheet, View } from 'react-native'

interface IState {
  dataSource: ListViewDataSource
}

const IMAGES = [
  { image: require('../../../assets/gallery/1.jpg') },
  { image: require('../../../assets/gallery/2.jpg') },
  { image: require('../../../assets/gallery/3.jpg') },
  { image: require('../../../assets/gallery/4.jpg') },
  { image: require('../../../assets/gallery/5.jpg') },
  { image: require('../../../assets/gallery/6.jpg') }
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

  private renderItem = ({ item }) => {
    return (
      <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
        <Image style={{ flex: 1, height: 250 }} resizeMode="contain" source={item.image} />
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
