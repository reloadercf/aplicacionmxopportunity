import React from 'react';
import {
  Image, StyleSheet, TouchableOpacity,
} from 'react-native';
import {
  Card, CardItem, Thumbnail, Text, Icon, Left, Body, Right, View, Button,
} from 'native-base';


const CardComponent = props => (
  <Card style={styles.card} noShadow transparent>
    <CardItem cardBody>
      <Image source={props.image} style={{ height: 120, width: 150, flex: 1 }} />
    </CardItem>
    <View style={styles.header_noticia}>
      <Text titulo_noticia>{props.title}</Text>
    </View>
  </Card>

);
export default CardComponent;


const styles = StyleSheet.create({
  card: {
    marginVertical: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 170,
  },
  header_noticia: {
    width: 170,
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#222831',
    padding: 2,

  },
  autor_foto: {
    marginRight: 10,
  },

});
