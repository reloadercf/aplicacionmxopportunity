// import liraries
import React, { Component } from 'react';
import {
  Container,
} from 'native-base';
import { connect } from 'react-redux';
import HeaderPage from '../header/HeaderPage';
import CategoryPage from './CategoryPage';
import {
  actionGetArticulosCategoria, actionCargarPublicacionesStore, actionGetEmpresa, actionGetEmpresaInfo, actionGetCategoriasEmpresa,
} from '../../Store/Actions';


const EMPRESA = 'PLANB';
// create a component
class HomePage extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    this.props.get_empresa(EMPRESA);
    this.props.get_empresa_info();
    this.props.get_empresa_categorias();
    this.props.get_articulos();
  }

  render() {
    console.log(this.props);
    const { navigation } = this.props;
    return (
      <Container>
        <HeaderPage {...this.props} />
        <CategoryPage {...this.props} get_categoria={this.props.get_categoria} categoria={navigation.state.params ? navigation.state.params.categoria : 'Bienestar'} articulos={navigation.state.param ? navigation.state.params.articulos : this.props.articulos} />
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  articulos: state.reducerArticulos,
  empresa: state.reducerEmpresa,
});

const mapDispatchToProps = dispatch => ({
  get_categoria: (categoria) => {
    dispatch(actionGetArticulosCategoria(categoria));
  },
  get_articulos: () => {
    dispatch(actionCargarPublicacionesStore());
  },
  get_empresa: (varEmpresa) => {
    dispatch(actionGetEmpresa(varEmpresa));
  },
  get_empresa_info: () => {
    dispatch(actionGetEmpresaInfo());
  },
  get_empresa_categorias: () => {
    dispatch(actionGetCategoriasEmpresa());
  },

});
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
