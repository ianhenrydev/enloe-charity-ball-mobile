import * as React from 'react';
import { Image, Text, ListView, ListViewDataSource, StyleSheet, View } from 'react-native';

export default class Card extends React.Component<{}> {
    render() {
        return ( 
            <View style={styles.container}>
                { this.props.children }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: '#BDBDBD',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
});