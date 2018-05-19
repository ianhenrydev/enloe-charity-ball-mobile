import * as React from 'react';
import { View, StyleSheet, Dimensions, Platform, WebView } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import AboutScreen from './src/AboutScreen';
import CalendarScreen from './src/CalendarScreen';
import GalleryScreen from './src/GalleryScreen';

const initialLayout = {
  height: 0,
  width: Dimensions.get('window').width,
};

type IState = {
  index: Number;
  routes: {key: string, title: string}[];
}

const twitter = '<a class="twitter-timeline" href="https://twitter.com/EHSCharityBall?ref_src=twsrc%5Etfw">Tweets by EHSCharityBall</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';
export default class App extends React.Component<{}, IState> {
  state = {
    index: 0,
    routes: [
      { key: 'about', title: 'About' },
      { key: 'calendar', title: 'Calendar' },
      { key: 'gallery', title: 'Gallery' }
    ],
  };
  
  private handleIndexChange = (index: Number) => this.setState({ index });

  private renderHeader = (props: any) => <TabBar style={styles.tabBar} indicatorStyle={styles.indicator} {...props}/>;

  private renderScene = SceneMap({
    about: () => <AboutScreen/>,
    calendar: () => <CalendarScreen/>,
    gallery: () => <GalleryScreen/>,
  });

  render() {
    return (
      <TabViewAnimated
        style={styles.tabView}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
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
