import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

import Map from "../../Map";
import Credentials from '../../Credenciales';

import { Encab } from "../Components/Encabezado";
import { Boton } from "../Components/BotonPiePan1";

export default function Pan1() {
  return (
    <View style={styles.container}>
      <Encab />
      <Image source={{ uri: '../assets/LOL.png' }} style={styles.img} />
      <Boton/>
    </View>
  );
};
/*
const MapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${Credentials.mapsKey}`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Map
          googleMapURL={MapURL}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
          loadingElement={<p>Cargando</p>}
        />
      </div>
    );
  }
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'contain', 
  },
});