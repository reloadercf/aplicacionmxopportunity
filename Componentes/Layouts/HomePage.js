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
    console.log(this.props.numero);
    const { data } = this.state;
    return (
      <Container>
        <HeaderPage {...this.props} />
        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="destacado">
            <CategoryPage {...this.props} data={data} categoria="Destacado" pruebaUno={this.props.prueba_uno} pruebaDos={this.props.prueba_dos} />
          </Tab>
          <Tab heading="deporte">
            <CategoryPage {...this.props} data={data} categoria="deporte" />
          </Tab>
          <Tab heading="salud">
            <CategoryPage {...this.props} data={data} categoria="salud" />
          </Tab>
          <Tab heading="salud">
            <CategoryPage {...this.props} data={data} categoria="salud" />
          </Tab>

          <Tab heading="salud">
            <CategoryPage {...this.props} data={data} categoria="salud" />
          </Tab>
          <Tab heading="salud">
            <CategoryPage {...this.props} data={data} categoria="salud" />
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
