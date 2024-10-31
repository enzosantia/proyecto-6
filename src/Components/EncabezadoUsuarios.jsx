import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Modal, Text } from 'react-native';

export const Encab = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [darkMode, setDarkMode] = useState(false); // Estado para el modo oscuro

  const toggleModal = (menu) => {
    setSelectedMenu(menu);
    setModalVisible(!modalVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode); // Alternar entre modo oscuro y modo claro
  };

  return (
    <View style={[styles.container, darkMode ? styles.darkContainer : styles.lightContainer]}>
      {/* Menú de usuario */}
      <TouchableOpacity onPress={() => toggleModal('user')} style={styles.menubutton}>
        <Image
          source={require('../../assets/user.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Menú opciones */}
      <TouchableOpacity onPress={() => toggleModal('settings')} style={styles.menubutton}>
        <Image
          source={require('../../assets/settings.png')}
          style={styles.icon}
        />
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            {selectedMenu === 'user' && (
              <>
                <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
                  <Text style={styles.menuText}>Cerrar sesión</Text>
                </TouchableOpacity>
              </>
            )}
            {selectedMenu === 'settings' && (
              <>
                <TouchableOpacity onPress={toggleDarkMode} style={styles.menuItem}>
                  <Text style={styles.menuText}>{darkMode ? 'Modo claro' : 'Modo oscuro'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {}} style={styles.menuItem}>
                  <Text style={styles.menuText}>Opción 2</Text>
                </TouchableOpacity>
              </>
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Cerrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  darkContainer: {
    backgroundColor: '#1c1c1c', // Fondo oscuro
  },
  lightContainer: {
    backgroundColor: '#f0f0f0', // Fondo claro
  },
  menubutton: {
    padding: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Fondo oscuro más intenso
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    elevation: 5, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuText: {
    fontSize: 16,
    color: '#333', // Color del texto en modo claro
  },
  closeButton: {
    marginTop: 10,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#ff4757', // Color de fondo del botón cerrar
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff', // Color del texto del botón cerrar
    fontWeight: 'bold',
  },
  darkMenu: {
    backgroundColor: '#333', // Fondo del menú en modo oscuro
  },
  darkMenuText: {
    color: '#fff', // Color del texto en modo oscuro
  },
});
