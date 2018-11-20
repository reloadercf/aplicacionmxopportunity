// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Button,
} from 'react-native';
import Carrouselomponent from '../carrousel/CarrouselComponent';
import CardComponent from '../cards/CardComponent';
import CardList from '../cards/CardList';

// create a component
class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
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
      pruebaDos, categoria,
    } = this.props;

    const { data, visible } = this.state;
    return (
      <ScrollView style={styles.container}>
        <View>
          <Text style={styles.titulo}>{categoria}</Text>
          <Carrouselomponent visible={visible} navigation={this.props.navigation} />
        </View>
        {/* <View style={styles.articulos}>
          {data && data.length > 0
            ? data.map((c, key) => (
              <CardComponent key={key} {...c} pruebaDos={pruebaDos} onOpen={this.onOpen} onCancel={this.onCancel} visible={visible} navigation={this.props.navigation} />
            ))
            : <div>¡¡No hay datos disponibles!!</div>
          }
        </View> */}
        <CardList data={data} navigation={this.props.navigation} />
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

// make this component available to the app
export default CategoryPage;
