import * as React from 'react';
import { Image, Dimensions, SafeAreaView, StyleSheet, Platform } from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { PRIMARY_COLOR } from './src/Constants';
import AboutScreen from './src/screens/AboutScreen';
import CalendarScreen from './src/screens/CalendarScreen';
import GalleryScreen from './src/screens/GalleryScreen';

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
    />
  );

  private renderIcon = ({route}: any) => <Image style={{height: 22, width: 22}} source={route.icon}/>

  private renderScene = SceneMap({
    about: () => <AboutScreen/>,
    calendar: () => <CalendarScreen/>,
    gallery: () => <GalleryScreen/>,
  });

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#FAFAFA'}}>
        <TabView 
          style={styles.tabView}
          navigationState={this.state}
          renderScene={this.renderScene}
          renderTabBar={this.renderTabBar}
          onIndexChange={this.handleIndexChange}
          initialLayout={initialLayout}
          tabBarPosition='bottom'
        />
      </SafeAreaView>
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
