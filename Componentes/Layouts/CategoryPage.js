// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, TouchableOpacity, Button,
} from 'react-native';
import Carrouselomponent from '../carrousel/CarrouselComponent';
import CardComponent from '../cards/CardComponent';

// create a component
class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  onCancel() {
    console.log('CANCEL');
    this.setState({ visible: false });
  }

  onOpen() {
    console.log('OPEN');
    this.setState({ visible: true });
  }

  render() {
    const {
      data, pruebaUno, pruebaDos, categoria,
    } = this.props;
    // console.log(data);


    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titulo}>{categoria}</Text>
          <Carrouselomponent />
        </View>
        <View style={styles.articulos}>
          {data && data.length > 0
            ? data.map((c, key) => (

              <CardComponent key={key} {...c} pruebaDos={pruebaDos} onOpen={this.onOpen} onCancel={this.onCancel} visible={this.state.visible} />

            ))

            : <div>¡¡No hay datos disponibles!!</div>

          }
        </View>
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
  // card: {
  //   marginVertical: 10,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },


});

// make this component available to the app
export default CategoryPage;
