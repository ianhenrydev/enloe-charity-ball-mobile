import * as React from 'react'
import { Text, StyleSheet, View } from 'react-native'

interface Props {
  title: string
}

export default class Card extends React.Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.cardTitle}>{this.props.title}</Text>
        {this.props.children}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#fff',
    backgroundColor: '#fff',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginTop: 10,
    padding: 10
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 5
  }
})
