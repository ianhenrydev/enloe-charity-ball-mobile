import * as React from 'react';
import { Image, StyleSheet, Dimensions, Platform } from 'react-native';
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

  private renderTabBar = (props: any) => (
    <TabBar
      {...props}
      style={styles.tabBar} 
      indicatorStyle={styles.indicator}
      /*renderIcon={this.renderIcon}*/
    />
  );

  private renderIcon = ({route}) => <Image style={{height: 22, width: 22}} source={route.icon}/>

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
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
});
