import React from 'react';
import {
  Image, StyleSheet, Button, TouchableOpacity,
} from 'react-native';
import {
  Card, CardItem, Text, View,

} from 'native-base';


const CardComponent = props => (
  <TouchableOpacity onPress={() => { props.navigation.navigate('Detalle', { slug: props.slug }); }}>
    <Card style={styles.card} noShadow transparent>
      <CardItem cardBody>
        <Image
          source={{ uri: props.imagenportada }}
          style={{
            height: 120, width: 150, flex: 1,
          }}
        />
      </CardItem>
      <View style={styles.header_noticia}>
        <Text titulo_noticia>{props.titulo}</Text>
      </View>
    </Card>
  </TouchableOpacity>

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
    padding: 0,

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
