import * as React from 'react';
import { Image, Text, ListView, ListViewDataSource, StyleSheet, View } from 'react-native';

interface IState {
    dataSource: ListViewDataSource;
}

export default class GalleryScreen extends React.Component<{}, IState> {
    constructor() {
        super({});
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
          dataSource: ds.cloneWithRows(['row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2','row 1', 'row 2',]),
        };
    }

    render() {
        return ( 
            <View style={styles.container}>
                <ListView
                    contentContainerStyle={styles.list}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <View style={styles.item}><Image style={{width: 150, height: 150}} source={require('../assets/icon.png')}/></View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    padding: 5,
  }
});
