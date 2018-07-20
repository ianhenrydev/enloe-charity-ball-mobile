import * as React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { PRIMARY_COLOR } from './src/Constants';
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

  private renderTabBar = (props: any) => <TabBar style={styles.tabBar} indicatorStyle={styles.indicator} {...props}/>;

  private renderScene = SceneMap({
    about: () => <AboutScreen/>,
    calendar: () => <CalendarScreen/>,
    gallery: () => <GalleryScreen/>,
  });

  render() {
    return (
      <TabView 
        style={styles.tabView}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderTabBar={this.renderTabBar}
        onIndexChange={this.handleIndexChange}
        initialLayout={initialLayout}
        tabBarPosition='bottom'
      />
    );
  }
}

const styles = StyleSheet.create({
  tabView: {
    marginTop: (Platform.OS === 'ios') ? 20 : 0,
  },
  tabBar: {
    backgroundColor: PRIMARY_COLOR,
  },
  indicator: {
    backgroundColor: '#00701a',
  },
  container: {
    flex: 1,
  },
});
