import * as React from 'react';
import { View, StyleSheet, Dimensions, Platform } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import About from './src/About';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

const FirstRoute = () => <View style={[ styles.container, { backgroundColor: '#ff4081' } ]} />;
const SecondRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;
const ThirdRoute = () => <View style={[ styles.container, { backgroundColor: '#673ab7' } ]} />;

type IState = {
  index: Number;
  routes: {key: string, title: string}[];
}

export default class App extends React.Component<{}, IState> {
  state = {
    index: 0,
    routes: [
      { key: 'first', title: 'About' },
      { key: 'second', title: 'Twitter' },
      { key: 'third', title: 'Blog' }
    ],
  };
  
  private handleIndexChange = (index: Number) => this.setState({ index });

  private renderHeader = (props: any) => <TabBar style={styles.tabBar} indicatorStyle={styles.indicator} {...props}/>;

  _renderScene = SceneMap({
    first: () => <About/>,
    second: SecondRoute,
    third: SecondRoute,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.tabView}
        navigationState={this.state}
        renderScene={this._renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    marginTop: (Platform.OS === 'ios') ? 20 : 24,
  },
  tabBar: {
    backgroundColor: '#43a047',
  },
  indicator: {
    backgroundColor: '#00701a',
  },
  container: {
    flex: 1,
  },
});
