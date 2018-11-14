import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Text, View, Container,
} from 'native-base';


const CarrouselCard = (props) => {
  console.log(props);
  return (
    <Container style={styles.container}>
      <View>
        <Text>carrousel Card</Text>
      </View>
    </Container>

  );
};

export default CarrouselCard;


const styles = StyleSheet.create({
  container: {
    padding: 30,
  },
});
