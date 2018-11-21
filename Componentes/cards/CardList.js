// import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardComponent from './CardComponent';

const CardList = (props) => {
  console.log(props);
  return (
    <View style={styles.articulos}>
      {props.data && props.data.length > 0
        ? props.data.map((c, key) => (
          <CardComponent key={key} {...c} navigation={props.navigation} />
        ))
        : <div>¡¡No hay datos disponibles!!</div>
          }

    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
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
export default CardList;
