import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import { collection, onSnapshot, getFirestore, doc, updateDoc } from 'firebase/firestore';
import appFirebase from '../../Credenciales';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const BD = getFirestore(appFirebase);

export default function ListarUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const usuariosCollection = collection(BD, 'Usuarios');
    const unsubscribe = onSnapshot(usuariosCollection, (querySnapshot) => {
      const usuariosList = [];
      querySnapshot.forEach((doc) => {
        const { nombre, email, rol } = doc.data();
        if (rol === '2') {
          usuariosList.push({
            id: doc.id,
            nombre,
            email,
            rol
          });
        }
      });
      console.log('Usuarios cargados:', usuariosList);  // Verifica que los datos se están recibiendo
      setUsuarios(usuariosList);
    });
  
    return () => unsubscribe();
  }, []);

  // Función que maneja navegación a la página de detalles del usuario
  const verDetalles = (id) => {
    navigation.navigate('DetallesUsuario', { idUsuario: id });
  };

  // Renderizamos cada usuario en un ListItem
  const renderUser = ({ item }) => (
    <ListItem bottomDivider onPress={() => verDetalles(item.id)} containerStyle={styles.listItem}>
      <ListItem.Chevron />
      <ListItem.Content>
        <ListItem.Title style={styles.listItemTitle}>{item.nombre}</ListItem.Title>
        <ListItem.Subtitle style={styles.listItemSubtitle}>{item.email}</ListItem.Subtitle>
      </ListItem.Content>
      <TouchableOpacity onPress={() => eliminarUsuario(item.id)}>
        <Icon name="trash" size={30} color="#D32F2F" style={styles.eliminarIcono} />
      </TouchableOpacity>
    </ListItem>
  );

  // Eliminar un usuario pasandolo a inactivo
  const eliminarUsuario = async (id) => {
    const usuarioRef = doc(BD, 'Usuarios', id);
    await updateDoc(usuarioRef, {
      estado: 'INACTIVO'
    });
  };

  return (
    <ImageBackground
      source={require('../../assets/leotut.png')}
      resizeMode={'cover'}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.form}>
          <Text style={styles.titulo}>Lista de Usuarios</Text>
          <FlatList
            data={usuarios}
            keyExtractor={(item) => item.id}
            renderItem={renderUser}
            ListEmptyComponent={<Text style={styles.noData}>No hay usuarios registrados.</Text>}
          />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    margin: 20,
    padding: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 15,
    color: '#1976D2',  // Color del título
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  listItem: {
    marginBottom: 15,  // Añadir un poco de espacio entre los elementos
    borderRadius: 10,
    backgroundColor: '#f9f9f9', // Fondo más claro para cada item
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd',  // Bordes suaves
  },
  listItemTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#777',
  },
  eliminarIcono: {
    marginLeft: 15,
  },
  noData: {
    textAlign: 'center',
    color: '#666',
    marginTop: 20,
  },
});

