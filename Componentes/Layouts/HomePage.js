// import liraries
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Tabs,
  Tab,
  ScrollableTab,
  Text,
  Button,
} from 'native-base';
import HeaderPage from '../header/HeaderPage';
import CategoryPage from './CategoryPage';


// create a component
class HomePage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    console.log(this.props);
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderPage {...this.props} />
        {/* <Tabs initialPage={0} renderTabBar={() => <ScrollableTab />} tabStyle>
          <Tab heading="LO ULTIMO">

          </Tab>
          <Tab heading="MODA">
            <CategoryPage {...this.props} categoria="MODA" />
          </Tab>
          <Tab heading="DEPORTES">
            <CategoryPage {...this.props} categoria="DEPORTES" />
          </Tab>

          <Tab heading="CINE">
            <CategoryPage {...this.props} categoria="CINE" />
          </Tab>

          <Tab heading="SALUD">
            <CategoryPage {...this.props} categoria="SALUD" />
          </Tab>
        </Tabs> */}
        <CategoryPage {...this.props} categoria={navigation.state.params ? navigation.state.params.categoria : 'Bienestar'} />

      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  tab_categoria: {
    backgroundColor: '#222831',
  },
});

export default HomePage;
