import * as React from 'react';
import { Image, ListView, ListViewDataSource, Text, StyleSheet, View } from 'react-native';

interface IState {
    dataSource: ListViewDataSource;
}

const IMAGES = [
    'https://firebasestorage.googleapis.com/v0/b/enloe-charity-ball.appspot.com/o/thumb1.jpg?alt=media&token=b38dfbee-458b-45b1-8229-ea9b817391e9',
    'https://firebasestorage.googleapis.com/v0/b/enloe-charity-ball.appspot.com/o/thumb2.jpg?alt=media&token=0b72f357-d79b-43a2-8d38-32f0000186a9',
    'https://firebasestorage.googleapis.com/v0/b/enloe-charity-ball.appspot.com/o/thumb3.jpg?alt=media&token=e9004e28-76e2-422d-b0ee-a7fd90099606',
    'https://firebasestorage.googleapis.com/v0/b/enloe-charity-ball.appspot.com/o/thumb4.jpg?alt=media&token=155b4cbb-1c9c-4050-997d-37c98f6d2add',
    'https://firebasestorage.googleapis.com/v0/b/enloe-charity-ball.appspot.com/o/thumb5.jpg?alt=media&token=6fe43056-952a-4610-ad34-ec75ce319051',
]

export default class GalleryScreen extends React.Component<{}, IState> {
    constructor(props:any) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['1', '2','3', '4','5']),
        };
    }

    render() {
        return ( 
            <View style={styles.container}>
                <Text style={{ fontSize: 26, fontWeight: 'bold', marginBottom: 20, marginTop: 20, marginLeft: 20}}>Gallery</Text>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }

    private renderRow = (rowData, sectionID, rowID) => {
        const imgSource = IMAGES[rowID]
        return (
            <View style={styles.item}>
                <Image style={{width: 160, height: 160}} source={{ uri: imgSource}}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  list: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  item: {
    width: 160,
    height: 160,
    borderWidth: 1,
    borderColor: '#424242',
    margin: 5,
  }
});
