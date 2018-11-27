// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Button,
} from 'react-native';
import { connect } from 'react-redux';
import Carrouselomponent from '../carrousel/CarrouselComponent';
import CardList from '../cards/CardList';
import { actionCargarPublicacionesStore } from '../../Store/Actions';


// create a component
class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }


  render() {
    const {
      categoria, articulos,
    } = this.props;

    // const filteredProducts = articulos.articulos.filter((p) => p.categoria.nombrecategoria === this.props.categoria);
    console.log(this.props.categoria);
    const { visible } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titulo}>{categoria}</Text>
          { categoria === 'Bienestar' ? <Carrouselomponent visible={visible} navigation={this.props.navigation} /> : null}
        </View>

        <CardList data={articulos.articulos} navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}


// define your styles
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ffff',
  },
  titulo: {
    fontSize: 20,
    paddingVertical: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#252a34',
  },
  articulos: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },


});
export default CategoryPage;
