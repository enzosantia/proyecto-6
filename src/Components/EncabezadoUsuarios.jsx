import React, { useState } from 'react'; 
import { View, TouchableOpacity, StyleSheet, Image, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Encab = ({ darkMode, toggleDarkMode }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const navigation = useNavigation();

  // Función para alternar la visibilidad del modal y establecer el menú seleccionado
  const toggleModal = (menu) => {
    setSelectedMenu(menu);
    setModalVisible(!modalVisible);
  };

  // Funciones de navegación
  const login = () => {
    setModalVisible(false);
    navigation.navigate('Logueo');
  };

  const Quejas = () => {
    setModalVisible(false);
    navigation.navigate('Quejas');
  };

  const Info = () => {
    setModalVisible(false);
    navigation.navigate('Info');
  };

  const goToAyuda = () => {
    setModalVisible(false);
    navigation.navigate('Ayuda');
  };

  return (
    <View
      style={[
        styles.container,
        darkMode ? styles.darkContainer : styles.lightContainer // Cambia el estilo según el modo
      ]}
    >
      {/* Botón del menú de usuario */}
      <TouchableOpacity onPress={() => toggleModal('user')} style={styles.menubutton}>
        <Image
          source={require('../../assets/user.png')} 
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Botón del menú de configuración */}
      <TouchableOpacity onPress={() => toggleModal('settings')} style={styles.menubutton}>
        <Image
          source={require('../../assets/settings.png')} 
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Modal para mostrar opciones de usuario o configuración */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            {/* Opciones del menú de usuario */}
            {selectedMenu === 'user' && (
              <>
                <TouchableOpacity onPress={login} style={styles.menuItem}>
                  <Text style={styles.menuText}>Cerrar sesión</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Quejas} style={styles.menuItem}>
                  <Text style={styles.menuText}>Quejas</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={Info} style={styles.menuItem}>
                  <Text style={styles.menuText}>Más Info</Text>
                </TouchableOpacity>
              </>
            )}

            {/* Opciones del menú de configuración */}
            {selectedMenu === 'settings' && (
              <>
                <TouchableOpacity onPress={toggleDarkMode} style={styles.menuItem}>
                  <Text style={styles.menuText}>
                    {darkMode ? 'Modo claro' : 'Modo oscuro'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={goToAyuda} style={styles.menuItem}>
                  <Text style={styles.menuText}>Ayuda</Text>
                </TouchableOpacity>
              </>
            )}

            {/* Botón para cerrar el modal */}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

// Estilos del componente
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#1c1c1c', // Fondo oscuro para el modo oscuro
  },
  lightContainer: {
    backgroundColor: '#f0f0f0', // Fondo claro para el modo claro
  },
  menubutton: {
    padding: 10,
  },
  icon: {
    width: 30, // Tamaño del ícono
    height: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo translúcido para el modal
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#fff', // Fondo del menú dentro del modal
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  menuItem: {
    paddingVertical: 15, // Espaciado vertical entre elementos
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
    color: '#333', // Color del texto para el menú
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ff4757', // Fondo del botón "Cerrar"
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff', // Color del texto del botón
    fontWeight: 'bold',
  },
});
