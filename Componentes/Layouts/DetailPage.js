// import liraries
import React, { Component } from 'react';
import {
  View, Text, StyleSheet, ScrollView, Image,
} from 'react-native';
import { connect } from 'react-redux';
import HeaderPage from '../header/HeaderPage';
import Share from '../share/Share';
import { actionGetArticuloSlug, actionGetArticulo } from '../../Store/Actions';

// create a component
class DetailPage extends Component {
  constructor() {
    super();
    this.state = {


    };
  }

  componentDidMount() {
    this.props.get_articulo_slug(this.props.navigation.state.params.slug);
    this.props.get_articulo();
  }

  render() {
    const { data } = this.state;
    const articulo = this.props.articulo.articulos;
    console.log(this.props.navigation.state.params.slug);
    console.log(articulo);
    return (
      <View>

        <ScrollView style={styles.container}>
          <HeaderPage {...this.props} data={data} />
          {/* <Share /> */}
          <View style={styles.viewImage}>
            <Image
              source={{ uri: articulo[0].imagenportada }}
              style={{
                width: 400, height: 400, resizeMode: 'contain',
              }}
            />
          </View>
          <View>

            <Text style={styles.titulo}>{articulo[0].titulo}</Text>
            <Text style={styles.descripcion}>
              {articulo[0].cuerpo}
            </Text>
          </View>

          <View style={styles.viewImage}>
            <Image
              source={{ uri: articulo[0].imagenportada }}
              style={{
                width: 400, height: 400, resizeMode: 'contain',
              }}
            />
            <Text style={styles.descripcion}>
              {articulo[0].cuerpo}
            </Text>

          </View>

          <View style={styles.publicidad}>
            <Image source={{ uri: articulo[0].publicidad1 }} style={{ width: 170, height: 170, resizeMode: 'contain' }} />
            <Image source={{ uri: articulo[0].publicidad2 }} style={{ width: 170, height: 170, resizeMode: 'contain' }} />
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
    marginVertical: 20,
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


const mapStateToProps = state => ({
  articulo: state.reducerArticulos,
});

const mapDispatchToProps = dispatch => ({
  get_articulo_slug: (slug) => {
    dispatch(actionGetArticuloSlug(slug));
  },
  get_articulo: () => {
    dispatch(actionGetArticulo());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(DetailPage);
