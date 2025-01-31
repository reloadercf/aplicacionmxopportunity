import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Container, StyleProvider,
} from 'native-base';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { RutasPrincipales } from './Componentes/RutasPrincipales';
import store from './Store/Store';

console.disableYellowBox = ['Remote debugger'];


class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  // componentDidMount() {
  //   this.get_empresa(EMPRESA);
  //   this.get_categorias(EMPRESA);
  // }

  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <Container style={styles.container}>
            <RutasPrincipales />
          </Container>
        </Provider>
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0000',
    marginTop: 30,
  },
});

export default App;
