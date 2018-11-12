import * as React from 'react'
import { Image, ListView, ListViewDataSource, Text, StyleSheet, View } from 'react-native'

interface IState {
  dataSource: ListViewDataSource
}

const IMAGES = [require('../../../assets/gallery/image1.jpg')]

export default class GalleryScreen extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props)
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.state = {
      dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5'])
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20 }}>Gallery</Text>
        <ListView contentContainerStyle={styles.list} dataSource={this.state.dataSource} renderRow={this.renderRow} />
      </View>
    )
  }

  private renderRow = (rowData: any, sectionID: any, rowID: any) => {
    const imgSource = IMAGES[rowID]
    return (
      <View style={styles.item}>
        <Image style={{ width: 160, height: 160 }} source={imgSource} />
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
