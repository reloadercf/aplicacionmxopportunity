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
import { connect } from 'react-redux';
import HeaderPage from '../header/HeaderPage';
import CategoryPage from './CategoryPage';
import { actionPruebaUno, actionPruebaDos } from '../../Store/Actions';
import CardList from '../cards/CardList';


// create a component
class ModaPage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }


  render() {
    console.log(this.props);
    return (
      <Container>
        <HeaderPage {...this.props} />
        <CategoryPage {...this.props} categoria="MODA" />
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

const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});


const mapDispatchToProps = dispatch => ({
  prueba_uno: () => {
    dispatch({ type: 'PRUEBA_UNO' });
  },
  prueba_dos: () => {
    dispatch({ type: 'PRUEBA_DOS' });
  },
});


export default connect(mapStateToProps, mapDispatchToProps)(ModaPage);
