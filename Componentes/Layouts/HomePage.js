// import liraries
import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import { connect } from 'react-redux';
import HeaderPage from '../header/HeaderPage';
import CategoryPage from './CategoryPage';
import { actionCargarPublicacionesStore, actionGetArticulosCategoria, actionGetArticulo } from '../../Store/Actions';


// create a component
class HomePage extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    this.props.navigation.state.params ? this.props.get_categoria(this.props.navigation.state.params.categoria) : this.props.get_categoria('Bienestar');
    this.props.get_articulos();
    this.props.get_articulo();
  }

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderPage {...this.props} />
        <CategoryPage {...this.props} categoria={navigation.state.params ? navigation.state.params.categoria : 'Bienestar'} articulos={navigation.state.param ? navigation.state.params.articulos : this.props.articulos} />
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  articulos: state.reducerArticulos,
});
const mapDispatchToProps = dispatch => ({
  get_categoria: (categoria) => {
    dispatch(actionGetArticulosCategoria(categoria));
  },
  get_articulos: () => {
    dispatch(actionCargarPublicacionesStore());
  },
  get_articulo: () => {
    dispatch(actionGetArticulo());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
