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


// create a component
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: 'LA NEGOCIACION ES IMPORTANTE EN NUESTRAS VIDAS',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/1.jpeg'),
        },
        {
          title: 'LA NEGOCIACION ES IMPORTANTE EN NUESTRAS VIDAS',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/2.jpeg'),
        },
        {
          title: 'Lorem Ipsum',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/3.jpeg'),
        },
        {
          title: 'Lorem Ipsum',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/1.jpeg'),
        },
        {
          title: 'Lorem Ipsum',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/2.jpeg'),
        },
        {
          title: 'Lorem Ipsum',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/3.jpeg'),
        },
        {
          title: 'Lorem Ipsum',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/2.jpeg'),
        },

      ],
    };
  }


  render() {
    console.log(this.props);
    return (
      <Container>
        <HeaderPage {...this.props} />
        <Tabs initialPage={0} renderTabBar={() => <ScrollableTab />} tabStyle>
          <Tab heading="LO ULTIMO">
            <CategoryPage {...this.props} categoria="LO ULTIMO" pruebaUno={this.props.prueba_uno} pruebaDos={this.props.prueba_dos} />
          </Tab>
          <Tab heading="MODA">
            <CategoryPage {...this.props} categoria="MODA" pruebaUno={this.props.prueba_uno} pruebaDos={this.props.prueba_dos} />
          </Tab>
          <Tab heading="DEPORTES">
            <CategoryPage {...this.props} categoria="LDEPORTES" pruebaUno={this.props.prueba_uno} pruebaDos={this.props.prueba_dos} />
          </Tab>

          <Tab heading="CINE">
            <CategoryPage {...this.props} categoria="CINE" pruebaUno={this.props.prueba_uno} pruebaDos={this.props.prueba_dos} />
          </Tab>

          <Tab heading="SALUD">
            <CategoryPage {...this.props} categoria="SALUD" pruebaUno={this.props.prueba_uno} pruebaDos={this.props.prueba_dos} />
          </Tab>
        </Tabs>

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


export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
