//constantes importadas de react native y react base
import React, { Component } from "react";
import { View, StyleSheet, Image } from "react-native";

//pimportacion de mapas
import Map from "../../Map";
import Credentials from '../../Credenciales';
// import MapView, {Marker, Polyline} from 'react-native-maps';

//importacion de componentes externos
import { Encab } from "../Components/EncabezadoUsuarios";
import { Boton } from "../Components/BotonPiePan1";

//duncion que exporta por defecto la pantalla
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
export default function Pan1() {

// Iniciar mapa en las cords de la EPET20

  const [origin, setOrigin] = React.useState({
  latitute: -38.9648026,
  longitude: -68.0890925,
  });
  return (
    <View style={styles.container}>
      <MapView 
      style={styles.map} 
      initialRegion={{
      latitude: origin.latitude,
      longitude: origin.longitude,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04
      }}
      >

      // Coords de comisarias marcadas en el mapa

      <Marker
        coordinate={"COMISARIA LAT Y LONG"}
      />
            <Marker
        coordinate={""}
      />

      </MapView>
      
    </View>
*/

//estylos
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    flex: 1,
    resizeMode: 'contain', 
  },
});