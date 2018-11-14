// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container } from 'native-base';
import HeaderPage from '../header/HeaderPage';

// create a component
class DirectorioPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <HeaderPage {...this.props} />
        <View>
          <Text>directorio</Text>
        </View>
      </Container>
    );
  }
}

// define your styles
const styles = StyleSheet.create({

});

// make this component available to the app
export default DirectorioPage;
