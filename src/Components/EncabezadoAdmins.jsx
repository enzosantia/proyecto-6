import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image, Modal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const Encab2 = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const navigation = useNavigation();

  // Función para alternar modal y establecer menú
  const toggleModal = (menu) => {
    setSelectedMenu(menu);
    setModalVisible(!modalVisible);
  };

  // Navegación a diferentes pantallas
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
    setModalVisible(false); // Cerrar el modal después de navegar
  };

  return (
    <View style={styles.container}>
      {/* Botón del menú de usuario */}
      <TouchableOpacity onPress={() => toggleModal('user')} style={styles.menubutton}>
        <Image source={require('../../assets/user.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* Botón del menú de configuración */}
      <TouchableOpacity onPress={() => toggleModal('settings')} style={styles.menubutton}>
        <Image source={require('../../assets/settings.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} transparent={true} animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.menu}>
            {selectedMenu === 'settings' && (
              <>
                <TouchableOpacity onPress={() => navigateToScreen('RegAdmin')} style={styles.menuItem}>
                  <Text style={styles.menuText}>Registrar Administrador</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('ModAdmins')} style={styles.menuItem}>
                  <Text style={styles.menuText}>Modificar Administrador</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('ListarAdmin')} style={styles.menuItem}>
                  <Text style={styles.menuText}>Listar Administradores</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigateToScreen('ListarUsuarios')} style={styles.menuItem}>
                  <Text style={styles.menuText}>Listar Usuarios</Text>
                </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToScreen('ModificarUsers')} style={styles.menuItem}>
            <Text style={styles.menuText}>Modificar Usuarios</Text>
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
  container: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 },
  menubutton: { padding: 10 },
  icon: { width: 30, height: 30 },
  modalContainer: { flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.7)', justifyContent: 'center', alignItems: 'center' },
  menu: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '80%' },
  menuItem: { paddingVertical: 15, borderBottomWidth: 1, borderBottomColor: '#ccc' },
  menuText: { fontSize: 16, color: '#333' },
  closeButton: { marginTop: 10, paddingVertical: 10, alignItems: 'center', backgroundColor: '#ff4757', borderRadius: 5 },
  closeButtonText: { color: '#fff', fontWeight: 'bold' },
});
