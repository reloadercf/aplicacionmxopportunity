// import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
// import Infoslider from 'react-native-infoslider';
// import Slideshow from 'react-native-slideshow';
import ImageSliderz from 'react-native-image-slideshow';
// import CarrouselCard from './CarrouselCard';
// create a component

class Carrouselomponent extends Component {
  constructor() {
    super();
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'LA IMPORTANCIA DE LOS NEGOCIOS ENTRE MEXICO Y ESPAÑA',
          url: 'https://images.pexels.com/photos/6420/metal-easter-eggs-basket.jpg?auto=compress&cs=tinysrgb&h=650&w=940',
        }, {
          title: 'ESTA ES UNA PREBA DEL FUNCINAMIENTO DEL TITULO',

          url: 'https://images.pexels.com/photos/533930/pexels-photo-533930.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        }, {
          title: 'Title 3',

          url: 'https://images.pexels.com/photos/605408/pexels-photo-605408.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
        },
      ],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === (this.state.dataSource.length - 1) ? 0 : this.state.position + 1,
        });
      }, 2000),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }


  render() {
    return (
      <View style={styles.container}>

        <ImageSliderz

          dataSource={this.state.dataSource}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          height={250}
          arrowSize={1}
          scrollEnabled={false}


        />
      </View>
    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

// make this component available to the app
export default Carrouselomponent;
