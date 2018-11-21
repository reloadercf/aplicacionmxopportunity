// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
import HeaderPage from '../header/HeaderPage';
import Share from '../share/Share';

// create a component
class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      data:
        {
          title: 'LA NEGOCIACION ES IMPORTANTE EN NUESTRAS VIDAS',
          text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard',
          image: require('../../assets/images/noticias/1.jpeg'),
        },

    };
  }

  render() {
    const { data } = this.state;
    console.log(this.props.navigation.state.params.name);
    return (
      <View>
        <HeaderPage {...this.props} data={data} />
        <ScrollView style={styles.container}>

          {/* <Share /> */}
          <View style={styles.viewImage}>
            <Image
              source={data.image}
              style={{
                width: 360, resizeMode: 'contain',
              }}
            />
          </View>
          <View>

            <Text style={styles.titulo}>{data.title}</Text>
            <Text style={styles.descripcion}>
            Descripcion de la imagen de como debe funcionar el detail en la
            app  Descripcion de la imagen de como debe funcionar el detail en la
            app
            </Text>
          </View>

          <View style={styles.viewImage}>
            <Image
              source={data.image}
              style={{
                width: 350, resizeMode: 'contain',
              }}
            />

            <Text style={styles.descripcion}>
            Descripcion de la imagen de como debe funcionar el detail en la
            app  Descripcion de la imagen de como debe funcionar el detail en la
            app
            </Text>

          </View>

          <View style={styles.publicidad}>
            <Image source={data.image} style={{ width: 170, height: 120, resizeMode: 'contain' }} />
            <Image source={data.image} style={{ width: 170, height: 120, resizeMode: 'contain' }} />
          </View>


        </ScrollView>
      </View>

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
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 2,
    padding: 5,
  },
  descripcion: {
    fontSize: 14,
    letterSpacing: 1,
    lineHeight: 20,
    fontWeight: 'normal',
    padding: 5,
  },
  publicidad: {
    marginTop: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',

  },
  viewImage: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

  },
});

// make this component available to the app
export default DetailPage;
